import { combineReducers } from 'redux';

import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';

import { footerStore, FOOTER_STORE_NAME } from '../../core/footer';
import { signupStore, SIGNUP_STORE_NAME } from '../../core/signup';
import { loginStore, LOGIN_STORE_NAME } from '../../core/login';
import {
  AUTH_RECOVERY_ACCOUNT_STORE_NAME,
  authRecoveryAccountStore,
} from '../../core/auth-recovery-account';
import {
  authChangePasswordStore,
  AUTH_CHANGE_PASSWORD_STORE_NAME,
} from '../../core/auth-change-password';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [FOOTER_STORE_NAME]: footerStore,
  [SIGNUP_STORE_NAME]: signupStore,
  [LOGIN_STORE_NAME]: loginStore,
  [AUTH_RECOVERY_ACCOUNT_STORE_NAME]: authRecoveryAccountStore,
  [AUTH_CHANGE_PASSWORD_STORE_NAME]: authChangePasswordStore,
});

export { initStore } from './store.core';
