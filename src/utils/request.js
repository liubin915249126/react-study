import fetch from 'dva/fetch';
import { notification,message,description} from 'antd';
import { routerRedux } from 'dva/router';
import store from '@/main'
import {getQueryString} from './utils'

function checkStatus(response) {
	debugger
	if (response.status >= 200 && response.status < 300) {
		return response;
  }
	notification.error({
		message: `请求错误 ${response.status}: ${response.url}`,
		description: response.statusText,
	});
	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
	const AUTH_TOKEN = localStorage.getItem('token')
	const appId = localStorage.getItem('appId')
	const defaultOptions = {
		credentials: 'include'
	};
	const newOptions = { ...defaultOptions, ...options };
	if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
		if(newOptions.body instanceof FormData){
			newOptions.headers = {
				Accept: 'application/json',
				'Authorization':AUTH_TOKEN,
        appId:appId,
				// 'Content-Type': 'multipart/form-data',
				'Content-Type': 'application/json; charset=utf-8',
				...newOptions.headers,
			  };
		}else{
			newOptions.headers = {
				Accept: 'application/json',
        appId:appId,
				'Content-Type': 'application/json; charset=utf-8',
				'Authorization':AUTH_TOKEN,
				...newOptions.headers
			};
			newOptions.body = JSON.stringify(newOptions.body);
		}

	}
	return fetch(url, newOptions)
		.then(checkStatus)
    .then(response =>response.json())
    .then((res)=>{
			const {location:{href}} = window;
			let redirct = (href.split('#')[1])
      if(res.data&&res.data.code==401){
				const {dispatch} = store
				if(redirct.indexOf('redirct')>=1){
					const redirctArr = redirct.split('?')||[]
					redirct = getQueryString("redirct",(redirctArr[redirctArr.length-1]))
					redirct = decodeURI(escape(redirct))
					//debugger;
					dispatch(routerRedux.push(`/login?redirct=${redirct}`))
				}else{
					// redirct = decodeURI(escape(redirct))
					dispatch(routerRedux.push(`/login?redirct=${redirct}`))
				}        
      }
      return res
    })
		.catch((error) => {
			if (error.code) {
				notification.error({
					message: error.name,
					description: error.message,
				});
			}
			if ('stack' in error && 'message' in error) {
				notification.error({
					message: `请求错误: ${url}`,
					description: error.message,
				});
			}
			return error;
		});
}

export function requestWithExcal(url, options) {
  const AUTH_TOKEN = localStorage.getItem('token')
  const appId = localStorage.getItem('appId')
	const defaultOptions = {
		credentials: 'include'
	};
	const newOptions = { ...defaultOptions, ...options };
	if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
		if(newOptions.body instanceof FormData){
			newOptions.headers = {
				Accept: 'application/json',
        'Authorization':AUTH_TOKEN,
        appId,
				// 'Content-Type': 'multipart/form-data',
				'Content-Type': 'application/json; charset=utf-8',
				...newOptions.headers,
			  };
		}else{
			newOptions.headers = {
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=utf-8',
        'Authorization':AUTH_TOKEN,
        appId,
				...newOptions.headers
      };
      newOptions.fileName = newOptions.body.fileName
      delete newOptions.body.fileName
			newOptions.body = JSON.stringify(newOptions.body);
		}

	}
	console.log(newOptions)
	return fetch(url, newOptions)
		.then(checkStatus)
    // .then(response =>response.json())
    .then(response => { 
				if(response.status == 250){
					return response.json().then(res => {
						return res
					})
				}
				return response.blob().then(blob => {
						var url = window.URL.createObjectURL(blob);
						var a = document.createElement('a');
						a.href = url;
						a.download = newOptions.fileName?`${newOptions.fileName}.xlsx`:'filename.xlsx';
						a.click();
				})
			})
        
		.catch((error) => {
			if (error.code) {
				notification.error({
					message: error.name,
					description: error.message,
				});
			}
			if ('stack' in error && 'message' in error) {
				notification.error({
					message: `请求错误: ${url}`,
					description: error.message,
				});
			}
			return error;
		});
}
