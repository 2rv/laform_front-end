export const PRODUCT_ROUTE_PATH = '/product';
export const PRODUCT_TEST_DATA = {
  name: 'Комбинезон 0717',
  bestSeller: true,
  price: 300,
  discount: 5,
  liked: true,
  inBacket: true,
  some: true,
  descriptionItem: {
    short: 'Верхня одежда, сложный пошив, печатная версия',
    full: 'Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны)  Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны) ',
    materials:
      'Рекомендуемые материалы (Двоеточие) пальтовые материалы натуральных и смешанных составов. При пошиве из ворсовых материалов следует выбирать эту модель с рукавом реглан, так как в цельнокроеном рукаве-3 направление ворса пойдет по косой и могут проявиться залысины в ворсе — проверить ткань, сложив под углом 45 ',
  },
  optionItem: [
    {
      title: 'Размер',
      fieldName: 'fieldProductSizeName',
      type: 'size',
      initial: 0,
      items: [
        { id: 0, tid: `Детский` },
        { id: 1, tid: `Подростковый` },
        { id: 2, tid: `Взрослый` },
      ],
    },
    {
      title: 'Цвет',
      fieldName: 'fieldProductColorName',
      initial: 0,
      items: [
        { id: 0, tid: `Красный` },
        { id: 1, tid: `Синий` },
        { id: 2, tid: `Зелёный` },
      ],
    },
  ],
  imageItem: [
    '/static/test/product-image-1.png',
    '/static/test/product-image-2.png',
    '/static/test/product-image-3.png',
  ],
  recomendItem: [
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
  commentItem: [
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
export const PRODUCT_PURCHASED_TEST_DATA = {
  name: 'Комбинезон 0717',
  purchased: true,
  price: 2522.85,
  dilivery: 299,
  discount: 15,
  delivered: true,
  descriptionItem: {
    short: 'Верхня одежда, сложный пошив, печатная версия',
    full: 'Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны)  Комбинезон женский сложного кроя, прямого силуэта. Перед и спинка с вертикальным членением в виде фартука, по рельефам застрочены складки. Рукав-реглан до локтя с объемной сборкой по низу и притачной манжетой. По талии настрачивается кулиса с лентой (если с лицевой стороны) или кулиса с резинкой (если с изнаночной стороны) ',
    materials:
      'Рекомендуемые материалы (Двоеточие) пальтовые материалы натуральных и смешанных составов. При пошиве из ворсовых материалов следует выбирать эту модель с рукавом реглан, так как в цельнокроеном рукаве-3 направление ворса пойдет по косой и могут проявиться залысины в ворсе — проверить ткань, сложив под углом 45 ',
  },
  optionItem: [
    {
      title: 'Размер',
      value: '15/170 250',
    },
    {
      title: 'Категория',
      value: 'Верхняя одежда',
    },
  ],
  imageItem: [
    '/static/test/product-image-1.png',
    '/static/test/product-image-2.png',
    '/static/test/product-image-3.png',
  ],
  recomendItem: [
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
  commentItem: [
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
  deliveredItem: [
    {
      title: 'Адрес доставки',
      value: 'Москва, Ул. Пушкина 1А',
    },
    {
      title: 'Способ оплаты',
      value: 'Наличными',
    },
    {
      title: 'Состояние',
      status: 2,
    },
  ],
};
