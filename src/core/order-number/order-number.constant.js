export const ORDER_NUMBER_TABLE_COLUMNS = '1fr 2.1fr 1fr';

export const ORDER_NUMBER_LIST = [
  {
    id: 1,
    title: 'Выкройка пальто 1250 с руквавом',
    image: {
      url: '/static/test/Popular-gods-3.png',
      alt: 'Popular gods 3',
    },
    parameters: {
      size: '15/170 250',
      format: 'ORDER_NUMBER.TABLE.DATA.PARAMETERS.PRINTED',
      color: null,
      count: null,
    },
    totalPrice: '3,200',
  },
  {
    id: 2,
    title: 'Сарафан 0445',
    image: {
      url: '/static/test/Popular-gods-2.png',
      alt: 'Popular gods 2',
    },
    parameters: {
      size: '15/170 250',
      format: null,
      color: 'ORDER_NUMBER.TABLE.DATA.PARAMETERS.WHITE',
      count: 1,
    },
    totalPrice: '1,299',
  },
];
