export const CREATE_PRODUCT_ROUTE_PATH = '/create-product';

export const CREATE_PRODUCT_STORE_NAME = 'CREATE_PRODUCT';

export const CREATE_PRODUCT_API = {
  CREATE_PRODUCT_UPLOAD: {
    ENDPOINT: '/',
    TYPE: 'POST',
  },
};

export const TEST_CREATE_PRODUCT_FIELDS__DATA = {
  description: [
    {
      type: 'input',
      title: 'Название товара',
      value: 'Пальто',
      name: 'fieldNameProduct',
      options: null,
    },
    {
      type: 'input',
      title: 'Модификатор товара или Плашка я тут незнаю',
      value: 'Хит! Скидка!',
      name: 'fieldModifierProduct',
      options: null,
    },
    {
      type: 'select',
      title: 'Категории товара',
      value: 0,
      name: 'fieldCategoryProductOptions1',
      options: [
        { id: 0, tid: 'Платный' },
        { id: 1, tid: 'Бесплатный' },
        { id: 2, tid: 'По приглашению' },
        { id: 3, tid: 'По подписке' },
      ],
    },
    {
      type: 'select',
      title: null,
      value: 0,
      name: 'fieldCategoryProductOptions2',
      options: [
        { id: 0, tid: 'Инструкции' },
        { id: 1, tid: 'Уроки' },
        { id: 2, tid: 'Лекции' },
        { id: 3, tid: 'Практики' },
      ],
    },
    {
      type: 'select',
      title: null,
      value: 0,
      name: 'fieldCategory1ProductOptions3',
      options: [
        { id: 0, tid: 'Новые' },
        { id: 1, tid: 'Старые' },
        { id: 2, tid: 'Средние' },
        { id: 3, tid: 'По подписке' },
      ],
    },
    {
      type: 'input',
      title: 'Описание товара',
      fullWidth: true,
      value: 'Вот вам очень полное описание товара в девяти словах',
      name: 'fieldFullDescriptionProduct',
      options: null,
    },
  ],
  productOptions: [
    {
      type: 'select',
      title: 'Опция',
      value: 0,
      fullWidth: true,
      name: 'fieldProductOptions1',
      options: [
        { id: 0, tid: 'Размер' },
        { id: 1, tid: 'Ещё размер' },
        { id: 2, tid: 'Ещё ещё размер' },
        { id: 3, tid: 'Ещё ещё ещё размер' },
      ],
    },
    {
      type: 'input',
      title: 'Размер',
      value: '15/25/100',
      name: 'fieldSizeProduct1',
      options: null,
    },
    {
      type: 'input',
      title: 'Цена',
      value: '550',
      name: 'fieldSizePriceProduct1',
      options: null,
    },
    {
      type: 'input',
      title: 'Размер',
      value: '20/30/100',
      name: 'fieldSizeProduct2',
      options: null,
    },
    {
      type: 'input',
      title: 'Цена',
      value: '550',
      name: 'fieldSizePriceProduct2',
      options: null,
    },
    {
      type: 'select',
      title: 'Опция',
      value: 0,
      fullWidth: true,
      name: 'fieldProductOptions2',
      options: [
        { id: 0, tid: 'Цвет' },
        { id: 1, tid: 'Ещё цвет' },
        { id: 2, tid: 'Ещё ещё цвет' },
        { id: 3, tid: 'Ещё ещё ещё цвет' },
      ],
    },
    {
      type: 'input',
      title: 'Цвет',
      value: 'Зелёный',
      name: 'fieldColorProduct1',
      options: null,
    },
    {
      type: 'input',
      title: 'Цена',
      value: '550',
      name: 'fieldColorPriceProduct1',
      options: null,
    },
    {
      type: 'input',
      title: 'Цвет',
      value: 'Белый',
      name: 'fieldColorProduct2',
      options: null,
    },
    {
      type: 'input',
      title: 'Цена',
      value: '550',
      name: 'fieldColorPriceProduct2',
      options: null,
    },
  ],
  price: [
    {
      type: 'input',
      title: 'Цена товара (минимальная)',
      value: '1000',
      name: 'fieldPriceProduct',
      options: null,
    },
    {
      type: 'input',
      title: 'Скидка',
      value: '0',
      name: 'fieldDiscountProduct',
      options: null,
    },
  ],
};

export const TEST_CREATE_PRODUCT_IMAGES__DATA = [
  { backgroundImage: '/static/test/product-image-3.png' },
  { backgroundImage: '/static/test/product-image-2.png' },
  { backgroundImage: '/static/test/product-image-1.png' },
];
