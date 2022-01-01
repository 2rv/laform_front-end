import { FormikConfig } from 'formik';

export enum SIGNUP_FIELD_NAME {
  LOGIN = 'login',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_REPEAT = 'passwordRepeat',
}
export enum SIGNUP_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type SignupValues = {
  [SIGNUP_FIELD_NAME.LOGIN]: string;
  [SIGNUP_FIELD_NAME.EMAIL]: string;
  [SIGNUP_FIELD_NAME.PASSWORD]: string;
  [SIGNUP_FIELD_NAME.PASSWORD_REPEAT]: string;
};
export interface SignupComponentProps extends FormikConfig<SignupValues> {
  state: SignupStateType;
}
export type SignupStateType = {
  pending: boolean;
  success: boolean;
  error?: string;
};
export type SignupActionType = {
  type: SIGNUP_ACTION_TYPE;
  error?: string;
};
