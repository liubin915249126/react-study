import React from 'react';

import confirm from './confirm';
import ByModal, { RenderModalClass } from '../ByModal';

const useDialog = (props)=>{
    let element = null
    if(props){
        element = confirm(props)
    }
    debugger;
    return [
        <>{element}</>,
        ()=>confirm(props)
    ]
}

export default useDialog