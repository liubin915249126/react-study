import React from 'react';
//引入组件
import { Button,Row,Col} from 'antd';
import {LenSlider} from '../commonComponent/SlideComponent';
import { Progress} from '../commonComponent/Progress';
import Modal from '../commonComponent/Modal/Modal';
import Tooltip from '../commonComponent/Tooltip/Tooltip';
//引入模拟数据
import {slideData1,slideData2} from '../home/slideData';
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
             toogleSlide:true,
             Modalshow:false,//控制modal显示与隐藏
        }
    }
    componentDidMount(){
        // debugger;
        console.log(this.props)
    }
    toogleSlide(flag){
        this.setState({toogleSlide:!flag})
    }
    
    toggleModal(flag){
        this.setState({ Modalshow:!flag})
    }
    /**
     * @method onCancle 关闭弹窗
     */
    onCancle(){
        this.setState({ Modalshow: false })
    }
    render(){
        let { toogleSlide,Modalshow} =this.state;
        return (<div>
            <div>slider组件:</div>
            <LenSlider slideData={toogleSlide ? slideData1 : slideData2} />
            <div>
                <Button 
                        type="primary"
                        onClick={()=>{this.toogleSlide(toogleSlide)}}
                    >{toogleSlide?'data1':"data2"}</Button>
            </div>
            <Row>
                <Col span={6}>
                    <div>progress组件:</div>
                    <Progress />
                </Col>
                <Col span={6}>
                    <div>Modal组件</div>
                    <Button 
                            type="primary"
                            onClick={() => { this.toggleModal(Modalshow)}} 
                    >{Modalshow?'隐藏':'显示'}</Button>
                    <Modal 
                          open={Modalshow}
                          onCancle={()=>{this.onCancle()}}
                    >
                        <div>Modal组件</div>
                    </Modal>
                </Col>
                <Col span={6}>
                    <Tooltip trigger='click'>
                        <span>tooltip</span>
                    </Tooltip>
                </Col>
            </Row>
            
            
        </div>)
    }
}
export default Home