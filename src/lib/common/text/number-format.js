import { text } from './text.core';

const numberFormat = (n) => {
  return new Intl.NumberFormat('en-EN', { currency: 'USD' }).format(Number(n));
};

export const convertedText = (children, tid, tvalue) => {
  if (Boolean(children)) {
    if (!isNaN(children)) {
      return numberFormat(children);
    } else {
      return children;
    }
  } else {
    if (!isNaN(tid)) {
      return text(numberFormat(tid), tvalue);
    } else {
      return text(tid, tvalue);
    }
  }
};
