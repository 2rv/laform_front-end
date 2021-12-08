import { STATISTICS_PERIODS } from './statistics.constant';

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
export const convertQuery = (query) => {
  const { type, value } = query;

  let from = new Date();
  let to = new Date();
  from.setDate(from.getDate() - STATISTICS_PERIODS[+value].value);
  to.setDate(to.getDate() + 1);

  if (!type) {
    return `from=${from.toISOString()}&to=${to.toISOString()}`;
  }
  if (type === 'master-class') {
    return `type=${0}&from=${from.toISOString()}&to=${to.toISOString()}`;
  } else if (type === 'pattern-electronic') {
    return `type=${1}&from=${from.toISOString()}&to=${to.toISOString()}`;
  } else if (type === 'pattern-print') {
    return `type=${2}&from=${from.toISOString()}&to=${to.toISOString()}`;
  } else if (type === 'sewing-good') {
    return `type=${3}&from=${from.toISOString()}&to=${to.toISOString()}`;
  } else {
    return `type=${9}&from=${from.toISOString()}&to=${to.toISOString()}`;
  }
};
