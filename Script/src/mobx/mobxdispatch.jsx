import React from 'react';
import {Button,Input} from 'antd';
import { observer,inject } from 'mobx-react'

@inject('clickTimes') @observer class MobxDispatch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:1
        }
    }
    handleClick(){
        let {num} = this.state;
        debugger;
        this.props.clickTimes.click(parseInt(num));
    }

    handleChange(e){
       let {value} = e.target;
       this.setState({num:value})          
    }
    render(){
        let {num} = this.state;
        return(<div className="mobxdispatch">
            <Button type="primary" onClick={()=>{this.handleClick()}}>点击</Button>
            <Input onChange={(e)=>{this.handleChange(e)}} value={num} />
        </div>)
    }
}
export {MobxDispatch};