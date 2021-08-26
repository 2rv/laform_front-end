import { SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';

export const convertSliderEditFormData = (data) => ({
  headingTextRu: data[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT],
  buttonTextRu: data[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT],
  titleTextColor: data[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR],
  buttonColor: data[SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR],
  buttonTextColor: data[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR],
  isHaveButton: data[SLIDER_EDIT_FIELD_NAME.IS_BUTTON],
  buttonUrl: data[SLIDER_EDIT_FIELD_NAME.BUTTON_PATH],
  buttonTextEn: 'test',
  headingTextEn: 'test',
});
