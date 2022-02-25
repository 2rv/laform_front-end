import { validate } from 'src/main/validate/validate.core';
import { email, required } from 'src/main/validate/validate.service';
import { FeedbackValues, FEEDBACK_FIELD_NAME } from './feedback.type';

const config = {
  [FEEDBACK_FIELD_NAME.DESCRIPTION]: [required],
  [FEEDBACK_FIELD_NAME.EMAIL]: [email],
};

export const feedbackValidate = (values: FeedbackValues) =>
  validate(values, config);
