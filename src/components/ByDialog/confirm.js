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
      return modal
      return ReactDom.createPortal(modal, parent)
}

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.destroy = null;
    this.others = {};
  }

  openFun(callback) {
    if (!!callback
    && (typeof callback === 'object' || typeof callback === 'function')) {
      const promiseResult = callback() || {};
      if (typeof promiseResult.then === 'function') {
        promiseResult.finally(() => {
          this.destroy();
        });
      } else {
        this.destroy();
      }
    } else {
      this.destroy();
    }
  }

  renderModal({ open = true, container, ...others }) {
    this.others = others;
    let parent = container;
    if (!parent) {
      parent = document.createElement('div');
      parent.setAttribute('id', `${MODAL_ROOT}`);
      document.body.appendChild(parent);
    }
    const modal = this.render();
    function render() {
      if (open)ReactDom.createPortal(modal, parent); return null;
    }
    function destroy() {
      ReactDom.unmountComponentAtNode(parent);
      if (parent && parent.parentNode) {
        parent.parentNode.removeChild(parent);
      }
      return null;
    }
    this.destroy = destroy;
    render();
  }

  render() {
    const {
      innerClass, onOutsideClick, ...others
    } = this.others;
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
    const modal = (
      <ByModal
        innerClass={containerClass}
        wrapped
        onOutsideClick={() => { this.openFun(onOutsideClick); }}
        {...others}
      >
        {RenderContent(confirmProps)}
      </ByModal>
    );
    return ReactDom.createPortal(modal, parent)
  }
}


export default confirm;


Confirm.defaultProps = {
  open: undefined,
  innerClass: undefined,
  onOutsideClick: undefined,
  renderModalObj: {},
};

Confirm.propTypes = {
  open: PropTypes.bool,
  innerClass: PropTypes.string,
  onOutsideClick: PropTypes.func,
  renderModalObj: PropTypes.object,
};
