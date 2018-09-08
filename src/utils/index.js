import isArray from 'lodash/isArray';

export const cx = (arr) => arr.filter(e => e).join(' ');

const encodeValue = (k, v) => `${k}=${encodeURIComponent(v)}`;

export const encodeBody = (obj) => !obj ? null : Object.keys(obj).map(k => {
  const encodedK = encodeURIComponent(k);
  const value = obj[k];

  if (isArray(value)) {
    return value.map(v => encodeValue(encodedK, v)).join('&');
  }
  return encodeValue(encodedK, value);
}).join('&');

/**
 * Приводит дату к формату 'DD.MM.YYYY'
 * @param date
 * @returns {string}
 */
export const formatingDate = date => {
  const dateLocal = new Date(date.toString());
  let day = dateLocal.getDate();
  day = day < 10 ? `0${day}` : day;
  const year = dateLocal.getFullYear();
  let month = dateLocal.getMonth();
  month = month < 9 ? `0${month + 1}` : month + 1;

  return `${day}.${month}.${year}`;
};
