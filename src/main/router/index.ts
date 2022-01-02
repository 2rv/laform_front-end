import { routesInit } from './router.core';
import { homeRouter, HOME_ROUTE_PATH } from '../../core/home';
import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/auth-signup';
import { loginRouter, LOGIN_ROUTE_PATH } from '../../core/auth-login';
import { patternsRouter, PATTERNS_ROUTE_PATH } from '../../core/patterns';
import {
  masterClassesRouter,
  MASTER_CLASSES_ROUTE_PATH,
} from '../../core/master-classes';
import {
  sewingGoodsRouter,
  SEWING_GOODS_ROUTE_PATH,
} from '../../core/sewing-goods';
import { postsRouter, POSTS_ROUTE_PATH } from '../../core/posts';
import {
  authRecoveryAccountRouter,
  AUTH_RECOVERY_ACCOUNT_ROUTE_PATH,
} from '../../core/auth-recovery-account';
import {
  authChangePasswordRouter,
  AUTH_CHANGE_PASSWORD_ROUTE_PATH,
} from '../../core/auth-change-password';
import { settingsRouter, SETTINGS_ROUTE_PATH } from '../../core/settings';
import { ordersRouter, ORDERS_ROUTE_PATH } from '../../core/orders';
import {
  userOrdersRouter,
  USER_ORDERS_ROUTE_PATH,
} from '../../core/user-orders';
import { userOrderRouter, USER_ORDER_ROUTE_PATH } from '../../core/user-order';
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
  masterClassCreateRouter,
  MASTER_CLASS_CREATE_ROUTE_PATH,
} from '../../core/master-class-create';
import {
  sewingGoodsCreateRouter,
  SEWING_GOODS_CREATE_ROUTE_PATH,
} from '../../core/sewing-goods-create';
import {
  postCreateRouter,
  POST_CREATE_ROUTE_PATH,
} from '../../core/post-create';
import {
  createNotificationRouter,
  CREATE_NOTIFICATION_ROUTE_PATH,
} from '../../core/create-notification';
import {
  masterClassPageRouter,
  MASTER_CLASS_PAGE_ROUTE_PATH,
} from '../../core/master-class-page';
import { usersRouter, USERS_ROUTE_PATH } from '../../core/users';
import {
  productsLikeRouter,
  PRODUCTS_LIKE_ROUTE_PATH,
} from '../../core/products-like';
import {
  patternCreateRouter,
  PATTERN_CREATE_ROUTE_PATH,
} from '../../core/pattern-create';
import {
  productsListRouter,
  PRODUCTS_LIST_ROUTE_PATH,
} from '../../core/products-list';
import { feedbackRouter, FEEDBACK_ROUTE_PATH } from '../../core/feedback';
import {
  recentCommentsRouter,
  RECENT_COMMENTS_ROUTE_PATH,
} from '../../core/recent-comments';
import { statisticsRouter, STATISTICS_ROUTE_PATH } from '../../core/statistics';
import {
  productsCompilationRouter,
  PRODUCTS_COMPILATION_ROUTE_PATH,
} from '../../core/products-compilation';
import {
  faqSizeRouter,
  FAQ_SIZE_ROUTE_PATH,
  faqDeliveryPaymentRouter,
  FAQ_DELIVERY_PAYMENT_ROUTE_PATH,
  faqLegalInformationRouter,
  FAQ_LEGAL_INFORMATION_ROUTE_PATH,
  faqPrivacyPolicyRouter,
  FAQ_PRIVACY_POLICY_ROUTE_PATH,
  faqTermsOfUseRouter,
  FAQ_TERMS_OF_USE_ROUTE_PATH,
  faqAboutUsRouter,
  FAQ_ABOUT_US_ROUTE_PATH,
  faqRouter,
  FAQ_ROUTE_PATH,
  faqHowPrintRouter,
  FAQ_HOW_PRINT_ROUTE_PATH,
  faqHowGlueRouter,
  FAQ_HOW_GLUE_ROUTE_PATH,
  faqLaformePatternsRouter,
  FAQ_LAFORME_PATTERNS_ROUTE_PATH,
  faqLaformeStudioRouter,
  FAQ_LAFORME_STUDIO_ROUTE_PATH,
} from '../../core/faq-article';
import {
  authConfirmEmailRouter,
  AUTH_CONFIRM_EMAIL_ROUTE_PATH,
} from '../../core/auth-confirm-email';
import { postPageRouter, POST_PAGE_ROUTE_PATH } from 'src/core/post-page';

