export enum NOTIFICATION_ACTION_TYPE {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
  INIT = 'init',
}

export type NotificationdStateType = {
  pending: boolean;
  error: boolean;
  checked: boolean;
};

export type NotificationdActionType = {
  type: NOTIFICATION_ACTION_TYPE;
  error?: string;
  data?: boolean;
};
export type NotificationComponentProps = {
  state: NotificationdStateType;
  onChange: () => void;
};
