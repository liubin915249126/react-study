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
    { path: '/login', component: LoginView},
    { path: '/main', component: Main ,routes:[
        { path: '/main', component: Home, exact:true},
        // { path: '/main/home', component: Home},
        { path: '/main/about', component: About},
        { path: '/main/timeline/:status', component: TimeLine}
    ]}
]

const RouteWithSubRoutes = (route) => (
    route.exact?<Route path={route.path} exact render={props => (
        <route.component {...props} routes={route.routes}>
            <Switch>
            {route.routes&&route.routes.map((route,i)=>{
                return <RouteWithSubRoutes key={i} {...route} />
            })}
            </Switch>
        </route.component>    
    )} />:<Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}>
           <Switch>
            {route.routes&&route.routes.map((route,i)=>{
                return <RouteWithSubRoutes key={i} {...route} />
            })}
          </Switch> 
        </route.component>    
    )} />
)

class Parent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <HashRouter>
                <Switch>
                {routes.map((route,i)=>{
                    return <RouteWithSubRoutes key={i} {...route} />
                })}
                </Switch>
                {/* <div>
                    <Route path="/" component={LoginView} exact></Route>
                    <Route path="/main" component={Main}>
                        <Switch>
                        <Route path="/main/home" component={Home}></Route>
                        <Route path="/main/about" component={About}></Route>
                        <Route path="/main/timeline/:status" component={TimeLine}></Route>
                        </Switch>
                    </Route>
                </div> */}
            </HashRouter>
        )
    }
}
export default Parent 