// 引入css样式
import 'antd/dist/antd.less';
import 'animate.css/animate.css'
//引入fetch
import 'whatwg-fetch'
//
import 'babel-polyfill';

import dva from 'dva';
import 'moment/locale/zh-cn';
//import browserHistory from 'history/createBrowserHistory'

// import { browserHistory } from 'dva/router';
import './index.less';

const models = require.context('./models',false,/(\.js|\.jsx)$/)

// 1. Initialize
const app = dva({
   //history: browserHistory
  history: require("history").createHashHistory(),
});

// 2. Plugins
// app.use({});



const originFetch = fetch;
Object.defineProperty(window, "fetch", {
  configurable: true,
  enumerable: true,
  // writable: true,
  get() {
    return (url,options) => {
      return originFetch(url,{...options,...{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Accept: 'application/json',
          token:localStorage.getItem('token')
        },...options.headers
      }}).then(res=>{
        return res
      });
    };
    
  }
});


// 3. Model move to router
models.keys().forEach(key=>{ 
  app.model(models(key).default)
})

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#main');

export default app._store;
