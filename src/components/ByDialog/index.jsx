import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ByModal, { RenderModalClass } from '../ByModal';
import ConfirmDialog from './Confirm';
import confirm from './confirm'
import RenderContent from './renderContent';

import './by-dialog.css';

const ByDialog = ({
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
  innerClass,
  open,
  ...others
}) => {
  const containerClass = classNames('by-dialog', innerClass);
  // const renderModalObj = useRef(new RenderModalClass());
  const modal = (
    <ByModal innerClass={containerClass} wrapped {...others}>
      {RenderContent({
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
      })}
    </ByModal>
  );

  return <RenderModalClass open={open}>{modal}</RenderModalClass>;
};

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
  open: undefined,
};

ByDialog.propTypes = {
  open: PropTypes.bool,
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
};

const confirmDialog = new ConfirmDialog();

ByDialog.confirm = confirm;
export default ByDialog;
