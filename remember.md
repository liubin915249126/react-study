#### 1.路由钩子
>
你将会使用生命周期方法 通过 <Route> 渲染的组件，你可以使用 componentDidMount 或 componentWillMount 代替 onEnter，你可以使用 componentDidUpdate 或者 componentWillUpdate (更或者 componentWillReceiveProps) 代替 onUpdate，你可以使用 componentWillUnmount代替 onLeave。
参考网址(中文网)：http://reacttraining.cn/web/guides/quick-start
antd：https://design.alipay.com/
>
#### 2.进度条
```
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');
```
#### 3.按需加载
```
import Loadable from 'react-loadable';

const LoadableBar = Loadable({
  loader: () => import('./components/Bar'),
  loading() {
    return <div>Loading...</div>
  }
});

class MyComponent extends React.Component {
  render() {
    return <LoadableBar/>;
  }
}
```
参考文献[github](https://github.com/thejameskyle/react-loadable-example.git)

#### 将本地文件与远程github仓库关联
>
```
  $ git init 
  $ git remote add origin https://github.com/superRaytin/alipay-app-ui.git 
  git branch --set-upstream-to=origin/master master
```
>
DocumentContext.js:10 Uncaught TypeError: (0 , _react.createContext) is not a function

#### 
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
}
{
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS"
}