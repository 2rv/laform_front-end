import { homeRouter, HOME_ROUTE_PATH } from '../../core/home';
import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { loginRouter, LOGIN_ROUTE_PATH } from '../../core/login';
import {
  authRecoveryAccountRouter,
  AUTH_RECOVERY_ACCOUNT_ROUTE_PATH,
} from '../../core/auth-recovery-account';
import {
  authChangePasswordRouter,
  AUTH_CHANGE_PASSWORD_ROUTE_PATH,
} from '../../core/auth-change-password';
import {
  authVerificateEmailRouter,
  AUTH_VERIFICATE_EMAIL_ROUTE_PATH,
} from '../../core/auth-verificate-email';
import {
  settingsChangePasswordRouter,
  SETTINGS_CHANGE_PASSWORD_ROUTE_PATH,
} from '../../core/settings-change-password';

import { routesInit } from './router.core';

export const routes = {
  [HOME_ROUTE_PATH]: homeRouter,
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [LOGIN_ROUTE_PATH]: loginRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: authRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: authChangePasswordRouter,
  [AUTH_VERIFICATE_EMAIL_ROUTE_PATH]: authVerificateEmailRouter,
  [SETTINGS_CHANGE_PASSWORD_ROUTE_PATH]: settingsChangePasswordRouter,
};

export const Router = routesInit(routes);
