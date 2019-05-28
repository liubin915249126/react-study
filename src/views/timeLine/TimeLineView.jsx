import React from 'react';
import './index.less'
import {timeLine} from './timeLineData'
import {Icon,Button} from 'antd'
import {Link} from 'react-router-dom'

class TimeLine extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentStatus:4,
             /**
              * @description statusArr表示时间轴高亮的部分
              */  
            statusArr:[],
            toLeft:false,
        }
    }
    componentDidMount(){
        this.renderArr()
    }
    /**
     * @method renderArr 根据当前状态以及更新后的状态跟新时间轴
     * @param status  初始状态和点击后的状态
     */
    renderArr(){
       let currentStatus = parseInt(this.state.currentStatus);
       let newArr = [];
       for(let i = 0;i<=currentStatus;i++){
           newArr.push(true);
       }
       /**
        *@description 修复状态3箭头指向,状态为数据更新时箭头指向向右
        *
        */
       if(currentStatus==4){
           this.setState({toLeft:true})
       }else{
           this.setState({toLeft:false})
       }
      
       this.setState({statusArr:newArr})
    }

    changeStatus(from,to){
        this.setState({currentStatus:to},()=>{
            this.renderArr()
        })
    }
    render(){
        return <div className='timelineWrap'>
              {timeLine.map((item,index,arr)=>{
                  /**
                   * @description 控制每块的class
                   */
                  let className = 'timeItem';
                  if(this.state.statusArr[index]){
                      className += ' itemSelected'
                  }
                  if(this.state.currentStatus == index){
                      className += ' currentStatus'
                  }
                  /**
                   * @description 箭头的指向
                   */
                  let arrow = <Icon type="down" />
                  if(index==3&&this.state.toLeft){
                      arrow = <Icon type="left" />
                  }
                  return <div className={className} key={index}>
                      <span className="dot">
                          {arrow}
                      </span>
                      <div className="content">
                        <p className="label">{item.label}</p>
                        <div className="btnsWrap">
                            
                            {item.buttons&&item.buttons.map((item2,index2,arr2)=>{
                               /**
                                * @description 渲染button
                                */
                                  return this.state.currentStatus == index ? <Button
                                      key={index2}
                                      onClick={() => { this.changeStatus(item.status, item2.target) }}
                                  >{item2.text}</Button> : <Button
                                      key={index2}
                                  >{item2.text}</Button>
                                 
                            })}
                        </div>
                               
                        <div className="linksWrap">
                            {item.links&&item.links.map((item3,index3,arr3)=>{
                                /**
                                * @description 渲染links
                                */
                                  return this.state.statusArr[index] ? <Link to={item3.target} key={index3}>
                                               <i className={`iconfont ${item3.icon}`}></i>{item3.text}
                                            </Link> : <span key={index3}><i className={`iconfont ${item3.icon}`}></i>{item3.text}</span>
                            })}
                        </div>
                    </div>
                    <div className="hLines">
                      </div>    
                  </div>
              })}
              </div>
    }
} 
export default TimeLine