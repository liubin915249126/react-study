import React from 'react';

import asap from '../../promise/browser-asap'
// import asap  from 'asap/raw'
import MyPromise from '../../promise/Promise'
import { Button } from 'antd';

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    componentDidMount(){
        this.testPromise()
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
    render(){
        return (
            <div>
               <Button type="primary" onClick={() => this.testSetState()}>setState测试</Button>
            </div>
        )
    }
}