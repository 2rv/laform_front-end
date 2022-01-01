import { FormikConfig } from 'formik';

export enum LOGIN_FIELD_NAME {
  LOGIN = 'login',
  PASSWORD = 'password',
}
export enum LOGIN_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type LoginValues = {
  [LOGIN_FIELD_NAME.LOGIN]: string;
  [LOGIN_FIELD_NAME.PASSWORD]: string;
};
export interface LoginComponentProps extends FormikConfig<LoginValues> {
  state: LoginStateType;
}
export type LoginStateType = {
  pending: boolean;
  success: boolean;
  error?: string;
};
export type LoginActionType = {
  type: LOGIN_ACTION_TYPE;
  error?: string;
};
