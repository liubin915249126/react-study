import React from 'react';

import asap from '../../promise/browser-asap'
// import asap  from 'asap/raw'
import MyPromise from '../../promise/Promise'

export default class Test extends React.Component{
    constructor(props){
        super(props);
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
    render(){
        return (
            <div>

            </div>
        )
    }
}