import { validate } from '../../main/validate/validate.core';
import { email, required } from '../../main/validate/validate.service';
import {
  NOTIFICATION_FIELD_NAME,
  NOTIFICATION_DATA_KEY,
  NOTIFICATION_DATA_NAME,
} from './notification.type';

const config = {
  [NOTIFICATION_FIELD_NAME.EMAIL]: [required, email],
};

export const notificationFormValidation = (values) => validate(values, config);
