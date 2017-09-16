import React from 'react';
import { Route, Link, Switch, BrowserRouter, HashRouter } from 'react-router-dom';
// 引入组件
import { MainView as Main } from './index/index'; 
import About from './about/AboutView'
import TimeLine from './timeLine/TimeLineView'
import Home from './home/HomeView'

const Parent = () => (
    <Main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/timeline/:status' component={TimeLine} />
        </Switch>
    </Main>
)
export default Parent 