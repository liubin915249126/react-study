import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import RenderContent from './renderContent';
import ByModal from '../ByModal';
import {destroyFns} from './index';



const useModal = () => {
  const [element,setElement] = useState(null)
  const [open,setOpen] = useState(true)
  
  let div;
  const destroy = () => {
    const res = ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    return null;
  }
  
  const render = (props) => {
    const { innerClass, container, ...others } = props || {}
    const confirmProps = {
      showConfirm: true,
      showCancel: true,
      showClose: true,
      showFoot: true,
      cancelText: '取消',
      confirmText: '确认',
      ...others
    };
    div = document.createElement('div');
    document.body.appendChild(div);
    const containerClass = classNames('by-dialog', innerClass);
    const modal = <ByModal
      innerClass={containerClass}
      wrapped
      open={open}
      {...others}
    >
      <RenderContent
        {...confirmProps}
        destroy={()=>{
          destroy()
        }}
      />
    </ByModal>
    destroyFns.push(destroy)
    setElement(ReactDOM.createPortal(modal, div));
  }
  return [element, render]
}

export default useModal;
