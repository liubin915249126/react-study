import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ByModal from '../ByModal';
import renderContent from './renderContent';

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


export const useModal = require('./useModal').default;
import Confirm, {destroyAll as destroyAllFun} from'./confirm'

ByDialog.useModal = useModal;
ByDialog.destroyAll = destroyAllFun;
ByDialog.confirm = Confirm;

export const destroyAll = destroyAllFun;

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

