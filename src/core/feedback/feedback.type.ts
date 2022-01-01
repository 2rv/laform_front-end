import { FormikConfig } from 'formik';

export enum FEEDBACK_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export enum FEEDBACK_FIELD_NAME {
  DESCRIPTION = 'description',
}
export type FeedbackStateType = {
  pending: boolean;
  success: boolean;
  error?: string;
};
export type FeedbackActionType = {
  type: FEEDBACK_ACTION_TYPE;
  error?: string;
};

export type FeedbackValues = {
  [FEEDBACK_FIELD_NAME.DESCRIPTION]: string;
};
export interface FeedbackComponentProps extends FormikConfig<FeedbackValues> {
  state: FeedbackStateType;
}
