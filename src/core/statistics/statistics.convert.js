export const convertForChart = (rowData) => {
  return {
    ...rowData,
    chartOrders: rowData.chartOrders.map((item, index) => {
      return {
        date: item.date,
        orders: item.orders,
        price: item.price,
      };
    }),
  };
};

export const convertOrdersCount = (data) => {
  return data.map(({ date, count }) => ({
    date: formatDate(date),
    count,
  }));
};

export const convertPrice = (data) => {
  return data.map(({ date, price }) => ({
    date: formatDate(date),
    price,
  }));
};

const formatDate = (date) => {
  const splittedDate = date.split('.');
  const year = Number(splittedDate[2]);
  const month = Number(splittedDate[1]) - 1;
  const day = Number(splittedDate[0]);

  return new Date(year, month, day);
};
