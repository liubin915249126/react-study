import React from 'react';

import asap from '../../promise/browser-asap'


export default class Test extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.testPromise()
    }
    testPromise(){
        new Promise((resolve)=>{ 
            resolve()
        }).then(()=>{ 
            console.log('Promise1')
        })
        asap(()=>{ 
            console.log('asap')
        })
        new Promise((resolve)=>{ 
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