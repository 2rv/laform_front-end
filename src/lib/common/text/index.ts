import { i18n } from 'src/main/lang';

export function text(tId: string = '', tValue?: object) {
  return i18n.t(tId, tValue);
}
export const currencyFormat = (price: any) => {
  return new Intl.NumberFormat('en-EN', {
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price);
};
