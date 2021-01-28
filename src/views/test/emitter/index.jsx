import React, { useState,useEffect }from 'react'
import {Button} from 'antd';
import Emitter from 'component-emitter';


const EmitterComponent = () =>{
    const emitter = new Emitter();
    useEffect(() =>{
        emitter.on('clear',(val,val1) =>{
            console.log(111,val,val1)
        })
    },[])
    return <div>
        111
        <Button type="primary" onClick={() =>{
            emitter.emit('clear',111,222)
        }}>clear</Button>
    </div>
}

export default EmitterComponent