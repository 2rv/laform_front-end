import { homeRouter, HOME_ROUTE_PATH } from '../../core/home';
import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { loginRouter, LOGIN_ROUTE_PATH } from '../../core/login';
import {
  authRecoveryAccountRouter,
  AUTH_RECOVERY_ACCOUNT_ROUTE_PATH,
} from '../../core/auth-recovery-account';
import {
  AUTH_CHANGE_PASSWORD_ROUTE_PATH,
  authChangePasswordRouter,
} from '../../core/auth-change-password';

import { routesInit } from './router.core';

export const routes = {
  [HOME_ROUTE_PATH]: homeRouter,
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [LOGIN_ROUTE_PATH]: loginRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: authRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: authChangePasswordRouter,
};

export const Router = routesInit(routes);
