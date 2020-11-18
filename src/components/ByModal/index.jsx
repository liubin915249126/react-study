import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import useDomRoot from '../../hooks/use-dom-root';
import { MODAL_ROOT } from '@/utils/constants';
import RenderModal from './RenderModal'
import './by-modal.css';

const ByModal = ({
  open,
  // onClose,
  lockScroll,
  ...others
}) => {
  let container;
  const root = useDomRoot(MODAL_ROOT)
  const destroy = () => {
    console.log('container',container)
    if(!container){
      return;
    }
    const res = ReactDOM.unmountComponentAtNode(container);
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
    return null;
  }
  if (open) {
    container = root
    if (lockScroll) document.body.style.overflow = 'hidden';
    const modal = <RenderModal {...others} />
    return ReactDOM.createPortal(modal, container);
  }else{
    destroy();
  }

  if (lockScroll) document.body.style.overflow = '';

  return null;
};

ByModal.defaultProps = {
  open: false,
  className: undefined,
  innerClass: undefined,
  children: undefined,
  onOutsideClick: undefined,
  onClose: undefined,
  innerWidth: undefined,
  lockScroll: false,
  hideBackdrop: false,
};

ByModal.propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
  innerClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onOutsideClick: PropTypes.func,
  onClose: PropTypes.func,
  lockScroll: PropTypes.bool,
  innerWidth: PropTypes.string,
  hideBackdrop: PropTypes.bool,
};

export default ByModal;
