import { ChangeEvent } from 'react';

export enum CONFIRM_EMAIL_ACTION_TYPE {
  PENDING = 'pending',

  SEND_DELAY_OFF = 'sendDelayOff',

  SEND_SUCCESS = 'sendSuccess',
  SEND_ERROR = 'sendError',

  CONFIRM_SUCCESS = 'confirmSuccess',
  CONFIRM_ERROR = 'confirmError',
}

export type confirmEmailStateType = {
  pending: boolean;
  delay: boolean;
  sendSuccess: boolean;
  sendError?: string;

  confirmSuccess: boolean;
  confirmError?: string;
};

export type confirmEmailActionType = {
  type: CONFIRM_EMAIL_ACTION_TYPE;
  error?: string;
  data?: any;
};

export type ConfirmEmailComponentProps = {
  state: confirmEmailStateType;
  email: string;
  count: number;
  onSendCode: () => void;
  onConfirmEmail: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
