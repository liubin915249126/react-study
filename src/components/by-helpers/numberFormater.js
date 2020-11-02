import Decimal from 'decimal.js';
import {
  isNaN, isFinite, isInteger, isNumber,
} from './tools';

export const intercept = (number, decimal = 8) => {
  let num = Number(number);
  if (isNaN(num) || !isFinite(num)) {
    num = 0;
  }
  let numStr = '';
  if (isInteger(num)) {
    if (decimal > 0) {
      numStr = `${num}.`;
      for (let i = 0; i < decimal; i += 1) {
        numStr = `${numStr}0`;
      }
    } else {
      numStr = `${num}`;
    }
  } else {
    numStr = String(num);
    if (numStr.indexOf('e-') >= 0 || numStr.indexOf('E-') >= 0) {
      numStr = num.toFixed(decimal + 1);
    }
    numStr = numStr.split('.');
    const arrInit = numStr[0];
    const arrDecimal = numStr[1];
    if (arrDecimal.length < decimal) {
      numStr = `${arrInit}.${arrDecimal}`;
      for (let i = 0; i < decimal - arrDecimal.length; i += 1) {
        numStr = `${numStr}0`;
      }
    } else {
      numStr = `${arrInit}.${arrDecimal.substr(0, decimal)}`;
    }
  }
  return numStr;
};

/**
 * 数字转换为千分位格式
 * @param value
 * @param accuracy
 * @returns {string}
 */
export const toThousands = (value, accuracy = 0) => {
  const amount = intercept(value, accuracy);
  let regexp = '(\\d)(?=(\\d{3})+\\.)';
  if (amount.indexOf('.') === -1) {
    regexp = '(\\d)(?=(\\d{3})+$)';
  }
  return amount.replace(new RegExp(regexp, 'g'), '$1,');
};

export const transformNum = (initialNum, devider, calcType = 'div') => {
  if (!isNumber(initialNum * 1) || !isNumber(devider * 1)) {
    return null;
  }
  const decimalNum = new Decimal(initialNum * 1);
  const result = decimalNum[calcType](new Decimal(devider * 1));
  return result.toNumber();
};

/**
 * 转换为趋近于5的数字
 * @param value
 * @param precision
 * @returns {number}
 */
export const tendTo5 = (value, precision = 1) => {
  const multiple = precision - 1;
  return Math.floor(Number(value) * `1e${multiple}` * 2) / 2 / `1e${multiple}`;
};
