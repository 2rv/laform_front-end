import { useSelector } from 'react-redux';
import { useEffect, useReducer } from 'react';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { ChangeNotificationComponent } from './change-notification.component';
import {
  ChangeNotificationdActionType,
  ChangeNotificationdStateType,
  CHANGE_NOTIFICATION_ACTION_TYPE,
} from './change-notification.type';
import {
  changeSubscribeStatus,
  getSubscripteStatus,
} from './change-notification.action';

const initialState = {
  pending: false,
  success: false,
  error: '',
  checked: false,
};

function changeNotificationReducer(
  state: ChangeNotificationdStateType,
  action: ChangeNotificationdActionType,
) {
  switch (action.type) {
    case CHANGE_NOTIFICATION_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        error: '',
      };
    case CHANGE_NOTIFICATION_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        checked: !!action.data,
      };
    case CHANGE_NOTIFICATION_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case CHANGE_NOTIFICATION_ACTION_TYPE.INIT:
      return {
        ...state,
        pending: false,
        checked: !!action.data,
      };
    default:
      return state;
  }
}

export function ChangeNotificationContainer() {
  const [state, setState] = useReducer(changeNotificationReducer, initialState);
  const isAuth = useSelector((state: any) => state[AUTH_STORE_NAME].logged);

  useEffect(() => {
    if (isAuth) {
      getSubscripteStatus()(setState);
    }
  }, []);

  const onChange = () => {
    if (!state.pending) {
      changeSubscribeStatus(state.checked)(setState);
    }
  };

  return <ChangeNotificationComponent onChange={onChange} state={state} />;
}
