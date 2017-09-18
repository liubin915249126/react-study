import React from 'react';
import {Button} from 'antd'
import request from '../commonFun/request'
const url = 'http://localhost:3000/'
class About extends React.Component{
    constructor(props){
        super(props)
    }
    async queryData(){
       try{
          let res = await request(url,{
              method:'GET',
              body:{}
          }) 
       }catch(err){
          console.log(err)
       }
    }
    render(){
        return (<div>
            <Button 
            type="primary"
            onClick={()=>{this.queryData()}}
            >fetch测试</Button>
        </div>)
    }
} 
export default About