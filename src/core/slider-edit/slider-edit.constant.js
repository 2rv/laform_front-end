export const SLIDER_EDIT_ROUTE_PATH = (sliderId) =>
  `/slider-list/edit-slider/${sliderId}`;

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
