export const PRODUCT_ROUTE_PATH = '/product';

export const PRODUCT_STORE_NAME = 'PRODUCT';

export const PRODUCT_API = {
  PRODUCT_UPLOAD: {
    ENDPOINT: '/',
    TYPE: 'POST',
  },
};

export const TEST_PRODUCT_DATA = {
  name: 'Комбинезон 0717',
  bestSeller: true,
  description: {
    short: 'Верхня одежда, сложный пошив, печатная версия',
    full: 'Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны)  Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны) ',
    materials:
      'Рекомендуемые материалы (Двоеточие) пальтовые материалы натуральных и смешанных составов. При пошиве из ворсовых материалов следует выбирать эту модель с рукавом реглан, так как в цельнокроеном рукаве-3 направление ворса пойдет по косой и могут проявиться залысины в ворсе — проверить ткань, сложив под углом 45 ',
  },
  price: 300,
  discount: 5,
  liked: true,
  inBacket: true,
  options: {
    size: [
      { id: 0, tid: `Детский` },
      { id: 1, tid: `Подростковый` },
      { id: 2, tid: `Взрослый` },
    ],
    color: [
      { id: 0, tid: `Красный` },
      { id: 1, tid: `Синий` },
      { id: 2, tid: `Зелёный` },
    ],
  },
  images: [
    '/static/test/product-image-1.png',
    '/static/test/product-image-2.png',
    '/static/test/product-image-3.png',
  ],
  itemsRecomend: [
    {
      id: 1,
      name: 'Сарафан 0445',
      complexity: 1,
      selected: true,
      price: {
        min: 500,
        max: null,
      },
      isLiked: true,
      hit: false,
      discount: 230,
      backgroundImage: '/static/test/popular-gods-1.png',
    },
    {
      id: 2,
      name: 'Батист Макс Мара Горохи',
      complexity: 3,
      selected: false,
      price: {
        min: 200,
        max: 4150,
      },
      isLiked: true,
      hit: false,
      discount: null,
      backgroundImage: '/static/test/popular-gods-2.png',
    },
    {
      id: 3,
      name: 'Батист',
      complexity: 3,
      selected: false,
      price: {
        min: 200,
        max: 900,
      },
      isLiked: false,
      hit: true,
      discount: null,
      backgroundImage: '/static/test/popular-gods-3.png',
    },
  ],
  comments: [
    {
      me: false,
      id: 1,
      username: 'Людмила Азонова',
      date: '25.05.2021',
      message: `Подходит для пальтово-костюмной группы тканей.
	  Очень удгобная и хорошая вещь, спасибо! Хотелось бы сказать что вещь правда хороашая и дошла очень быстро, буду заказывать ещё. Из минусов – дороговато, всё таки.`,
    },
    {
      me: false,
      id: 1,
      username: 'Людмила Азонова',
      date: '25.05.2021',
      message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
    },
    {
      me: true,
      id: 1,
      username: 'Людмила Азонова',
      date: '25.05.2021',
      message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
    },
  ],
};
export const TEST_PRODUCT_OPTIONS_KEY = {
  SIZE: 'size',
  COLOR: 'color',
};
export const TEST_PRODUCT_TITLE_BY_KEY = {
  size: 'Размер',
  color: 'Цвет',
};
