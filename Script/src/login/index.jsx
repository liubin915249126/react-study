import React from 'react';
import {Button} from 'antd';

class LoginView extends React.Component{
    constructor(props){
        super(props)
    }
    loginIn(){
        this.props.history.push('/main')
    }
    render(){
        return(<div>
            <Button
            onClick={()=>{this.loginIn()}} 
            type="primary"
            >登录</Button>
        </div>)
    }
}
export default LoginView