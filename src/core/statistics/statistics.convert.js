export const convertForChart = (rowData) => {
  return {
    ...rowData,
    chartOrders: rowData.chartOrders.map((item, index) => {
      return {
        x: item.date,
        y: item.orders,
      };
    }),
  };
};
