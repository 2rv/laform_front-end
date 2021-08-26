import { validate } from '../../main/validate/validate.core';
import { required, url } from '../../main/validate/validate.service';

import { SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';

const config = (values) => {
  if (values.isButton) {
    return {
      [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT ]: [required],
      [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT]: [required],
      [SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]: [required, url],
    };
  }

  return {
    [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT ]: [required],
  };
};

export const sliderEditFormValidation = (values) => validate(values, config(values));
