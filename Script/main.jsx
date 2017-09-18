import React from 'react';
import ReactDOM from 'react-dom';
import Root from './src/router' 

// 引入css样式
import 'antd/dist/antd.less';
//引入fetch
import 'whatwg-fetch'
//
import 'babel-polyfill';

ReactDOM.render(
      <Root />,
      document.getElementById('main')
)
