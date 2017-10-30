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
参考网址：http://reacttraining.cn/web/guides/quick-start
>