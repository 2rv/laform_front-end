import { ChangeEvent } from 'react';

export enum RECOVERY_ACCOUNT_ACTION_TYPE {
  PENDING = 'pending',
  DELAY_OFF = 'delayOff',
  SUCCESS = 'success',
  ERROR = 'error',
}
export type recoveryAccountStateType = {
  pending: boolean;
  delay: boolean;
  success: boolean;
  error?: string;
};
export type recoveryAccountActionType = {
  type: RECOVERY_ACCOUNT_ACTION_TYPE;
  error?: string;
};
export type recoveryAccountComponentProps = {
  state: recoveryAccountStateType;
  count: number;
  onSendCode: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
