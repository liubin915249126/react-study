#### 1.路由钩子
>
```
   componentDidMount(){
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    }
    routerWillLeave=(nextLocation)=>{
                return '确认要离开？';
        }
```
```
   withRouter(Login) //包裹组件
```
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