import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { SignupComponent } from './signup.component';
import { signupValidate } from './signup.validation';
import { signupSubmitAction } from './signup.action';
import {
  SIGNUP_FIELD_NAME,
  SignupStateType,
  SignupActionType,
  SIGNUP_ACTION_TYPE,
  SignupValues,
} from './signup.type';

const initialState = {
  pending: false,
  success: false,
  error: '',
};
function SignupReducer(state: SignupStateType, action: SignupActionType) {
  switch (action.type) {
    case SIGNUP_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        error: '',
      };
    case SIGNUP_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
      };
    case SIGNUP_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function SignupContainer() {
  const dispatch = useDispatch();
  const [state, setState] = useReducer(SignupReducer, initialState);
  const onSubmit = (values: SignupValues) => {
    signupSubmitAction(values)(dispatch, setState);
  };
  useSelector((state: any) => state[LANG_STORE_NAME]);

  const initialValues = {
    [SIGNUP_FIELD_NAME.LOGIN]: '',
    [SIGNUP_FIELD_NAME.EMAIL]: '',
    [SIGNUP_FIELD_NAME.PASSWORD]: '',
    [SIGNUP_FIELD_NAME.PASSWORD_REPEAT]: '',
  };

  return (
    <SignupComponent
      initialValues={initialValues}
      validate={signupValidate}
      onSubmit={onSubmit}
      state={state}
    />
  );
}
