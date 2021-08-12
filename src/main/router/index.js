import { homeRouter, HOME_ROUTE_PATH } from '../../core/home';
import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { loginRouter, LOGIN_ROUTE_PATH } from '../../core/login';
import { patternsRouter, PATTERNS_ROUTE_PATH } from '../../core/patterns';
import {
  masterClassesRouter,
  MASTER_CLASSES_ROUTE_PATH,
} from '../../core/master-classes';
import {
  sewingGoodsRouter,
  SEWING_GOODS_ROUTE_PATH,
} from '../../core/sewing-goods';
import { articlesRouter, ARTICLES_ROUTE_PATH } from '../../core/articles';
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
import { settingsRouter, SETTINGS_ROUTE_PATH } from '../../core/settings';
import {
  productRouter,
  PRODUCT_ROUTE_PATH,
} from '../../core/product';
import {
  ordersRouter,
  ORDERS_ROUTE_PATH,
} from '../../core/orders';
import {
  myPurchasesRouter,
  MY_PURCHASES_ROUTE_PATH,
} from '../../core/my-purchases';
import {
  myPatternsRouter,
  MY_PATTERNS_ROUTE_PATH,
} from '../../core/my-patterns';
import {
  myMasterClassesRouter,
  MY_MASTER_CLASSES_ROUTE_PATH,
} from '../../core/my-master-classes';
import {
  myLikesRouter,
  MY_LIKES_ROUTE_PATH,
} from '../../core/my-likes';
import {
  faqPageRouter,
  FAQ_PAGE_ROUTE_PATH,
} from '../../core/faq-page';

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
  [AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH]: authVerificateEmailConfirmRouter,
  [SETTINGS_ROUTE_PATH]: settingsRouter,
  [PRODUCT_ROUTE_PATH]: productRouter,
  [ORDERS_ROUTE_PATH]: ordersRouter,
  [MY_PURCHASES_ROUTE_PATH]: myPurchasesRouter,
  [MY_PATTERNS_ROUTE_PATH]: myPatternsRouter,
  [MY_MASTER_CLASSES_ROUTE_PATH]: myMasterClassesRouter,
  [MY_LIKES_ROUTE_PATH]: myLikesRouter,
  [FAQ_PAGE_ROUTE_PATH]: faqPageRouter,
};

export const Router = routesInit(routes);
