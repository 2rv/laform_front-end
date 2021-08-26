import { SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';

export const convertSliderEditFormData = (data) => ({
  headingTextRu: data[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT],
  buttonTextRu: data[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT],
  buttonUrl: data[SLIDER_EDIT_FIELD_NAME.BUTTON_PATH],
});
