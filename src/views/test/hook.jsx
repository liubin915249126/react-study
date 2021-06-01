
import React from 'react'
import {fabric} from 'fabric'
import { Button } from 'antd';


const TestHook = () =>{
    const [type,setType] = React.useState('')
    const canvasRef = React.useRef()
    React.useEffect(() =>{
        const canvas = new fabric.Canvas('canvas')
        canvasRef.current = canvas
        canvasRef.current.on('mouse:down',function(){  
            console.log('111,', type)
        })
    },[])
    React.useEffect(() =>{
        console.log('111,', type)
    },[type])
    return (
       <div>
           <canvas id="canvas" width="350" height="200"></canvas>
           <Button type="primary" onClick={() => setType(1)}>type</Button>
       </div>
    )
}

export default TestHook