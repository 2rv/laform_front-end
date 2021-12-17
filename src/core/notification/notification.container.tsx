import { useSelector } from 'react-redux';
import { useEffect, useReducer } from 'react';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { NotificationComponent } from './notification.component';
import {
  NotificationdActionType,
  NotificationdStateType,
  NOTIFICATION_ACTION_TYPE,
} from './notification.type';
import {
  changeSubscribeStatus,
  getSubscripteStatus,
} from './notification.action';
import { redirect } from 'src/main/navigation';
import { LOGIN_ROUTE_PATH } from '../auth-login';

const initialState = {
  pending: false,
  error: false,
  checked: false,
};

function NotificationReducer(
  state: NotificationdStateType,
  action: NotificationdActionType,
) {
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: false,
      };
    case NOTIFICATION_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        checked: !!action.data,
      };
    case NOTIFICATION_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    case NOTIFICATION_ACTION_TYPE.INIT:
      return {
        ...state,
        pending: false,
        checked: !!action.data,
      };
    default:
      return state;
  }
}

export function NotificationContainer() {
  const [state, setState] = useReducer(NotificationReducer, initialState);
  const isAuth = useSelector((state: any) => state[AUTH_STORE_NAME].logged);

  useEffect(() => {
    if (isAuth) {
      getSubscripteStatus()(setState);
    }
  }, []);

  const onChange = () => {
    if (!isAuth) redirect(LOGIN_ROUTE_PATH);
    if (!state.pending) {
      changeSubscribeStatus(state.checked)(setState);
    }
  };

  return <NotificationComponent onChange={onChange} state={state} />;
}
