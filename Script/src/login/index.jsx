import React from 'react';
import {Button,Form,Input,Row,Col} from 'antd';
const FormItem = Form.Item;
require("./login.less");

@Form.create()
class LoginView extends React.Component{
    constructor(props){
        super(props)
    }
    loginIn(){
        this.props.history.push('/main')
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 7 },
            md: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
            md: { span: 18 },
        },
        };
        return(
        <div className="loginWrap">
          <Form>
            <h3>欢迎登陆系统</h3>  
            <FormItem {...formItemLayout} label="姓名">
            {getFieldDecorator('name', { rules: [{ required: true, message: '请输入姓名' }]})(
                <Input />
            )}
            </FormItem>
            <FormItem {...formItemLayout} label="密码">
              {getFieldDecorator('password', { rules: [{ required: true, message: '请输入密码' }]})(
                <Input />
              )}
            </FormItem>
            <Row>
                <Col {...formItemLayout.labelCol}></Col>
                <Col {...formItemLayout.wrapperCol}>
                    <Button
                      onClick={()=>{this.loginIn()}} 
                      type="primary"
                    >
                      登录
                    </Button>
                </Col>
            </Row>
          </Form>
        </div>)
    }
}
export default LoginView