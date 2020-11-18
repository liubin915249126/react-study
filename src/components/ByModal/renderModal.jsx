import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Draggable from 'react-draggable';

const RenderModal = ({
    children,
    draggable,
    hideBackdrop,
    onOutsideClick,
    innerWidth,
    className,
    innerClass
  }) =>{
    const rootClass = classNames('by-modal', className);
    const containerClass = classNames('by-modal__container', innerClass);
    const containerRef = useRef(null);  
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
    return modal;  
}

RenderModal.defaultProps = {
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
  
  RenderModal.propTypes = {
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

export default RenderModal;