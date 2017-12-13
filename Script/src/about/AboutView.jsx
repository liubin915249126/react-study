import React from 'react';
import {Button,Card} from 'antd'
import request from '../commonFun/request'
const url = 'http://localhost:3000/'
class About extends React.Component{
    constructor(props){
        super(props)
        this.state={
            requestData:null
        }
    }
    async queryData(){
       try{
          let res = await request(url,{
              method:'GET',
              body:{}
          })
          this.setState({requestData:res}) 
       }catch(err){
          console.log(err)
       }
    }
    render(){
        let { requestData} = this.state
        return (<div>
            <Button 
            type="primary"
            onClick={()=>{this.queryData()}}
            >fetch测试111</Button>
            <div className="wrap">
                {requestData && requestData.map((item,index,arr)=>{
                   return <Card>{item}</Card>
                })}
            </div>
        </div>)
    }
} 
export default About