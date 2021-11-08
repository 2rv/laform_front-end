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
