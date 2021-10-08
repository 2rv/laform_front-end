export const currencyFormat = (n) => {
  return new Intl.NumberFormat('en-EN', {
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(n);
};
