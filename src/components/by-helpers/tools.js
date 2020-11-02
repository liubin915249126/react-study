/* eslint-disable */
const freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
const freeSelf = typeof self == 'object' && self && self.Object === Object && self;
const root = freeGlobal || freeSelf || Function('return this')();
const nativeIsFinite = root.isFinite;

/** Used as references for various `Number` constants. */
const NAN = 0 / 0;
const INFINITY = 1 / 0;
const MAX_INTEGER = 1.7976931348623157e+308;

const numberTag = '[object Number]';
const symbolTag = '[object Symbol]';
const funcTag = '[object Function]';
const genTag = '[object GeneratorFunction]';


/** Used to match leading and trailing whitespace. */
const reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
const reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
const reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
const freeParseInt = parseInt;

/** Used for built-in method references. */
const objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
const objectToString = objectProto.toString;

export const isString = (val) => typeof val === 'string';
export const isUndefined = (value) => value === undefined;
export const isObjectLike = (value) => !!value && typeof value == 'object';
export const isPlainObject = (val) => !!val && typeof val === 'object' && val.constructor === Object;
export const isObject = (value) => {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

export const isSymbol = (value) => {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

export const toNumber = (value) => {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

export const toFinite = (value) => {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

export const toInteger = (value) => {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

export const isNumber = (value) => typeof value == 'number' || (isObjectLike(value) && objectToString.call(value) == numberTag);
export const isNaN = (value) => isNumber(value) && value != +value;
export const isFinite = (value) => typeof value == 'number' && nativeIsFinite(value);
export const isInteger = (value) => typeof value == 'number' && value == toInteger(value);
export const isFunction = (value) => {
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/** tools */
export const deepClone = (obj) => {
  if (obj === null) return null;
  const clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]),
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
      ? Array.from(obj)
      : clone;
};

export const map = (obj, fn) => Array.isArray(obj) ? obj.map(fn) : isPlainObject(obj) ? Object.keys(obj).map((key) => fn(obj[key], key)) : [];

export const omit = (obj, arr) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

export const crossCombine = (arr1, arr2) => arr1.reduce((prev, cur) => ([...prev, ...arr2.map(v => [cur, v])]), []);

export const clamp = (number, lower, upper) => {
  number = +number
  lower = +lower
  upper = +upper
  lower = lower === lower ? lower : 0
  upper = upper === upper ? upper : 0
  if (number === number) {
    number = number <= upper ? number : upper
    number = number >= lower ? number : lower
  }
  return number
}

export const partition = (arr, fn) => arr.reduce(
  (acc, val, i, arr) => {
    acc[fn(val, i, arr) ? 0 : 1].push(val);
    return acc;
  },
  [[], []],
);

export const pick = (obj, arr) => arr.reduce(
  (acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {},
);
/** tools */
/* eslint-enable */
