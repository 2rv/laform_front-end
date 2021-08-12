export const SLIDER_EDIT_ROUTE_PATH = '/slider-edit';
export const TEST_SLIDE_PREVIEW_DATA = {
  slideText: 'Готовые выкройки в интернет-магазине',
  backgroundImage: '/static/test/slider-item-1.png',
};
export const TEST_SLIDER_FIELDS_DATA = [
  {
    type: 'input',
    title: 'Основной текст баннера',
    value: 'Готовые выкройки в интернет магазине LaForme',
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
    value: 'Купить',
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
