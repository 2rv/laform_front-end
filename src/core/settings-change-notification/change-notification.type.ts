export enum CHANGE_NOTIFICATION_ACTION_TYPE {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
  INIT = 'init',
}

export type ChangeNotificationdStateType = {
  pending: boolean;
  success: boolean;
  error?: string;
  checked: boolean;
};

export type ChangeNotificationdActionType = {
  type: CHANGE_NOTIFICATION_ACTION_TYPE;
  error?: string;
  data?: boolean;
};
export type ChangeNotificationComponentProps = {
  state: ChangeNotificationdStateType;
  onChange: () => void;
};
