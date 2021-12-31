import { validate } from 'src/main/validate/validate.core';
import { required, requiredArray } from 'src/main/validate/validate.service';
import { SLIDER_EDIT_FIELD_NAME, SliderEditValue } from './slider-edit.type';

const config = (values: SliderEditValue) => {
  if (values.isButton) {
    return {
      [SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE]: [required],
      [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_RU]: [required],
      [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_EN]: [required],
      [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]: [required],

      [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_RU]: [required],
      [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_EN]: [required],
      [SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]: [required],
      [SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]: [required],
      [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]: [required],
    };
  }
  return {
    [SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE]: [requiredArray],
    [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_RU]: [required],
    [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_EN]: [required],
    [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]: [required],
  };
};

export const sliderEditValidate = (values: SliderEditValue) =>
  validate(values, config(values));
