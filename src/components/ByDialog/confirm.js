import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RenderContent from './renderContent';
import ByModal, { RenderModalClass } from '../ByModal';
import { MODAL_ROOT } from '@/utils/constants';


const confirm = () => {
  const [element,setElement] = useState(null)
  const render = (props) => {
    let parent;
    const { innerClass, onOutsideClick, container, ...others } = props || {}
    const confirmProps = {
      showConfirm: true,
      showCancel: true,
      showClose: true,
      ...others,
      onClose: () => this.openFun(others.onClose),
      onConfirm: () => this.openFun(others.onConfirm),
      onCancel: () => this.openFun(others.onCancel),
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
      onOutsideClick={() => { this.openFun(onOutsideClick); }}
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
export default confirm;
