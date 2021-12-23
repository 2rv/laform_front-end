export enum CHANGE_EMAIL_FIELD_NAME {
  OLD_EMAIL = 'oldEmail',
  NEW_EMAIL = 'newEmail',
  PASSWORD = 'password',
  CODE_OLD_EMAIL = 'codeOldEmail',
  CODE_NEW_EMAIL = 'codeNewEmail',
}

export type changeEmailValues = {
  [CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL]: string;
  [CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL]: string;
  [CHANGE_EMAIL_FIELD_NAME.PASSWORD]: string;
  [CHANGE_EMAIL_FIELD_NAME.CODE_OLD_EMAIL]: string;
  [CHANGE_EMAIL_FIELD_NAME.CODE_NEW_EMAIL]: string;
};

export enum CHANGE_EMAIL_ACTION_TYPE {
  PENDING = 'PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',
  UPDATE_START = 'UPDATE_START',
  UPDATE_ERROR = 'UPDATE_ERROR',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  DELAY_OFF = 'DELAY_OFF',
}

export type changeEmailStateType = {
  email?: string;

  pending: boolean;
  delay: boolean;
  updateStarted: boolean;

  getError?: string;
  changeSuccess: boolean;

  updateSuccess: boolean;
  updateError?: string;
};
export type changeEmailActionType = {
  type: CHANGE_EMAIL_ACTION_TYPE;
  error?: string;
  data?: string;
};

export type ChangeEmailComponentProps = {
  state: changeEmailStateType;
  onSubmit: (values: changeEmailValues) => void;
  onUpdate: (values: changeEmailValues) => void;
  validation: (values: changeEmailValues) => void;
  initialValues: changeEmailValues;
  count: number;
  emailConfirmed: boolean;
};
