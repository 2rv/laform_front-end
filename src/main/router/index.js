import { homeRouter, HOME_ROUTE_PATH } from 'src/core/home';
import { signupRouter, SIGNUP_ROUTE_PATH } from 'src/core/signup';
import { loginRouter, LOGIN_ROUTE_PATH } from 'src/core/login';
import { patternsRouter, PATTERNS_ROUTE_PATH } from 'src/core/patterns';
import {
  masterClassesRouter,
  MASTER_CLASSES_ROUTE_PATH,
} from 'src/core/master-classes';
import {
  sewingGoodsRouter,
  SEWING_GOODS_ROUTE_PATH,
} from 'src/core/sewing-goods';
import { articlesRouter, ARTICLES_ROUTE_PATH } from 'src/core/articles';
import {
  authRecoveryAccountRouter,
  AUTH_RECOVERY_ACCOUNT_ROUTE_PATH,
} from 'src/core/auth-recovery-account';
import {
  authChangePasswordRouter,
  AUTH_CHANGE_PASSWORD_ROUTE_PATH,
} from 'src/core/auth-change-password';
import {
  authVerificateEmailRouter,
  AUTH_VERIFICATE_EMAIL_ROUTE_PATH,
} from 'src/core/auth-verificate-email';
import {
  authVerificateEmailConfirmRouter,
  AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH,
} from 'src/core/auth-verificate-email-confirm';
import {
  settingsChangePasswordRouter,
  SETTINGS_CHANGE_PASSWORD_ROUTE_PATH,
} from 'src/core/settings-change-password';
import {
  authVerificateEmailConfirmRouter,
  AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH,
} from '../../core/auth-verificate-email-confirm';
import {
  settingsChangeEmailRouter,
  SETTINGS_CHANGE_EMAIL_ROUTE_PATH,
} from '../../core/settings-change-email';
import {
  settingsChangeDeliveryInfoRouter,
  SETTINGS_CHANGE_DELIVERY_INFO_ROUTE_PATH,
} from 'src/core/settings-change-delivery-info';

import { routesInit } from './router.core';

export const routes = {
  [HOME_ROUTE_PATH]: homeRouter,
  [PATTERNS_ROUTE_PATH]: patternsRouter,
  [MASTER_CLASSES_ROUTE_PATH]: masterClassesRouter,
  [SEWING_GOODS_ROUTE_PATH]: sewingGoodsRouter,
  [ARTICLES_ROUTE_PATH]: articlesRouter,
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [LOGIN_ROUTE_PATH]: loginRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: authRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: authChangePasswordRouter,
  [AUTH_VERIFICATE_EMAIL_ROUTE_PATH]: authVerificateEmailRouter,
  [SETTINGS_CHANGE_PASSWORD_ROUTE_PATH]: settingsChangePasswordRouter,
  [AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH]: authVerificateEmailConfirmRouter,
  [SETTINGS_CHANGE_EMAIL_ROUTE_PATH]: settingsChangeEmailRouter,
  [SETTINGS_CHANGE_DELIVERY_INFO_ROUTE_PATH]: settingsChangeDeliveryInfoRouter,
};

export const Router = routesInit(routes);
