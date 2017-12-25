import React from 'react';
import {Button} from 'antd';
import { observer,inject } from 'mobx-react'

@inject('clickTimes') @observer class MobxDispatch extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick(){
        this.props.clickTimes.click(1);
    }
    render(){
        return(<div className="mobxdispatch">
            <Button onClick={()=>{this.handleClick()}}>点击</Button>
        </div>)
    }
}
export {MobxDispatch};