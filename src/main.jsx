// 引入css样式
import 'antd/dist/antd.less';
import 'animate.css/animate.css'
//引入fetch
import 'whatwg-fetch'
//
import 'babel-polyfill';

import dva from 'dva';
import 'moment/locale/zh-cn';
// import models from './models';
//import browserHistory from 'history/createBrowserHistory'

// import { browserHistory } from 'dva/router';
import './index.less';

// 1. Initialize
const app = dva({
   //history: browserHistory
  history: require("history").createHashHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model move to router
// models.forEach((m) => {
//   app.model(m);
// });

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#main');

export default app._store;
