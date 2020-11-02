import React from 'react';
import {Button,Form,Input,Row,Col} from 'antd';
const FormItem = Form.Item;
require("./login.less");

@Form.create()
class LoginView extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userinfo:{
                name:"username",
                password:"123456"
            }
        }
    }
    componentDidMount(){
      // this.initMap()
    }
    initMap(){
      var map = new BMap.Map("container"); 
      var point = new BMap.Point(116.404, 39.915); 
      map.centerAndZoom(point, 15); //
      map.enableScrollWheelZoom(true); //允许缩放
      map.addControl(new BMap.NavigationControl()); //添加控件
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){ //浏览器定位
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          console.log('您的位置：'+r.point.lng+','+r.point.lat);
        }
        else {
          console.log('failed'+this.getStatus());
          geolocation.enableSDKLocation();  //SDK定位
          geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
              var mk = new BMap.Marker(r.point);
              map.addOverlay(mk);
              map.panTo(r.point);
              console.log('您的位置：'+r.point.lng+','+r.point.lat);
            }
            else {
              console.log('failed'+this.getStatus());
              var myCity = new BMap.LocalCity();
              myCity.get((result)=>{
                var cityName = result.name;
                map.setCenter(cityName);
                console.log("当前定位城市:"+cityName);
              }); 
            }        
          });
        }        
      });
    }
    loginIn(){
        this.props.history.push('/main')
    }
    render(){
        const {userinfo} = this.state;
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
          <div className="formWrap">
            <Form>
              <h3>欢迎登陆系统</h3>  
              <FormItem {...formItemLayout} label="姓名">
              {getFieldDecorator('name', { rules: [{ required: true, message: '请输入姓名' }],initialValue:userinfo.name})(
                  <Input />
              )}
              </FormItem>
              <FormItem {...formItemLayout} label="密码">
                {getFieldDecorator('password', { rules: [{ required: true, message: '请输入密码' }],initialValue:userinfo.password})(
                  <Input type="password"/>
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
          </div>
          <div className="container">
            <span>地图定位</span>
            <div id="container"></div> 
          </div>
        </div>)
    }
}
export default LoginView