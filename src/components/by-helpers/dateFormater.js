/**
 * Date formate to Object
 * @param date
 * @returns
 * {{hours: (string|*),
 * seconds: (string|*),
 * month: (string|*),
 * year: (string|*),
 * minutes: (string|*),
 * day: (string|*)}}
 */
function getDateFormatObj(date) {
  const y = date.getFullYear();
  const mo = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const obj = {
    year: Number.isNaN(y) ? '--' : y,
    month: Number.isNaN(mo) ? '--' : mo,
    day: Number.isNaN(d) ? '--' : d,
    hours: Number.isNaN(h) ? '--' : h,
    minutes: Number.isNaN(m) ? '--' : m,
    seconds: Number.isNaN(s) ? '--' : s,
  };
  Object.keys(obj).forEach((k) => {
    if (obj[k] < 10) {
      obj[k] = `0${obj[k]}`;
    }
  });
  return obj;
}

function getCountDown(time, hourOffset = 0) {
  const now = new Date();
  const target = (time - now) / 1000;
  const days = Math.floor(target / 3600 / 24);
  const hours = Math.floor((target - days * 24 * 3600) / 3600);
  const minutes = Math.floor((target - days * 24 * 3600 - hours * 3600) / 60);
  const seconds = Math.floor((target - days * 24 * 3600 - hours * 3600 - minutes * 60));
  const obj = {
    days,
    hours: hours + hourOffset,
    minutes,
    seconds,
  };
  Object.keys(obj).forEach((k) => {
    if (obj[k] < 10) {
      obj[k] = `0${obj[k]}`;
    }
  });
  return obj;
}
/**
 * 转换为本地日期
 * @param value
 * @returns {string|*}
 */
export function localDateTime(value) {
  if (!value) return value;
  const date = typeof value === 'object' ? value : new Date(value);
  const p = getDateFormatObj(date);
  return `${p.year}-${p.month}-${p.day} ${p.hours}:${p.minutes}:${p.seconds}`;
}

export function localDate(value) {
  if (!value) return value;
  const date = typeof value === 'object' ? value : new Date(value);
  const p = getDateFormatObj(date);
  return `${p.year}-${p.month}`;
}

export function localTime(value) {
  if (!value) return value;
  const date = typeof value === 'object' ? value : new Date(value);
  const p = getDateFormatObj(date);
  return `${p.hours}:${p.minutes}:${p.seconds}`;
}

export function countDown(value, hourOffset) {
  if (!value) return value;
  const date = typeof value === 'object' ? value : new Date(value);
  const { hours, minutes, seconds } = getCountDown(date, hourOffset);
  return `${hours}:${minutes}:${seconds}`;
}
