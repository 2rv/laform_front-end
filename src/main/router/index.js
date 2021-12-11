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
  masterClassPageRouter,
  MASTER_CLASS_PAGE_ROUTE_PATH,
} from '../../core/master-class-page';
import { usersRouter, USERS_ROUTE_PATH } from '../../core/users';
import { allLikesRouter, ALL_LIKES_ROUTE_PATH } from '../../core/likes';
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

export const routes = {
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
  [MASTER_CLASS_PAGE_ROUTE_PATH]: masterClassPageRouter,
  [PATTERNS_PAGE_ROUTE_PATH]: patternsPageRouter,
  [SEWING_GOODS_PRODUCT_ROUTE_PATH]: sewingGoodsProductRouter,
  [SEWING_GOODS_PAGE_ROUTE_PATH]: sewingGoodsPageRouter,
  [MASTER_CLASS_PRODUCT_ROUTE_PATH]: masterClassProductRouter,
  [PATTERNS_PRODUCT_ROUTE_PATH]: patternsProductRouter,
  [USER_ORDER_ROUTE_PATH]: userOrderRouter,
  [ABOUT_ACCOUNT_ROUTE_PATH]: aboutAccountRouter,
  [ORDER_NUMBER_ROUTE_PATH]: orderNumberRouter,
  [SLIDER_EDIT_ROUTE_PATH]: sliderEditRouter,
  [STATISTICS_ROUTE_PATH]: statisticsRouter,
  [ALL_PRODUCTS_ROUTE_PATH]: allProductsRouter,
  [USERS_ROUTE_PATH]: usersRouter,
  [PRODUCT_SELECTIONS_ROUTE_PATH]: productSelectionsRouter,
  [RECENT_COMMENTS_ROUTE_PATH]: recentCommentsRouter,
  [FEEDBACK_ROUTE_PATH]: feedbackRouter,
  [CREATE_PATTERN_ROUTE_PATH]: createPatternRouter,
  [CREATE_ARTICLE_ROUTE_PATH]: createArticleRouter,
  [CREATE_SEWING_GOODS_ROUTE_PATH]: createSewingGoodsRouter,
  [CREATE_MASTER_CLASS_ROUTE_PATH]: createMasterClassRouter,
  [AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH]:
    authVerificateEmailRecoveryAccountRouter,
  [SEWING_GOODS_ROUTE_PATH]: sewingGoodsRouter,
  [MASTER_CLASSES_ROUTE_PATH]: masterClassesRouter,
  [PATTERNS_ROUTE_PATH]: patternsRouter,
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
  [FAQ_ROUTE_PATH]: faqRouter,
  [BASKET_ROUTE_PATH]: basketRouter,
  [SLIDER_LIST_ROUTE_PATH]: sliderListRouter,
  [PROMOCODES_ROUTE_PATH]: promocodesRouter,
  [CREATE_NOTIFICATION_ROUTE_PATH]: createNotificationRouter,
  [ALL_LIKES_ROUTE_PATH]: allLikesRouter,
  [UNSUBSCRIBE_NOTIFICATION_ROUTE_PATH]: unsubscribeNotificationRouter,
};

export const Router = routesInit(routes);
