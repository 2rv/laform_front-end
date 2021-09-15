import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { EMAIL_CONFIRMED_STORE_NAME } from './email-confirmed.constant';
import { EmailConfirmedComponent } from './email-confirmed.component';
import { emailConfirmCheckConfirmed } from './email-confirmed.action';

export function EmailConfirmedContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[EMAIL_CONFIRMED_STORE_NAME]);
  const emailConfirmGetConfirmedStatus = () => {
    dispatch(emailConfirmCheckConfirmed());
  };

  return (
    <EmailConfirmedComponent
      isPending={isRequestPending(state.emailConfirmed)}
      errorMessage={getRequestErrorMessage(state.emailConfirmed)}
      isSuccess={isRequestSuccess(state.emailConfirmed)}
      isError={isRequestError(state.emailConfirmed)}
      onClick={emailConfirmGetConfirmedStatus}
    />
  );
}
