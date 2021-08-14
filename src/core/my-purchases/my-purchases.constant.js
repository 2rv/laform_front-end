export const MY_PURCHASES_ROUTE_PATH = '/my-purchases';

export const MY_PURCHASES_STORE_NAME = 'MY_PURCHASES';

export const MY_PURCHASES_API = {
  MY_PURCHASES_UPLOAD: {
    ENDPOINT: '/',
    TYPE: 'POST',
  },
};

export const MY_PURCHASES_TABLE_COLUMNS = '1fr 2fr 0.4fr 0.4fr';

export const PURCHASES_LIST = [
  {
    id: 1,
    title: 'Товары для шитья',
    image: {
      url: '/static/test/Popular-gods-2.png',
      alt: 'Popular Gods 2',
    },
    details: {
      color: 'PURCHASE.SEЕWING_GOODS.DETAILS.COLOR.GREEN',
      size: '15/170 250',
      category: 'PURCHASE.SEЕWING_GOODS.DETAILS.CATEGORY.OUTERWEAR',
      count: 1,
    },
    price: '3,200',
    condition: 'delivered',
  },
  {
    id: 2,
    title: 'Товары для шитья',
    image: {
      url: '/static/test/Popular-gods-1.png',
      alt: 'Popular Gods 1',
    },
    details: {
      color: 'PURCHASE.SEЕWING_GOODS.DETAILS.COLOR.WHITE',
      size: '25/180 250',
      category: 'PURCHASE.SEЕWING_GOODS.DETAILS.CATEGORY.OUTERWEAR',
      count: 3,
    },
    price: '699',
    condition: 'paid',
  },
];
