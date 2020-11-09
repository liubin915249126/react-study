import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RenderContent from './renderContent';
import ByModal, { RenderModalClass } from '../ByModal';
import { MODAL_ROOT } from '@/utils/constants';


const useModal = () => {
  let parent;
  const [element,setElement] = useState(null)
  function destroy() {
    ReactDom.unmountComponentAtNode(parent);
    if (parent && parent.parentNode) {
      parent.parentNode.removeChild(parent);
    }
    return null;
  }
  const openFun = (callback)=>{
    if (!!callback
    && (typeof callback === 'object' || typeof callback === 'function')) {
      const promiseResult = callback() || {};
      if (typeof promiseResult.then === 'function') {
        promiseResult.finally(() => {
          destroy();
        });
      } else {
        destroy();
      }
    } else {
      destroy();
    }
  }
  const render = (props) => {
    const { innerClass, onOutsideClick, container, ...others } = props || {}
    const confirmProps = {
      showConfirm: true,
      showCancel: true,
      showClose: true,
      ...others,
      onClose: () => openFun(others.onClose),
      onConfirm: () => openFun(others.onConfirm),
      onCancel: () => openFun(others.onCancel),
    };
    parent = container;
    if (!parent) {
      parent = document.createElement('div');
      parent.setAttribute('id', `${MODAL_ROOT}`);
      document.body.appendChild(parent);
    }
    const containerClass = classNames('by-dialog', innerClass);
    const modal = <ByModal
      innerClass={containerClass}
      wrapped
      open={true}
      onOutsideClick={() => { openFun(onOutsideClick); }}
      {...others}
    >
      {RenderContent(confirmProps)}
    </ByModal>
    setElement(ReactDom.createPortal(
      <>{modal}</>,
      parent
    ))
  }
  return [element, render]
}
export default useModal;
