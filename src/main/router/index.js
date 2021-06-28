import { homeRouter, HOME_ROUTE_PATH } from '../../core/home';
import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { loginRouter, LOGIN_ROUTE_PATH } from '../../core/login';
import { patternsRouter, PATTERNS_ROUTE_PATH } from '../../core/patterns';
import {
  publicationRouter,
  PUBLICATION_ROUTE_PATH,
} from '../../core/publication';
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
  authVerificateEmailConfirmRouter,
  AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH,
} from '../../core/auth-verificate-email-confirm';
import {
  settingsChangePasswordRouter,
  SETTINGS_CHANGE_PASSWORD_ROUTE_PATH,
} from '../../core/settings-change-password';
import {
  settingsChangeDeliveryInfoRouter,
  SETTINGS_CHANGE_DELIVERY_INFO_ROUTE_PATH,
} from '../../core/settings-change-delivery-info';

import { routesInit } from './router.core';

export const routes = {
  [HOME_ROUTE_PATH]: homeRouter,
  [PATTERNS_ROUTE_PATH]: patternsRouter,
  [PUBLICATION_ROUTE_PATH]: publicationRouter,
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [LOGIN_ROUTE_PATH]: loginRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: authRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: authChangePasswordRouter,
  [AUTH_VERIFICATE_EMAIL_ROUTE_PATH]: authVerificateEmailRouter,
  [SETTINGS_CHANGE_PASSWORD_ROUTE_PATH]: settingsChangePasswordRouter,
  [AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH]: authVerificateEmailConfirmRouter,
  [SETTINGS_CHANGE_DELIVERY_INFO_ROUTE_PATH]: settingsChangeDeliveryInfoRouter,
};

export const Router = routesInit(routes);
