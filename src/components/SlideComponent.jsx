import React from  "react";
import {Row,Col,Icon} from 'antd';
import "./slide.less"
import { isObjectValueEqual} from '@utils/utils'
class LenSlider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selecteds:[true],
            left:0,
            right: 12,//记录向右点击的次数
            disableClick:''
        }
    }
    componentDidMount(){
        let {slideData} = this.props 
        this.setState({ right: slideData.length},()=>{
            this.checkCursor()
        })
    }
    componentWillReceiveProps(nextProps){
        if (!isObjectValueEqual(nextProps.slideData, this.props.slideData)){
            this.setState({ right: nextProps.slideData.length,left:0})//使组件恢复到初始状态
        }
    }
    checkCursor(){
        let { right, left} = this.state;
        if (right<=12){
            this.setState({ disableClick:'d-all'})
        }else{
            
        }
    }
    //点击滑动
    slide(dire) {
        var slidewrap = document.getElementsByClassName('sliderWrap')[0];
        var slide = slidewrap.getElementsByClassName('paySlip')[0]
        if (slide) {
            var slideW = parseInt(document.defaultView.getComputedStyle(slide, null).width)
            if (dire === "right") {
                if (this.state.right > 12) {
                    let newRight = this.state.right - 1;
                    this.setState({ right: newRight }, () => {
                        if (this.state.right >= 12) {
                            let newLeft = this.state.left - slideW
                            this.setState({ left: newLeft })
                        }else{

                        }
                    })
                }
            } else {
                let newLeft = this.state.left + slideW
                if (newLeft <= 0) {
                    let newRight = this.state.right + 1;
                    this.setState({ right: newRight }, () => {
                        this.setState({ left: newLeft })
                    })
                }else{

                }

            }
        }
    }
    //切换选中点   
    toggleSelect(index){
        let newState = []
        newState[index] = true;
        this.setState({ selecteds: newState })
    }
    render(){
        let {slideData} = this.props;
        let {disableClick} = this.state;
        return (<Row className={`sliderWrap ${disableClick}`}>
                <Col span={2}>
                    <Icon
                        type="double-left"
                        onClick={(e) => { this.slide("left") }}
                    />
                </Col>
                <Col span={20} style={{ position: "relative", left: this.state.left }}>
                  {Array.isArray(slideData)&&slideData.length&&slideData.map((item,index,arr)=>{
                        return <Col span={2} className="paySlip" key={index}
                                    style={{ position: "absolute", left: index * 8.3333 + '%' }}
                                    >
                                <span>{item}</span>
                                <span
                                    className={this.state.selecteds[index] ? 'selected dateDot' : 'dateDot'}
                                    onClick={() => {this.toggleSelect(index);}}
                                ></span>    
                                </Col>
                  })}
                </Col>
                <Col span={2}>
                    <Icon
                        type="double-right"
                        onClick={(e) => { this.slide("right") }}
                    />
                </Col>
            </Row>)
    }
}
export {LenSlider}