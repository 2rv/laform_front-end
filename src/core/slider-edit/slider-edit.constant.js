export const SLIDER_EDIT_ROUTE_PATH = (sliderEditId) => `/slider-list/edit-slider/${sliderEditId}`;

export const SLIDER_EDIT_STORE_NAME = 'SLIDER_EDIT';

export const SLIDER_EDIT_API = {
  SLIDER_EDIT_LOAD_DATA: {
    ENDPOINT: (currentLang, id) => `slider/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  SLIDER_EDIT_UPLOAD_DATA: {
    ENDPOINT: (id) => `slider/update/${id}`,
    TYPE: 'PUT',
  },
  IMAGE_LOAD: {
    ENDPOINT: 'file/create',
    TYPE: 'POST',
  },
};

export const SLIDER_FIELDS_DATA = [
  {
    type: 'input',
    title: 'Основной текст баннера',
    value: '',
    name: 'fieldTextName',
    options: null,
  },
  {
    type: 'select',
    title: 'Цвет текста',
    value: 0,
    name: 'fieldTextColorName',
    options: [
      { id: 0, tid: 'белый' },
      { id: 1, tid: 'Чёрный' },
      { id: 2, tid: 'Красный' },
      { id: 3, tid: 'Зелёный' },
      { id: 4, tid: 'Синий' },
    ],
  },
  {
    type: 'input',
    title: 'Текст на кнопке',
    value: '',
    name: 'fieldButtonTextName',
    options: null,
  },
  {
    type: 'select',
    title: 'Цвет кнопки',
    value: 0,
    name: 'fieldButtonColorName',
    options: [
      { id: 0, tid: 'Оранжевый' },
      { id: 1, tid: 'Синий' },
      { id: 2, tid: 'белый' },
      { id: 3, tid: 'Красный' },
      { id: 4, tid: 'Желтый' },
    ],
  },
  {
    type: 'select',
    title: 'Цвет текста кнопки',
    value: 0,
    name: 'fieldButtonTextColorName',
    options: [
      { id: 0, tid: 'Синой' },
      { id: 1, tid: 'Серый' },
      { id: 2, tid: 'Красный' },
      { id: 3, tid: 'Голубой' },
      { id: 4, tid: 'Фиолетовый' },
    ],
  },
];
