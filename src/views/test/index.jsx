import React from 'react';

import asap from '../../promise/browser-asap'
// import asap  from 'asap/raw'
import MyPromise from '../../promise/Promise'
import { Button } from 'antd';

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newArr:[],
            count:0
        }
    }
    componentDidMount(){
        this.testPromise()
        const newArr = []
        
        for (let item = 0; item<10; item++){
            for (let i = 1; i<=item;i++){
                if(Array.isArray(newArr[item])){
                    newArr[item].push(`${i}*${item}=${i*item}`)
                }else{
                    newArr[item]=[`${i}*${item}=${i*item}`]
                }
            }
        }
        console.log(newArr)
        this.setState({newArr})
        this.returnPromise().finally(()=>{ 
            debugger
        })
    }
    testPromise(){
        new MyPromise((resolve)=>{ 
            resolve()
        }).then(()=>{ 
            console.log('Promise1')
        })
        asap(()=>{ 
            console.log('asap')
        })
        new MyPromise((resolve)=>{ 
            resolve()
        }).then(()=>{ 
            console.log('Promise2')
        })
        setTimeout(()=>{ 
            console.log('setTimeout')
        },0)
    }
    testSetState(){
        this.setState({count:1})
        console.log(111,this.state.count)
        new Promise(resolve =>{ resolve()}).then(()=>{
            this.setState({count:1})
            console.log(222,this.state.count)
        })
        this.setState(prevState => {count: prevState.count + 1});
        console.log(333,this.state.count)
    }
    returnPromise(){
        return Promise.resolve();
    }
    render(){
        const {newArr} = this.state;
        return (
            <div>
               {newArr.map((item,index)=>{
                    return <div key={item}>{
                     item.map(item1=><span key={item1}>{item1}  </span>)
                    }</div>
               })}
               <Button type="primary" onClick={() => this.testSetState()}>setState测试</Button>
            </div>
        )
    }
}