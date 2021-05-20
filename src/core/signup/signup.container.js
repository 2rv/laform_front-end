import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { SIGNUP_FIELD_NAME, SIGNUP_FORM_FIELD_NAME } from './signup.type';
import { SIGNUP_STORE_NAME } from './signup.constant';
import { SignupComponent } from './signup.component';
import { signupFormValidation } from './signup.validation';
import { convertSignupFormData } from './signup.convert';
import { signupFormUploadData } from './signup.action';

export function SignupContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[SIGNUP_STORE_NAME]);

  const signupFormSendData = (values) => {
    const data = convertSignupFormData(values);

    dispatch(signupFormUploadData(data));
    console.log(data);
  };

  const signupFormGetInitialValue = () => ({
    [SIGNUP_FIELD_NAME.LOGIN]: '',
    [SIGNUP_FIELD_NAME.EMAIL]: '',
    [SIGNUP_FIELD_NAME.PASSWORD]: '',
    [SIGNUP_FIELD_NAME.PASSWORD_REPEAT]: '',
  });

  return (
    <SignupComponent
      isPending={isRequestPending(state.signupForm)}
      isSuccess={isRequestSuccess(state.signupForm)}
      isError={isRequestError(state.signupForm)}
      errorMessage={getRequestErrorMessage(state.signupForm)}
      initialValue={signupFormGetInitialValue()}
      validation={signupFormValidation}
      onSubmitForm={signupFormSendData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
    />
  );
}
