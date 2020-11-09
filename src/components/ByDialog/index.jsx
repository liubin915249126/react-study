import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ByModal from '../ByModal';
import ByButton from '../ByButton';

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
  const closeBtnClass = classNames([
    'by-dialog__close',
    'regular f-12 gc-04 brand-hover',
    'icon iconfont icon-close',
  ]);

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <ByModal innerClass={containerClass} {...others}>
      <If condition={head}>
        <div className="by-dialog__head bold f-14">
          {head}
          <If condition={showClose}>
            <span className={closeBtnClass} onClick={handleClose} />
          </If>
        </div>
      </If>
      <div className="by-dialog__body gc-07">
        { children }
      </div>
      <If condition={showFoot}>
        <div className="by-dialog__foot flex">
          <Choose>
            <When condition={foot}>
              {foot}
            </When>
            <Otherwise>
              <If condition={showConfirm}>
                <ByButton
                  size="large"
                  className="by-dialog__btn"
                  color="primary"
                  type="contained"
                  onClick={onConfirm}
                  loading={confirming}
                >
                  {confirmText}
                </ByButton>
              </If>
              <If condition={showCancel}>
                <ByButton
                  size="large"
                  type="outlined"
                  className="by-dialog__btn"
                  color="secondary"
                  onClick={onCancel}
                >
                  {cancelText}
                </ByButton>
              </If>
            </Otherwise>
          </Choose>
        </div>
      </If>
    </ByModal>
  );
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

export const useModal = require('./confirm').default;
ByDialog.useModal = useModal;
export default ByDialog;
