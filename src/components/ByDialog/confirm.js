import React, { useState } from 'react';
import classNames from 'classnames';

import RenderContent from './renderContent';
import ByModal from '../ByModal';



const useModal = () => {
  const [element,setElement] = useState(null)
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
    const containerClass = classNames('by-dialog', innerClass);
    const modal = <ByModal
      innerClass={containerClass}
      wrapped
      open={true}
      {...others}
    >
      {RenderContent(confirmProps)}
    </ByModal>
    setElement(modal)
  }
  return [element, render]
}
export default useModal;
