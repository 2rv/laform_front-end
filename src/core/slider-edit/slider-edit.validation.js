import { validate } from '../../main/validate/validate.core';
import { required } from '../../main/validate/validate.service';

const config = {
  fieldTextName: [required],
  fieldButtonTextName: [required],
};

export const sliderEditFormValidation = (values) => validate(values, config);
