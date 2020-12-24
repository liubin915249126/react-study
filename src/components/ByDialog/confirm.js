import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import RenderContent from './renderContent';
import RenderModal from '../ByModal/RenderModal'
import ByModal from '../ByModal';
import usePatchElement from './patchElements'

const modalContainers = [];
const destroyFns = [];
let uuid = 0

const useModal = () => {
  const [elements, patchElement] = usePatchElement([])
  const [open, setOpen] = useState(true)
  const render = (props) => {
    const { innerClass, container, ...others } = props || {}
    uuid+=1
    const destroy = () => {
      const currentIndex =  modalContainers.findIndex(container => container == div)
      const currentDiv = modalContainers.splice(currentIndex,1)[0]
      if (!currentDiv) {
        return;
      }
      const res = ReactDOM.unmountComponentAtNode(currentDiv);
      if (currentDiv && currentDiv.parentNode) {
        currentDiv.parentNode.removeChild(currentDiv);
      }
      return null;
    }
    const confirmProps = {
      ...others,
      showConfirm: true,
      showCancel: true,
      showClose: true,
      showFoot: true,
      cancelText: '取消',
      confirmText: '确认',
    };
    const div = document.createElement('div');
    document.body.appendChild(div);
    modalContainers.push(div)
    destroyFns.push(destroy)
    const containerClass = classNames('by-dialog', innerClass);
    const modal = <RenderModal
      key={`modal-${uuid}`}
      innerClass = {containerClass}
      open={open}
      {...others}
      children = {<RenderContent
        destroy={() => {
          destroy()
        }}
        {...confirmProps}
      />}
    />
    patchElement(ReactDOM.createPortal(modal, div));
  }
  return [elements, render]
}

export const destroyAll = () => {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
}

export default useModal;
