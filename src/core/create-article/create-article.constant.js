export const CREATE_ARTICLE_ROUTE_PATH = '/create-article';

export const CREATE_ARTICLE_STORE_NAME = 'CREATE_ARTICLE';

export const CREATE_ARTICLE_API = {
  IMAGE_UPLOAD: {
    ENDPOINT: 'file/create',
    TYPE: 'POST',
  },
  CREATE_ARTICLE_UPLOAD: {
    ENDPOINT: 'master-class/create',
    TYPE: 'POST',
  },
};

export const TEST_CREATE_ARTICLE_FIELDS__DATA = {
  description: [
    {
      type: 'input',
      title: 'Название мастер-класса',
      value: 'Готовые выкройки для чайников',
      name: 'fieldNameMasterClass',
      options: null,
    },
    {
      type: 'input',
      title: 'Красткое описание мастер-класса',
      value: 'Вот вам краткое описание мастер-класса в девяти словах',
      name: 'fieldShortDescriptionMasterClassName',
      options: null,
    },
  ],
  price: [
    {
      type: 'select',
      title: 'Доступ',
      value: 0,
      name: 'fieldAccessOptionsMasterClass',
      options: [
        { id: 0, tid: 'Платный' },
        { id: 1, tid: 'Бесплатный' },
        { id: 2, tid: 'По приглашению' },
        { id: 3, tid: 'По подписке' },
      ],
    },
    {
      type: 'input',
      title: 'Цена',
      value: '299',
      name: 'fieldPriceMasterClass',
      options: null,
    },
  ],
  content: [
    {
      type: 'input',
      fullWidth: true,
      value: 'Вот вам краткое описание мастер-класса в девяти словах',
      name: 'fieldShortDescriptionMasterClassName',
      options: null,
    },
  ],
};
