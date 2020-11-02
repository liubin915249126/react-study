import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { map, isUndefined } from '../by-helpers';
import { COMPONENT_TYPES, SIZE_ENUMS } from '@/utils/constants';

import './by-button.css';

const SKEW_ENUMS = {
  RIGHT: 'right',
  LEFT: 'left',
};

const rootClassName = 'by-button';

const ByButton = ({
  className,
  contentClass,
  type,
  disabled,
  loading,
  children,
  onClick,
  size,
  rounded,
  color,
  skew,
  hrefLink,
}) => {
  const rootClass = classNames(
    rootClassName,
    className,
    type ? `${rootClassName}--${type}` : '',
    disabled ? `${rootClassName}--disabled` : '',
    size ? `${rootClassName}--${size}` : '',
    color ? `${rootClassName}--${color}` : '',
    rounded ? `${rootClassName}--rounded` : '',
    skew ? `${rootClassName}--skew-${skew}` : '',
  );

  const handleHrefClick = (event) => {
    if (!loading && !disabled && !isUndefined(onClick)) onClick(event);
    window.location.href = hrefLink;
  };
  const handleButtonClick = (event) => {
    if (!loading && !disabled && !isUndefined(onClick)) onClick(event);
  };

  const handleClick = isUndefined(hrefLink)
    ? handleButtonClick
    : handleHrefClick;

  return (
    <button
      className={rootClass}
      type="button"
      onClick={handleClick}
    >

      <span className={classNames('by-button__content', contentClass)}>
        <Choose>
          <When condition={loading}>
            <span className="by-loading icon iconfont icon-loading" />
          </When>
          <Otherwise>{children}</Otherwise>
        </Choose>
      </span>

    </button>
  );
};

ByButton.defaultProps = {
  type: undefined,
  disabled: false,
  className: undefined,
  contentClass: undefined,
  loading: false,
  children: undefined,
  onClick: undefined,
  size: undefined,
  rounded: false,
  color: undefined,
  skew: undefined,
  hrefLink: undefined,
};

ByButton.propTypes = {
  type: PropTypes.oneOf(map(COMPONENT_TYPES, (val) => val)),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  contentClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(map(SIZE_ENUMS, (val) => val)),
  rounded: PropTypes.bool,
  color: PropTypes.string,
  skew: PropTypes.oneOf(map(SKEW_ENUMS, (val) => val)),
  hrefLink: PropTypes.string,
};

export default ByButton;
