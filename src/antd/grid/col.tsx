import * as React from 'react';
import classNames from 'classnames';
import RowContext from './RowContext';
import { ConfigContext } from '../config-provider';

// https://github.com/ant-design/ant-design/issues/14324
type ColSpanType = number | string;

type FlexType = number | 'none' | 'auto' | string;

export interface ColSize {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
  xl?: ColSpanType | ColSize;
  xxl?: ColSpanType | ColSize;
  prefixCls?: string;
}

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const { gutter, wrap } = React.useContext(RowContext);

  const {
    prefixCls: customizePrefixCls,
    span,
    order,
    offset,
    push,
    pull,
    className,
    children,
    flex,
    style,
    ...others
  } = props;

  const prefixCls = getPrefixCls('col', customizePrefixCls);

  let sizeClassObj = {};
  (['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const).forEach(size => {
    let sizeProps: ColSize = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];

    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
        sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    };
  });

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span !== undefined,
      [`${prefixCls}-order-${order}`]: order,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-push-${push}`]: push,
      [`${prefixCls}-pull-${pull}`]: pull,
    },
    className,
    sizeClassObj,
  );

  let mergedStyle: React.CSSProperties = { ...style };
  if (gutter) {
    mergedStyle = {
      ...(gutter[0]! > 0
        ? {
            paddingLeft: gutter[0]! / 2,
            paddingRight: gutter[0]! / 2,
          }
        : {}),
      ...(gutter[1]! > 0
        ? {
            paddingTop: gutter[1]! / 2,
            paddingBottom: gutter[1]! / 2,
          }
        : {}),
      ...mergedStyle,
    };
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);

    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (flex === 'auto' && wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return (
    <div {...others} style={mergedStyle} className={classes} ref={ref}>
      {children}
    </div>
  );
});

Col.displayName = 'Col';

export default Col;
