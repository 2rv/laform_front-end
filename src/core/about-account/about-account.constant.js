export const ABOUT_ACCOUNT_ROUTE_PATH = '/';

export const ABOUT_ACCOUNT_STORE_NAME = 'ABOUT_ACCOUNT';

export const ABOUT_ACCOUNT_API = {
  ABOUT_ACCOUNT_UPLOAD: {
    ENDPOINT: '/',
    TYPE: 'POST',
  },
};

export const ABOUT_ACCOUNT_TEST_ITEMS = {
  myGoods: {
    title: 'Мои покупки',
    items: [
      {
        id: 1,
        name: 'Товары для шитья',
        backgroundImage: '/static/test/popular-gods-1.png',
        color: 'Зелёный',
        size: '15/170/250',
        category: 'Верхняя одежда',
        numberOfItems: 1,
        price: 999,
        status: 2,
      },
      {
        id: 2,
        name: 'Товары для шитья',
        backgroundImage: '/static/test/popular-gods-1.png',
        color: 'Зелёный',
        size: '15/170/250',
        category: 'Верхняя одежда',
        numberOfItems: 1,
        price: 3200,
        status: 1,
      },
    ],
  },
  aboutAccount: {
    title: 'Мои лайки',
    items: [
      {
        id: 1,
        name: 'Мастер-класс по пошиву брюк 1003',
        backgroundImage: '/static/test/popular-gods-1.png',
        category: 'Мастер-класс',
      },
      {
        id: 2,
        name: 'Вискоза Жёлтые цветы',
        backgroundImage: '/static/test/popular-gods-2.png',
        category: 'Товар для шитья',
      },
    ],
  },
  myComments: {
    title: 'Мои отзывы',
    items: [
      {
        id: 1,
        name: 'Вискоза Желтые цветы',
        commentText: `Подходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо! Хотелось`,
        backgroundImage: '/static/test/popular-gods-1.png',
      },
      {
        id: 2,
        name: 'Мастер-класс по пошиву брюк 1003',
        commentText: `Подходит для пальтово-костюмной группы тканей.
		Очень удгобная и хорошая вещь, спасибо!`,
        backgroundImage: '/static/test/popular-gods-2.png',
      },
    ],
  },
};
