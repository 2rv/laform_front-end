import { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from 'src/lib/common/hooks';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { validation, validationConfirm } from './change-email.validation';
import { ChangeEmailComponent } from './change-email.component';
import {
  CHANGE_EMAIL_FIELD_NAME,
  CHANGE_EMAIL_ACTION_TYPE,
  changeEmailStateType,
  changeEmailActionType,
  changeEmailValues,
} from './change-email.type';
import {
  getEmailAction,
  updateEmailAction,
  updateEmailConfirmAction,
} from './change-email.action';

const initialState = {
  email: '',

  pending: false,
  delay: false,
  updateStarted: false,

  getError: '',

  changeSuccess: false,
  changeError: '',

  updateSuccess: false,
};

function changemEmailReducer(
  state: changeEmailStateType,
  action: changeEmailActionType,
) {
  switch (action.type) {
    case CHANGE_EMAIL_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        changeSuccess: false,
        getError: '',
        updateError: '',
      };

    case CHANGE_EMAIL_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        pending: false,
        email: action.data,
      };
    case CHANGE_EMAIL_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        pending: false,
        getError: action.error,
      };

    case CHANGE_EMAIL_ACTION_TYPE.UPDATE_START:
      return {
        ...state,
        pending: false,
        delay: true,
        changeSuccess: true,
        updateStarted: true,
      };

    case CHANGE_EMAIL_ACTION_TYPE.UPDATE_SUCCESS:
      return {
        ...state,
        pending: false,
        updateSuccess: true,
        updateStarted: false,
      };
    case CHANGE_EMAIL_ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        pending: false,
        delay: true,
        updateError: action.error,
      };

    case CHANGE_EMAIL_ACTION_TYPE.DELAY_OFF:
      return {
        ...state,
        delay: false,
      };
    default:
      return state;
  }
}

export function ChangeEmailContainer() {
  const dispatch = useDispatch();
  const emailConfirmed = useSelector(
    (state: any) => state[AUTH_STORE_NAME]?.user?.emailConfirmed,
  );
  const [state, setState] = useReducer(changemEmailReducer, initialState);

  useEffect(() => {
    getEmailAction()(setState);
  }, []);

  const [count, startInterval] = useInterval(() => {
    setState({ type: CHANGE_EMAIL_ACTION_TYPE.DELAY_OFF });
  }, 60);

  const onSubmit = (values: changeEmailValues) => {
    updateEmailAction(values)(setState);
    startInterval();
  };

  const onUpate = (values: changeEmailValues) => {
    if (!emailConfirmed) values.codeOldEmail = values.codeNewEmail;
    updateEmailConfirmAction(values)(setState, dispatch);
  };

  const initialValues = () => ({
    [CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL]: state.email || '',
    [CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL]: '',
    [CHANGE_EMAIL_FIELD_NAME.PASSWORD]: '',
    [CHANGE_EMAIL_FIELD_NAME.CODE_OLD_EMAIL]: '',
    [CHANGE_EMAIL_FIELD_NAME.CODE_NEW_EMAIL]: '',
  });

  return (
    <ChangeEmailComponent
      initialValues={initialValues()}
      validation={state.updateStarted ? validationConfirm : validation}
      onSubmit={onSubmit}
      onUpdate={onUpate}
      state={state}
      count={count}
      emailConfirmed={emailConfirmed}
    />
  );
}
