import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import RenderContent from './renderContent';
import RenderModal from '../ByModal/RenderModal'
import ByModal from '../ByModal';
import { destroyFns } from './index';

const modalContainers = [];

const useModal = () => {
  const [elements, setElement] = useState([])
  const [open, setOpen] = useState(true)
  const destroy = () => {
    const currentDiv = modalContainers.filter(container => container == div)[0]
    console.log('currentDiv',currentDiv)
    if (!currentDiv) {
      return;
    }
    const res = ReactDOM.unmountComponentAtNode(currentDiv);
    if (currentDiv && currentDiv.parentNode) {
      currentDiv.parentNode.removeChild(currentDiv);
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
    const div = document.createElement('div');
    document.body.appendChild(div);
    modalContainers.push(div)
    const containerClass = classNames('by-dialog', innerClass);
    const modal = <RenderModal
      innerClass = {containerClass}
      open={open}
      children = {<RenderContent
        {...confirmProps}
        destroy={() => {
          destroy()
        }}
      />}
      {...others}
    />
    setElement([...elements,ReactDOM.createPortal(modal, div)]);
  }
  console.log('elements',elements)
  return [elements, render]
}

export default useModal;
