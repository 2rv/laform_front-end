import { validate } from '../../main/validate/validate.core';
import { required } from '../../main/validate/validate.service';

import { SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';

const config = {
  [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT ]: [required],
  [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT]: [required],
  [SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]: [required],
};

export const sliderEditFormValidation = (values) => validate(values, config);
