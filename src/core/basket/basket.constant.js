export const SEEWING_GOODS_TABLE_COLUMNS = '2fr 3.5fr 1fr 1fr 0.4fr 0.4fr';
export const PATTERN_TABLE_COLUMNS = '2fr 4.5fr 1fr 0.4fr 0.4fr';
export const MASTER_CLASSES_TABLE_COLUMNS = '2fr 4.5fr 1fr 0.4fr 0.4fr';

export const BASKET_ROUTE_PATH = '/basket';

export const BASKET_STORE_NAME = 'BASKET';

export const BASKET_API = {
  BASKET_UPLOAD: {
    ENDPOINT: '/',
    TYPE: 'POST',
  },
};

export const BASKET_SEEWING_GOODS_LIST = [
  {
    id: 1,
    title: 'Батист Макс Мара Горохи',
    image: {
      url: '/static/test/Popular-gods-1.png',
      alt: 'Popular gods 1',
    },
    parameters: {
      color: 'BASKET.TABLE.PARAMETERS.COLORS.GREEN',
      size: '15/170 250',
      category: 'BASKET.TABLE.PARAMETERS.OUTERWEAR',
    },
    count: 1,
    totalPrice: '3,200',
  },
  {
    id: 2,
    title: 'Хлопок Том Форд',
    image: {
      url: '/static/test/Popular-gods-2.png',
      alt: 'Popular gods 2',
    },
    parameters: {
      color: 'BASKET.TABLE.PARAMETERS.COLORS.WHITE',
      size: '25/180 210',
      category: 'BASKET.TABLE.PARAMETERS.OUTERWEAR',
    },
    count: 2,
    totalPrice: '1,400',
  },
];

export const BASKET_MASTER_CLASSES_LIST = [
  {
    id: 1,
    title: 'Инструкция по пошиву Комбинезон 0717',
    image: {
      url: '/static/test/Popular-gods-3.png',
      alt: 'Popular gods 3',
    },
    parameters: {
      program: 'BASKET.TABLE.PARAMETERS.REMOTE',
    },
    totalPrice: '699',
  },
];

export const BASKET_PATTERS_LIST = [
  {
    id: 1,
    title: 'Юбка-шорты 0718',
    image: {
      url: '/static/test/Popular-gods-3.png',
      alt: 'Popular gods 3',
    },
    parameters: {
      size: '15/170 250',
      format: 'BASKET.TABLE.PARAMETERS.FORMAT.PRINTED',
    },
    totalPrice: '1,500',
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
      format: 'BASKET.TABLE.PARAMETERS.FORMAT.ELECTRONIC',
    },
    totalPrice: '2,210',
  },
];
