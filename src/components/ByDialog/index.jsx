import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ByModal from '../ByModal';
import ByButton from '../ByButton';
import renderContent from './renderContent';
export const destroyFns = [];

import './by-dialog.css';

const ByDialog = ({
  head,
  foot,
  children,
  innerClass,
  onClose,
  showClose,
  onConfirm,
  confirming,
  showConfirm,
  confirmText,
  onCancel,
  showCancel,
  cancelText,
  showFoot,
  ...others
}) => {
  const containerClass = classNames('by-dialog', innerClass);
  return (
    <ByModal innerClass={containerClass} {...others}>
      {renderContent({
        head,
        foot,
        children,
        onClose,
        showClose,
        onConfirm,
        confirming,
        showConfirm,
        confirmText,
        onCancel,
        showCancel,
        cancelText,
        showFoot,
        ...others
      })}
    </ByModal>
  );
};

const destroyAll = () => {
  debugger;
  console.log(11,destroyFns)
  while (destroyFns.length){
    
  }
}

export const useModal = require('./confirm').default;
ByDialog.useModal = useModal;
ByDialog.destroyAll = destroyAll;

export default ByDialog;

ByDialog.defaultProps = {
  head: undefined,
  foot: undefined,
  children: undefined,
  innerClass: undefined,
  onClose: undefined,
  showClose: true,
  onConfirm: undefined,
  confirming: false,
  showConfirm: false,
  confirmText: undefined,
  onCancel: undefined,
  showCancel: true,
  cancelText: undefined,
  showFoot: true,
};

ByDialog.propTypes = {
  head: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  foot: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  innerClass: PropTypes.string,
  onClose: PropTypes.func,
  showClose: PropTypes.bool,
  onConfirm: PropTypes.func,
  confirming: PropTypes.bool,
  showConfirm: PropTypes.bool,
  confirmText: PropTypes.string,
  onCancel: PropTypes.func,
  showCancel: PropTypes.bool,
  cancelText: PropTypes.string,
  showFoot: PropTypes.bool,
};

