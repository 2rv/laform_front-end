export enum CHANGE_PASSWORD_FIELD_NAME {
  PASSWORD = 'password',
  PASSWORD_REPEAT = 'passwordRepeat',
}
export type ChangePasswordValues = {
  [CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: string;
  [CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: string;
};

export enum CHANGE_PASSWORD_ACTION_TYPE {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

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
