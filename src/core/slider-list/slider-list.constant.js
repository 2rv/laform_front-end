export const SLIDER_LIST_ROUTE_PATH = '/slider-list';

export const SLIDER_LIST_STORE_NAME = 'SLIDER_LIST';

export const SLIDER_LIST_API = {
  SLIDER_LIST_UPLOAD_DATA: {
    ENDPOINT: 'slider/create',
    TYPE: 'POST',
  },
  SLIDER_LIST_LOAD_DATA: {
    ENDPOINT: (currentLang) => `slider/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  SLIDER_ITEM_REMOVE: {
    ENDPOINT: (id) => `slider/delete/${id}`,
    TYPE: 'DELETE',
  },
};
