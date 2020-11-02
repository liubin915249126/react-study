import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Draggable from 'react-draggable';

import { MODAL_ROOT } from '@/utils/constants';

import './by-modal.css';

export class RenderModalClass extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = null;
    this.prevOpen = false;
    this.container = null;
    this.state = {
      open: false,
    };
  }


  render() {
    const { open: prevOpen } = this.state;
    const { open, children } = this.props;
    console.log('prevOpen', prevOpen, open);

    if (!prevOpen && open) {
      this.container = document.createElement('div');
      this.container.setAttribute('id', `${MODAL_ROOT}`);
      document.body.appendChild(this.container);
      return ReactDOM.createPortal(children, this.container);
    }
    const { container } = this;
    if (!open) {
      if (container) ReactDOM.unmountComponentAtNode(container);
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }
    return null;
  }
}
const ByModal = ({
  open,
  wrapped = false,
  className,
  innerClass,
  children,
  onOutsideClick,
  // onClose,
  lockScroll,
  innerWidth,
  draggable,
  ...others
}) => {
  const rootClass = classNames('by-modal', className);
  const containerClass = classNames('by-modal__container', innerClass);
  const containerRef = useRef(null);
  // const domRoot = useDomRoot(MODAL_ROOT);
  const innerStyle = innerWidth ? {
    width: innerWidth,
  } : {};


  const handleBackdropClick = (event) => {
    if (
      onOutsideClick
      && containerRef.current
      && !containerRef.current.contains(event.target)
    ) {
      onOutsideClick(event);
    }
  };
  if (open) {
    if (lockScroll) document.body.style.overflow = 'hidden';
  }

  if (lockScroll) document.body.style.overflow = '';

  let modal = (
    <div className={rootClass} onClick={handleBackdropClick}>
      <div ref={containerRef} className={containerClass} style={innerStyle}>
        {children}
      </div>
    </div>
  );
  if (draggable) {
    modal = (
      <Draggable {...others}>
        {modal}
      </Draggable>
    );
  }
  if (wrapped) {
    return modal;
  }
  return <RenderModalClass open={open}>{modal}</RenderModalClass>;
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
  draggable: false,
  wrapped: false,
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
  draggable: PropTypes.bool,
  wrapped: PropTypes.bool,
};

RenderModalClass.defaultProps = {
  open: false,
  children: undefined,
};
RenderModalClass.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ByModal;
