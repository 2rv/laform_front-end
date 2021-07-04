export const ORDERS_ROUTE_PATH = '/';

export const ORDERS_TEST_ITEMS = [
  {
    id: 1,
    name: 'Товары для шитья',
    backgroundImage: '/static/test/popular-gods-1.png',
    goodsDetails: {
      color: 'Зелёный',
      size: '15/170/250',
      category: 'Верхняя одежда',
      numberOfItems: 1,
    },
    diliveryData: {
      fullName: 'Иванов Иван Иванович',
      city: 'Москва',
      diliveryAdress: 'Ул. Пушкина Дом 1',
      paymentMethod: 'Полная предоплата',
      phone: '+7 000 000 000',
    },
    price: 999,
    status: 2,
  },
  {
    id: 2,
    name: 'Товары для шитья',
    backgroundImage: '/static/test/popular-gods-1.png',
    goodsDetails: {
      color: 'Зелёный',
      size: '15/170/250',
      category: 'Верхняя одежда',
      numberOfItems: 1,
    },
    diliveryData: {
      fullName: 'Иванов Иван Иванович',
      city: 'Москва',
      diliveryAdress: 'Ул. Пушкина Дом 1',
      paymentMethod: 'Полная предоплата',
      phone: '+7 000 000 000',
    },
    price: 3200,
    status: 1,
  },
];

export const ORDERS_TEST_SUB_MENU_ITEMS = [
  { name: 'Товары для шитья', path: '/orders' },
  { name: 'Выкройки печатные', path: '/orders' },
];