export const routes = {
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [LOGIN_ROUTE_PATH]: loginRouter,
  [AUTH_CONFIRM_EMAIL_ROUTE_PATH]: authConfirmEmailRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: authRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: authChangePasswordRouter,
  [FAQ_ROUTE_PATH]: faqRouter,
  [FAQ_HOW_PRINT_ROUTE_PATH]: faqHowPrintRouter,
  [FAQ_HOW_GLUE_ROUTE_PATH]: faqHowGlueRouter,
  [FAQ_LAFORME_PATTERNS_ROUTE_PATH]: faqLaformePatternsRouter,
  [FAQ_LAFORME_STUDIO_ROUTE_PATH]: faqLaformeStudioRouter,
  [FAQ_SIZE_ROUTE_PATH]: faqSizeRouter,
  [FAQ_DELIVERY_PAYMENT_ROUTE_PATH]: faqDeliveryPaymentRouter,
  [FAQ_LEGAL_INFORMATION_ROUTE_PATH]: faqLegalInformationRouter,
  [FAQ_PRIVACY_POLICY_ROUTE_PATH]: faqPrivacyPolicyRouter,
  [FAQ_TERMS_OF_USE_ROUTE_PATH]: faqTermsOfUseRouter,
  [FAQ_ABOUT_US_ROUTE_PATH]: faqAboutUsRouter,
  [MASTER_CLASS_PAGE_ROUTE_PATH()]: masterClassPageRouter,
  [SEWING_GOODS_PRODUCT_ROUTE_PATH()]: sewingGoodsProductRouter,
  [SEWING_GOODS_PAGE_ROUTE_PATH()]: sewingGoodsPageRouter,
  [MASTER_CLASS_PRODUCT_ROUTE_PATH()]: masterClassProductRouter,
  [USER_ORDER_ROUTE_PATH()]: userOrderRouter,
  [ABOUT_ACCOUNT_ROUTE_PATH()]: aboutAccountRouter,
  [ORDER_NUMBER_ROUTE_PATH()]: orderNumberRouter,
  [SLIDER_EDIT_ROUTE_PATH()]: sliderEditRouter,
  [STATISTICS_ROUTE_PATH()]: statisticsRouter,
  [PRODUCTS_LIST_ROUTE_PATH()]: productsListRouter,
  [PRODUCTS_LIKE_ROUTE_PATH()]: productsLikeRouter,
  [PATTERNS_PAGE_ROUTE_PATH()]: patternsPageRouter,
  [PATTERNS_PRODUCT_ROUTE_PATH()]: patternsProductRouter,
  [PATTERNS_ROUTE_PATH()]: patternsRouter,
  [PATTERN_CREATE_ROUTE_PATH()]: patternCreateRouter,
  [POST_CREATE_ROUTE_PATH()]: postCreateRouter,
  [MASTER_CLASS_CREATE_ROUTE_PATH()]: masterClassCreateRouter,
  [SEWING_GOODS_CREATE_ROUTE_PATH()]: sewingGoodsCreateRouter,
  [POST_PAGE_ROUTE_PATH()]: postPageRouter,
  [MASTER_CLASSES_ROUTE_PATH]: masterClassesRouter,
  [POSTS_ROUTE_PATH]: postsRouter,
  [SEWING_GOODS_ROUTE_PATH]: sewingGoodsRouter,
  [SETTINGS_ROUTE_PATH]: settingsRouter,
  [HOME_ROUTE_PATH]: homeRouter,
  [PRODUCTS_COMPILATION_ROUTE_PATH]: productsCompilationRouter,

  [CREATE_NOTIFICATION_ROUTE_PATH]: createNotificationRouter,
  [USERS_ROUTE_PATH]: usersRouter,
  [RECENT_COMMENTS_ROUTE_PATH]: recentCommentsRouter,
  [FEEDBACK_ROUTE_PATH]: feedbackRouter,
  [ORDERS_ROUTE_PATH]: ordersRouter,
  [USER_ORDERS_ROUTE_PATH]: userOrdersRouter,
  [BASKET_ROUTE_PATH]: basketRouter,
  [SLIDER_LIST_ROUTE_PATH]: sliderListRouter,
  [PROMOCODES_ROUTE_PATH]: promocodesRouter,
};

export const Router = routesInit(routes);
