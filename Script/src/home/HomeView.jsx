import React from 'react';
//引入组件
import {LenSlider} from '../commonComponent/SlideComponent'
//引入模拟数据
import {slideData1,slideData2} from '../home/slideData'
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <LenSlider slideData={slideData1} />
            <LenSlider slideData={slideData2} />
        </div>)
    }
} 
export default Home