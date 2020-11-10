import React,{useState} from 'react';
import {Button,Modal} from 'antd';
import {connect} from 'dva'

@connect(({ dialog }) => ({
    name: dialog.name,
}))
export default class DialogContent extends React.Component{
  constructor(props){
    super(props);
  }
  modalConfirmFun(){
    Modal.confirm({
        content:<div>1111</div>,
        onOk:()=>{}
    })
  }
  render(){
    console.log(this.props)  
    return <div>
      {this.props.name}
      <Button type="primary" onClick={() =>this.modalConfirmFun()}>modalConfirm</Button>
    </div>
  }  
}