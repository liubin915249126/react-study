import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router, HashRouter } from 'react-router-dom';
// 引入组件
import { MainView as Main } from './index/index'; 
import About from './about/AboutView'
import TimeLine from './timeLine/TimeLineView'
import Home from './home/HomeView'
import LoginView from './login/index'

const routes =[
    { path: '/', component: LoginView, exact:true},
    { path: '/main', component: Main ,routes:[
        { path: '/main', component: Home},
        { path: '/main/about', component: About},
        { path: '/main/timeline/:status', component: TimeLine}
    ]}
]

const RouteWithSubRoutes = (route) => (
    route.exact?<Route path={route.path} exact render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}>
            {route.routes&&route.routes.map((route,i)=>{
                return <RouteWithSubRoutes key={i} {...route} />
            })}
        </route.component>    
    )} />:<Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}>
            {route.routes&&route.routes.map((route,i)=>{
                return <RouteWithSubRoutes key={i} {...route} />
            })}
        </route.component>    
    )} />
)

class Parent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router>
                <Switch>
                {routes.map((route,i)=>{
                    return <RouteWithSubRoutes key={i} {...route} />
                })}
                </Switch>
            </Router>
        )
    }
}
// const Parent = () => (
//     routes.map((route,i)=>{
//        return  <RouteWithSubRoutes key={i} {...route} />
//     })
// )
export default Parent 