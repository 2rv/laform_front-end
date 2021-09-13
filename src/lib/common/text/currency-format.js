export const currencyFormat = (n) => {
  return new Intl.NumberFormat('en-EN', { currency: 'USD' }).format(Number(n));
};
