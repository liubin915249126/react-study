import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router, HashRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
// 引入组件
// import MainView  from './index/index'; 
// import About from './about/AboutView'
// import TimeLine from './timeLine/TimeLineView'
// import Home from './home/HomeView'
// import LoginView from './login/index'


const MainComponent = Loadable({
    loader: () => import('./index/index'),
    loading: LoadingPage
})

const LoginComponent = Loadable({
    loader: () => import('./login/index'),
    loading: LoadingPage
})

const AboutComponent = Loadable({
    loader: () => import('./about/AboutView'),
    loading: LoadingPage
})

const TimeLineComponent = Loadable({
    loader: () => import('./timeLine/TimeLineView'),
    loading: LoadingPage
})
const HomeComponent = Loadable({
    loader: () => import('./home/HomeView'),
    loading: LoadingPage
})

function LoadingPage(){
    return <div>loading...</div>
}
const routes =[
    { path: '/', component: LoginComponent, exact:true},
    { path: '/login', component: LoginComponent},
    { path: '/main', component: MainComponent,routes:[
        { path: '/main', component: HomeComponent, exact:true},
        // { path: '/main/home', component: Home},
        { path: '/main/about', component: AboutComponent},
        { path: '/main/timeline/:status', component: TimeLineComponent}
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
                {/* <Switch>
                    <Route path="/" component={LoginComponent} exact></Route>
                    <Route path="/login" component={LoginComponent}></Route>
                    <Route path="/main" component={MainComponent}>
                         <Route path="/main/home" component={HomeComponent}></Route>
                        <Route path="/main/home" component={HomeComponent}></Route>
                        <Route path="/main/about" component={AboutComponent}></Route>
                        <Route path="/main/timeline/:status" component={TimeLineComponent}></Route>
                    </Route>
                </Switch> */}
            </HashRouter>
        )
    }
}
export default Parent 