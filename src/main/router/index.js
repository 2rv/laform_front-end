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
  userOrdersRouter,
  USER_ORDERS_ROUTE_PATH,
} from '../../core/user-orders';
import { userOrderRouter, USER_ORDER_ROUTE_PATH } from '../../core/user-order';
import { faqRouter, FAQ_ROUTE_PATH } from '../../core/faq';
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
import {
  orderNumberRouter,
  ORDER_NUMBER_ROUTE_PATH,
} from '../../core/order-number';
import {
  sliderEditRouter,
  SLIDER_EDIT_ROUTE_PATH,
} from '../../core/slider-edit';
import {
  sliderListRouter,
  SLIDER_LIST_ROUTE_PATH,
} from '../../core/slider-list';
import { promocodesRouter, PROMOCODES_ROUTE_PATH } from '../../core/promocodes';
import {
  AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH,
  authVerificateEmailRecoveryAccountRouter,
} from '../../core/auth-verificate-email-recovery-account';
import {
  createMasterClassRouter,
  CREATE_MASTER_CLASS_ROUTE_PATH,
} from '../../core/master-class-create';
import {
  createSewingGoodsRouter,
  CREATE_SEWING_GOODS_ROUTE_PATH,
} from '../../core/sewing-goods-create';
import {
  createArticleRouter,
  CREATE_ARTICLE_ROUTE_PATH,
} from '../../core/article-create';
import {
  createNotificationRouter,
  CREATE_NOTIFICATION_ROUTE_PATH,
} from '../../core/create-notification';
import {
  masterClassPageStore,
  MASTER_CLASS_PAGE_ROUTE_PATH,
} from '../../core/master-class-page';
import { usersStore, USERS_ROUTE_PATH } from '../../core/users';
import { allLikesRouter, ALL_LIKES_ROUTE_PATH } from '../../core/likes';
import { aboutRouter, ABOUT_ROUTE_PATH } from '../../core/about';
import {
  deliveryPricePageRouter,
  DELIVERY_PRICE_PAGE_ROUTE_PATH,
} from '../../core/delivery-price-page';
import {
  unsubscribeNotificationRouter,
  UNSUBSCRIBE_NOTIFICATION_ROUTE_PATH,
} from '../../core/unsubscribe-notification';
import {
  createPatternRouter,
  CREATE_PATTERN_ROUTE_PATH,
} from '../../core/pattern-create';
import {
  allProductsRouter,
  ALL_PRODUCTS_ROUTE_PATH,
} from '../../core/all-products';
import {
  legalInformationRouter,
  LEGAL_INFORMATION_ROUTE_PATH,
} from '../../core/legal-information';
import {
  privacyPolicyRouter,
  PRIVACY_POLICY_ROUTE_PATH,
} from '../../core/privacy-policy';
import {
  termsOfUseRouter,
  TERMS_OF_USE_ROUTE_PATH,
} from '../../core/terms-of-use';
import { feedbackRouter, FEEDBACK_ROUTE_PATH } from '../../core/feedback';
import {
  recentCommentsRouter,
  RECENT_COMMENTS_ROUTE_PATH,
} from '../../core/recent-comments';
import { statisticsRouter, STATISTICS_ROUTE_PATH } from '../../core/statistics';
import {
  productSelectionsRouter,
  PRODUCT_SELECTIONS_ROUTE_PATH,
} from '../../core/product-selections';

export const routes = {
  [PRODUCT_SELECTIONS_ROUTE_PATH]: productSelectionsRouter,
  [RECENT_COMMENTS_ROUTE_PATH]: recentCommentsRouter,
  [STATISTICS_ROUTE_PATH]: statisticsRouter,
  [LEGAL_INFORMATION_ROUTE_PATH]: legalInformationRouter,
  [PRIVACY_POLICY_ROUTE_PATH]: privacyPolicyRouter,
  [TERMS_OF_USE_ROUTE_PATH]: termsOfUseRouter,
  [FEEDBACK_ROUTE_PATH]: feedbackRouter,
  [CREATE_PATTERN_ROUTE_PATH]: createPatternRouter,
  [MASTER_CLASS_PAGE_ROUTE_PATH]: masterClassPageStore,
  [CREATE_ARTICLE_ROUTE_PATH]: createArticleRouter,
  [CREATE_SEWING_GOODS_ROUTE_PATH]: createSewingGoodsRouter,
  [CREATE_MASTER_CLASS_ROUTE_PATH]: createMasterClassRouter,
  [AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH]:
    authVerificateEmailRecoveryAccountRouter,
  [PATTERNS_PAGE_ROUTE_PATH]: patternsPageRouter,
  [SEWING_GOODS_PRODUCT_ROUTE_PATH]: sewingGoodsProductRouter,
  [SEWING_GOODS_ROUTE_PATH]: sewingGoodsRouter,
  [SEWING_GOODS_PAGE_ROUTE_PATH]: sewingGoodsPageRouter,
  [MASTER_CLASSES_ROUTE_PATH]: masterClassesRouter,
  [MASTER_CLASS_PRODUCT_ROUTE_PATH]: masterClassProductRouter,
  [PATTERNS_ROUTE_PATH]: patternsRouter,
  [PATTERNS_PRODUCT_ROUTE_PATH]: patternsProductRouter,
  [ARTICLES_ROUTE_PATH]: articlesRouter,
  [HOME_ROUTE_PATH]: homeRouter,
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [LOGIN_ROUTE_PATH]: loginRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: authRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: authChangePasswordRouter,
  [AUTH_VERIFICATE_EMAIL_ROUTE_PATH]: authVerificateEmailRouter,
  [AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH]: authVerificateEmailConfirmRouter,
  [SETTINGS_ROUTE_PATH]: settingsRouter,
  [ORDERS_ROUTE_PATH]: ordersRouter,
  [USER_ORDERS_ROUTE_PATH]: userOrdersRouter,
  [USER_ORDER_ROUTE_PATH]: userOrderRouter,
  [FAQ_ROUTE_PATH]: faqRouter,
  [BASKET_ROUTE_PATH]: basketRouter,
  [ABOUT_ACCOUNT_ROUTE_PATH]: aboutAccountRouter,
  [ORDER_NUMBER_ROUTE_PATH]: orderNumberRouter,
  [SLIDER_EDIT_ROUTE_PATH]: sliderEditRouter,
  [SLIDER_LIST_ROUTE_PATH]: sliderListRouter,
  [PROMOCODES_ROUTE_PATH]: promocodesRouter,
  [CREATE_NOTIFICATION_ROUTE_PATH]: createNotificationRouter,
  [USERS_ROUTE_PATH]: usersStore,
  [ALL_LIKES_ROUTE_PATH]: allLikesRouter,
  [ABOUT_ROUTE_PATH]: aboutRouter,
  [DELIVERY_PRICE_PAGE_ROUTE_PATH]: deliveryPricePageRouter,
  [UNSUBSCRIBE_NOTIFICATION_ROUTE_PATH]: unsubscribeNotificationRouter,
  [ALL_PRODUCTS_ROUTE_PATH]: allProductsRouter,
};

export const Router = routesInit(routes);
