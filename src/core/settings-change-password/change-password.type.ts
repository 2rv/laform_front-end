export enum CHANGE_PASSWORD_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export enum CHANGE_PASSWORD_FIELD_NAME {
  OLD_PASSWORD = 'oldPassword',
  PASSWORD = 'password',
  PASSWORD_REPEAT = 'passwordRepeat',
}
export type ChangePasswordValues = {
  [CHANGE_PASSWORD_FIELD_NAME.OLD_PASSWORD]: string;
  [CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: string;
  [CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: string;
};
export type ChangePasswordStateType = {
  pending: boolean;
  success: boolean;
  error?: string;
};
export type ChangePasswordActionType = {
  type: CHANGE_PASSWORD_ACTION_TYPE;
  error?: string;
};
export type ChangePasswordComponentProps = {
  initialValues: ChangePasswordValues;
  validation: (values: ChangePasswordValues) => {};
  onSubmit: (values: ChangePasswordValues) => void;
  state: ChangePasswordStateType;
};
