export const convertOrdersCount = (data) => {
  const filteredData = data.map(({ date, count }) => ({
    x: new Date(date),
    y: count,
  }));

  const dataYears = filteredData
    .reduce((years, { x }) => {
      const year = x.getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
      return years;
    }, [])
    .map((year) => ({ name: year }));

  return { data: filteredData, dataYears };
};

export const convertPrice = (data) => {
  const filteredData = data.map(({ date, price }) => ({
    x: new Date(date),
    y: price,
  }));

  const dataYears = filteredData
    .reduce((years, { x }) => {
      const year = x.getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
      return years;
    }, [])
    .map((year) => ({ name: year }));

  return { data: filteredData, dataYears };
};
