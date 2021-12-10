import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';
import { getQuery } from 'src/main/navigation';
import { AuthChangeEmailComponent } from './auth-change-email.component';
import { AUTH_CHANGE_EMAIL_STORE_NAME } from './auth-change-email.constant';
import { confirmChangeEmailAction } from './auth-change-email.action';

export function AuthChangeEmailContainer() {
  const code = getQuery('code');
  const dispatch = useDispatch();
  const { state } = useSelector((state) => ({
    state: state[AUTH_CHANGE_EMAIL_STORE_NAME].changeEmail,
  }));
  useEffect(() => {
    if (code) {
      dispatch(confirmChangeEmailAction(code));
    }
  }, []);

  return (
    <AuthChangeEmailComponent
      pending={isRequestPending(state)}
      error={isRequestError(state)}
      success={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
    />
  );
}
