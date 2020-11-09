import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import useDomRoot from '../../hooks/use-dom-root';
import { MODAL_ROOT } from '@/utils/constants';

import './by-modal.css';

const ByModal = ({
  className,
  innerClass,
  children,
  open,
  onOutsideClick,
  // onClose,
  lockScroll,
  innerWidth,
  draggable,
  hideBackdrop,
}) => {
  const rootClass = classNames('by-modal', className);
  const containerClass = classNames('by-modal__container', innerClass);
  const containerRef = useRef(null);
  const domRoot = useDomRoot(MODAL_ROOT);
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
    const container = domRoot;

    if (lockScroll) document.body.style.overflow = 'hidden';

    const modal = (
      <div className={classNames({ [rootClass]: !hideBackdrop })} onClick={handleBackdropClick}>
        <If condition={draggable}>
          <Draggable
            enableUserSelectHack={false}
            bounds="body"
          >
            <div
              ref={containerRef}
              className={
              classNames({ [containerClass]: true, withoutMask: hideBackdrop })
              }
              style={innerStyle}
            >
              {children}
            </div>
          </Draggable>
        </If>
        <If condition={!draggable}>
          <div ref={containerRef} className={containerClass} style={innerStyle}>
            {children}
          </div>
        </If>
      </div>
    );
    return modal
    return ReactDOM.createPortal(modal, container);
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
