import { routesInit } from './router.core';
import { homeRouter, HOME_ROUTE_PATH } from '../../core/home';
import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { loginRouter, LOGIN_ROUTE_PATH } from '../../core/login';
import { patternsRouter, PATTERNS_ROUTE_PATH } from '../../core/patterns';
import {
  masterClassesRouter,
  MASTER_CLASSES_ROUTE_PATH,
} from '../../core/master-classes';
import {
  masterClassRouter,
  MASTER_CLASS_ROUTE_PATH,
} from '../../core/master-class';
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
import { ordersRouter, ORDERS_ROUTE_PATH } from '../../core/orders';
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
import { myLikesRouter, MY_LIKES_ROUTE_PATH } from '../../core/my-likes';
import { faqPageRouter, FAQ_PAGE_ROUTE_PATH } from '../../core/faq-page';
import {
  editCompilationRouter,
  EDIT_COMPILATION_ROUTE_PATH,
} from '../../core/edit-compilation';
import {
  createProductRouter,
  CREATE_PRODUCT_ROUTE_PATH,
} from '../../core/create-product';
import {
  createArticleRouter,
  CREATE_ARTICLE_ROUTE_PATH,
} from '../../core/create-article';
import {
  compilationRouter,
  COMPILATION_ROUTE_PATH,
} from '../../core/compilation';
import { basketRouter, BASKET_ROUTE_PATH } from '../../core/basket';
import {
  aboutAccountRouter,
  ABOUT_ACCOUNT_ROUTE_PATH,
} from '../../core/about-account';
import {
  masterClassProductRouter,
  MASTER_CLASS_PRODUCT_ROUTE_PATH,
} from '../../core/master-class-product';
import {
  sewingGoodsProductRouter,
  SEWING_GOODS_PRODUCT_ROUTE_PATH,
} from '../../core/sewing-goods-product';
import {
  patternsProductRouter,
  PATTERNS_PRODUCT_ROUTE_PATH,
} from '../../core/patterns-product';
import {
  sewingGoodsPageRouter,
  SEWING_GOODS_PAGE_ROUTE_PATH,
} from '../../core/sewing-goods-page';
import {
  patternsPageRouter,
  PATTERNS_PAGE_ROUTE_PATH,
} from '../../core/patterns-page';

export const routes = {
  [HOME_ROUTE_PATH]: homeRouter,
  [PATTERNS_ROUTE_PATH]: patternsRouter,
  [MASTER_CLASSES_ROUTE_PATH]: masterClassesRouter,
  [MASTER_CLASS_ROUTE_PATH]: masterClassRouter,
  [PATTERNS_PAGE_ROUTE_PATH]: patternsPageRouter,
  [SEWING_GOODS_PRODUCT_ROUTE_PATH]: sewingGoodsProductRouter,
  [SEWING_GOODS_ROUTE_PATH]: sewingGoodsRouter,
  [SEWING_GOODS_PAGE_ROUTE_PATH]: sewingGoodsPageRouter,
  [MASTER_CLASSES_ROUTE_PATH]: masterClassesRouter,
  [MASTER_CLASS_PRODUCT_ROUTE_PATH]: masterClassProductRouter,
  [MY_MASTER_CLASSES_ROUTE_PATH]: myMasterClassesRouter,
  [PATTERNS_ROUTE_PATH]: patternsRouter,
  [PATTERNS_PRODUCT_ROUTE_PATH]: patternsProductRouter,
  [MY_PATTERNS_ROUTE_PATH]: myPatternsRouter,
  [ARTICLES_ROUTE_PATH]: articlesRouter,
  [CREATE_ARTICLE_ROUTE_PATH]: createArticleRouter,
  [CREATE_PRODUCT_ROUTE_PATH]: createProductRouter,
  [HOME_ROUTE_PATH]: homeRouter,
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [LOGIN_ROUTE_PATH]: loginRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: authRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: authChangePasswordRouter,
  [AUTH_VERIFICATE_EMAIL_ROUTE_PATH]: authVerificateEmailRouter,
  [AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH]: authVerificateEmailConfirmRouter,
  [SETTINGS_ROUTE_PATH]: settingsRouter,
  [ORDERS_ROUTE_PATH]: ordersRouter,
  [MY_PURCHASES_ROUTE_PATH]: myPurchasesRouter,
  [MY_LIKES_ROUTE_PATH]: myLikesRouter,
  [FAQ_PAGE_ROUTE_PATH]: faqPageRouter,
  [EDIT_COMPILATION_ROUTE_PATH]: editCompilationRouter,
  [COMPILATION_ROUTE_PATH]: compilationRouter,
  [BASKET_ROUTE_PATH]: basketRouter,
  [ABOUT_ACCOUNT_ROUTE_PATH]: aboutAccountRouter,
};

export const Router = routesInit(routes);
