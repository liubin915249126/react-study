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