export const convertPrice = (data) => {
  return {
    labels: data.map((e) => e.date),
    datasets: [
      {
        label: 'Всего рублей Продано предметов',
        data: data.map((e) => e.price),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
};

export const convertCount = (data) => {
  return {
    labels: data.map((e) => e.date),
    datasets: [
      {
        label: 'Продано предметов',
        data: data.map((e) => e.count),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
};

export const convertUsers = (data) => {
  return {
    labels: data.map((e) => e.date),
    datasets: [
      {
        label: 'Новых пользователей',
        data: data.map((e) => e.users),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
};
