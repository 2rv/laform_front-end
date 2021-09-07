import { validate } from '../../main/validate/validate.core';
import { required } from '../../main/validate/validate.service';
import { CREATE_NOTIFICATION_FIELD_NAME } from './create-notification.type';

const config = {
  [CREATE_NOTIFICATION_FIELD_NAME.SUBJECT]: [required],
};

export const validation = (values) => validate(values, config);
