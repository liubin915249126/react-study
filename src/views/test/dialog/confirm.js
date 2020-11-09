import React,{useState} from 'react';
import ReactDom from 'react-dom'

const confirm = () => {
    const [element,setElement] = useState(null)
    function render(props) {
        const {children} = props||{}
        setElement(ReactDom.createPortal(
            <div>{children}</div>,
            document.body
        ))
    }
return [<>{element}</>,render]
}

export default confirm