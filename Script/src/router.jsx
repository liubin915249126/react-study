import React from 'react';
// import { Router, Route, browserHistory } from 'react-router'
// react4.0以上
import { Route, Link, Switch, BrowserRouter, HashRouter } from 'react-router-dom';
// 引入组件
import Parent from './root'

class Root extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <BrowserRouter>
                <Parent />
            </BrowserRouter>
        )
    }
}
export default Root