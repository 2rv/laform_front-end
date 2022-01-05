import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Dispatch, useEffect, useReducer } from 'react';
import { redirect } from 'src/main/navigation';
import { httpRequest } from 'src/main/http';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { ButtonSecondary } from 'src/lib/element/button';
import { LOGIN_ROUTE_PATH } from '../auth-login';

enum NOTIFICATION_ACTION_TYPE {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
  INIT = 'init',
}
type NotificationdStateType = {
  pending: boolean;
  error: boolean;
  checked: boolean;
};
type NotificationdActionType = {
  type: NOTIFICATION_ACTION_TYPE;
  error?: string;
  data?: boolean;
};
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
function getSubscripteStatus() {
  return async (dispatch: Dispatch<NotificationdActionType>) => {
    dispatch({
      type: NOTIFICATION_ACTION_TYPE.PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: 'user/subscribe-status',
      });
      dispatch({
        type: NOTIFICATION_ACTION_TYPE.INIT,
        data: response.data,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: NOTIFICATION_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
function changeSubscribeStatus(checked: boolean) {
  return async (dispatch: Dispatch<NotificationdActionType>) => {
    dispatch({
      type: NOTIFICATION_ACTION_TYPE.PENDING,
    });

    try {
      await httpRequest({
        method: 'PATCH',
        url: 'user/subscribe-update',
        data: { notificationEmail: !checked },
      });

      dispatch({
        type: NOTIFICATION_ACTION_TYPE.SUCCESS,
        data: !checked,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: NOTIFICATION_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function Notification() {
  const [state, setState] = useReducer(NotificationReducer, initialState);
  const isAuth = useSelector((state: any) => state[AUTH_STORE_NAME].logged);
  useEffect(() => {
    if (isAuth) {
      getSubscripteStatus()(setState);
    }
  }, []);
  const onChange = () => {
    if (!isAuth) return redirect(LOGIN_ROUTE_PATH);
    if (!state.pending) {
      changeSubscribeStatus(state.checked)(setState);
    }
  };
  return (
    <Container>
      <div>
        <Title tid="NOTIFICATION.PRE_CTA" />
        <br />
        <BoldTitle tid="NOTIFICATION.CTA" />
      </div>
      <ButtonSecondary
        tid={
          state.checked
            ? 'NOTIFICATION.BUTTON_TEXT_UNSUBSCRIBE'
            : 'NOTIFICATION.BUTTON_TEXT_SUBSCRIBE'
        }
        onClick={onChange}
        disabled={state.pending || state.error}
      />
    </Container>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  line-height: 1.5;
  @media screen and (max-width: 1070px) {
    font-size: ${THEME_SIZE.FONT.MEDIUM};
  }
`;
const BoldTitle = styled(Title)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 270px;
  width: 100%;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    order: 2;
  }
`;
