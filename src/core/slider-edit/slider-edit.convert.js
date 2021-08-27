import { SLIDER_EDIT_FIELD_NAME, NEW_SLIDER_FORM_DATA } from './slider-edit.type';

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

export const convertNewSliderData = () => ({
  headingTextRu: NEW_SLIDER_FORM_DATA[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT],
  buttonTextRu: NEW_SLIDER_FORM_DATA[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT],
  titleTextColor: NEW_SLIDER_FORM_DATA[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR],
  buttonColor: NEW_SLIDER_FORM_DATA[SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR],
  buttonTextColor: NEW_SLIDER_FORM_DATA[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR],
  isHaveButton: NEW_SLIDER_FORM_DATA[SLIDER_EDIT_FIELD_NAME.IS_BUTTON],
  buttonUrl: NEW_SLIDER_FORM_DATA[SLIDER_EDIT_FIELD_NAME.BUTTON_PATH],
  image: {},
});

export const convertSliderEditData = (data) => ({
  headingTextRu: data.headingTextRu,
  buttonTextRu: data.buttonTextRu,
  titleTextColor: data.titleTextColor,
  buttonColor: data.buttonColor,
  buttonTextColor: data.buttonTextColor,
  isHaveButton: JSON.parse(data.isHaveButton),
  buttonUrl: data.buttonUrl,
  image: data.imageUrl,
});
