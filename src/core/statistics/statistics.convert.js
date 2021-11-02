export const convertForChart = (rowData) => {
  console.log(rowData);
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
