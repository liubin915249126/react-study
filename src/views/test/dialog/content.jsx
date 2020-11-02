import React,{useState} from 'react';
import {connect} from 'dva'

@connect(({ dialog }) => ({
    name: dialog.name,
}))
export default class DialogContent extends React.Component{
  constructor(props){
    super(props);
  }  
  render(){
    console.log(this.props)  
    return <div>
        {this.props.name}
    </div>
  }  
}