export const POPOVER_ROOT = 'popover-root';
export const MODAL_ROOT = 'modal-root';

export const TEXT_ALIGNS = {
  LEFT: undefined,
  CENTER: 'center',
  RIGHT: 'right',
};

export const COMPONENT_TYPES = {
  DEFAULT: undefined,
  OUTLINED: 'outlined',
  CONTAINED: 'contained',
};

export const SIZE_ENUMS = {
  NONE: undefined,
  MEDIUM: 'medium',
  SMALL: 'small',
  LARGE: 'large',
  XLARGE: 'x-large',
  XXLARGE: 'xx-large',
};

export const COLOR_ENUMS = {
  DEFAULT: undefined,
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LONG: 'long',
  SHORT: 'short',
  BRAND: 'brand',
  WHITE: 'white',
  GC1: 'gc-1',
  GC2: 'gc-2',
  GC4: 'gc-4',
};

export const TRIGGER = {
  CLICK: 'click',
  HOVER: 'hover',
};

export const INFO_TYPES = {
  ERROR: 'error',
  WARN: 'warn',
  SUCCESS: 'success',
  INFO: 'info',
};

const placementBase = ['top', 'bottom', 'left', 'right'];
const placementModifier = ['-start', '-end'];
/**
 * Generate placement constants by above definitions, combined 1 by 1.
 * result: {
 *  AUTO: 'auto',
 *  TOP: 'top',
 *  TOP_START: 'top-start',
 *  TOP_END: 'top-end',
 *  // etc...
 * }
 */
export const PLACEMENT = {
  AUTO: 'auto',
  ...placementBase.reduce((prev, cur) => ({
    ...prev,
    ...placementModifier.reduce(
      (pre, cu) => ({
        ...pre,
        [cur.toUpperCase()]: cur,
        [`${cur}${cu}`.toUpperCase().replace('-', '_')]: `${cur}${cu}`,
      }),
      {},
    ),
  }), {}),
};
