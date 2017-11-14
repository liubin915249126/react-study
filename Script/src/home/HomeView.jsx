import React from 'react';
//引入组件
import { Button} from 'antd';
import {LenSlider} from '../commonComponent/SlideComponent';
import { Progress} from '../commonComponent/Progress'
//引入模拟数据
import {slideData1,slideData2} from '../home/slideData';
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
             toogleSlide:true
        }
    }
    toogleSlide(flag){
        this.setState({toogleSlide:!flag})
    }
    render(){
        let { toogleSlide} =this.state;
        return (<div>
            <div>slider组件:</div>
            <LenSlider slideData={toogleSlide ? slideData1 : slideData2} />
            <div>
                <Button 
                        type="primary"
                        onClick={()=>{this.toogleSlide(toogleSlide)}}
                    >{toogleSlide?'data1':"data2"}</Button>
            </div>
            <div>progress组件:</div>
            <Progress />
            
        </div>)
    }
} 
export default Home