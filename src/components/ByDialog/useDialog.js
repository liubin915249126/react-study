import React,{useEffect,useState} from 'react';

import confirm from './confirm';
import ByModal, { RenderModalClass } from '../ByModal';

const useDialog = ()=>{
    const [element,setElement] = useState(null)
    // const renderFunc = (props)=>{
    //     setElement(confirm(props))
    // }
    return [
        <>{element}</>,
        setElement,
    ]
}

export default useDialog