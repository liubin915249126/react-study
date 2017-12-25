import React from 'react';
import { observer,inject } from 'mobx-react'

@inject('clickTimes') @observer class MobxTest extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className="mobxtest">
           点击次数:{this.props.clickTimes.times}
        </div>)
    }
}
export {MobxTest};