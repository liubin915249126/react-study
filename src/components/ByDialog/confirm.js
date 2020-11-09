import React, { useState } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RenderContent from './renderContent';
import ByModal, { RenderModalClass } from '../ByModal';
import { MODAL_ROOT } from '@/utils/constants';


const confirm = (props)=>{
      const {innerClass, onOutsideClick,container, ...others} = props||{}
      const confirmProps = { 
        showConfirm: true,
        showCancel: true,
        showClose: true,
        ...others,
        onClose: () => this.openFun(others.onClose),
        onConfirm: () => this.openFun(others.onConfirm),
        onCancel: () => this.openFun(others.onCancel),
      };
      const containerClass = classNames('by-dialog', innerClass);
      let parent = container;
      if (!parent) {
        parent = document.createElement('div');
        parent.setAttribute('id', `${MODAL_ROOT}`);
        document.body.appendChild(parent);
      }
      const modal = (
        <ByModal
          innerClass={containerClass}
          wrapped
          open={true}
          onOutsideClick={() => { this.openFun(onOutsideClick); }}
          {...others}
        >
          {RenderContent(confirmProps)}
        </ByModal>
      );
      ReactDom.render(modal, parent)
      return modal
}




export default confirm;


