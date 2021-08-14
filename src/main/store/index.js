import { combineReducers } from 'redux';

import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';
import {
  paymentMethodStore,
  PAYMENT_METHOD_STORE_NAME,
} from '../../lib/common/payment-method';

import { signupStore, SIGNUP_STORE_NAME } from '../../core/signup';
import { loginStore, LOGIN_STORE_NAME } from '../../core/login';
import {
  authRecoveryAccountStore,
  AUTH_RECOVERY_ACCOUNT_STORE_NAME,
} from '../../core/auth-recovery-account';
import {
  authVerificateEmailStore,
  AUTH_VERIFICATE_EMAIL_STORE_NAME,
} from '../../core/auth-verificate-email';
import {
  authVerificateEmailConfirmStore,
  AUTH_VERIFICATE_EMAIL_CONFIRM_STORE_NAME,
} from '../../core/auth-verificate-email-confirm';
import {
  authChangePasswordStore,
  AUTH_CHANGE_PASSWORD_STORE_NAME,
} from '../../core/auth-change-password';
import {
  settingsChangePasswordStore,
  SETTINGS_CHANGE_PASSWORD_STORE_NAME,
} from '../../core/settings-change-password';
import {
  settingsChangeEmailStore,
  SETTINGS_CHANGE_EMAIL_STORE_NAME,
} from '../../core/settings-change-email';
import {
  settingsChangeDeliveryInfoStore,
  SETTINGS_CHANGE_DELIVERY_INFO_STORE_NAME,
} from '../../core/settings-change-delivery-info';
import { sliderStore, SLIDER_STORE_NAME } from '../../core/slider';
import {
  notificationStore,
  NOTIFICATION_STORE_NAME,
} from '../../core/notification';
import {
  settingsChangeNotificationStore,
  SETTINGS_CHANGE_NOTIFICATION_STORE_NAME,
} from '../../core/settings-change-notification';
import {
  homeArticleStore,
  HOME_ARTICLE_STORE_NAME,
} from '../../core/home-articles';
import {
  productStore,
  PRODUCT_STORE_NAME,
} from '../../core/product';
import {
  sewingGoodsStore,
  SEWING_GOODS_STORE_NAME,
} from '../../core/sewing-goods';
import {
  patternsStore,
  PATTERNS_STORE_NAME,
} from '../../core/patterns';
import {
  ordersStore,
  ORDERS_STORE_NAME,
} from '../../core/orders';
import {
  myPurchasesStore,
  MY_PURCHASES_STORE_NAME,
} from '../../core/my-purchases';
import {
  myPatternsStore,
  MY_PATTERNS_STORE_NAME,
} from '../../core/my-patterns';
import {
  myMasterClassesStore,
  MY_MASTER_CLASSES_STORE_NAME,
} from '../../core/my-master-classes';
import {
  myLikesStore,
  MY_LIKES_STORE_NAME,
} from '../../core/my-likes';
import {
  faqPageStore,
  FAQ_PAGE_STORE_NAME,
} from '../../core/faq-page';
import {
  editCompilationStore,
  EDIT_COMPILATION_STORE_NAME,
} from '../../core/edit-compilation';
import {
  createProductStore,
  CREATE_PRODUCT_STORE_NAME,
} from '../../core/create-product';
import {
  createArticleStore,
  CREATE_ARTICLE_STORE_NAME,
} from '../../core/create-article';
import {
  compilationStore,
  COMPILATION_STORE_NAME,
} from '../../core/compilation';
import {
  basketStore,
  BASKET_STORE_NAME,
} from '../../core/basket';
import {
  articlesStore,
  ARTICLES_STORE_NAME,
} from '../../core/articles';
import {
  articlePageStore,
  ARTICLE_PAGE_STORE_NAME,
} from '../../core/article-page';
import {
  aboutAccountStore,
  ABOUT_ACCOUNT_STORE_NAME,
} from '../../core/about-account';
import {
  orderNumberStore,
  ORDER_NUMBER_STORE_NAME,
} from '../../core/order-number';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [PAYMENT_METHOD_STORE_NAME]: paymentMethodStore,
  [SIGNUP_STORE_NAME]: signupStore,
  [LOGIN_STORE_NAME]: loginStore,
  [AUTH_RECOVERY_ACCOUNT_STORE_NAME]: authRecoveryAccountStore,
  [AUTH_VERIFICATE_EMAIL_STORE_NAME]: authVerificateEmailStore,
  [AUTH_CHANGE_PASSWORD_STORE_NAME]: authChangePasswordStore,
  [AUTH_VERIFICATE_EMAIL_CONFIRM_STORE_NAME]: authVerificateEmailConfirmStore,
  [SETTINGS_CHANGE_EMAIL_STORE_NAME]: settingsChangeEmailStore,
  [SETTINGS_CHANGE_PASSWORD_STORE_NAME]: settingsChangePasswordStore,
  [SETTINGS_CHANGE_DELIVERY_INFO_STORE_NAME]: settingsChangeDeliveryInfoStore,
  [SETTINGS_CHANGE_EMAIL_STORE_NAME]: settingsChangeEmailStore,
  [SLIDER_STORE_NAME]: sliderStore,
  [NOTIFICATION_STORE_NAME]: notificationStore,
  [HOME_ARTICLE_STORE_NAME]: homeArticleStore,
  [SETTINGS_CHANGE_NOTIFICATION_STORE_NAME]: settingsChangeNotificationStore,
  [PRODUCT_STORE_NAME]: productStore,
  [SEWING_GOODS_STORE_NAME]: sewingGoodsStore,
  [PATTERNS_STORE_NAME]: patternsStore,
  [ORDERS_STORE_NAME]: ordersStore,
  [MY_PURCHASES_STORE_NAME]: myPurchasesStore,
  [MY_PATTERNS_STORE_NAME]: myPatternsStore,
  [MY_MASTER_CLASSES_STORE_NAME]: myMasterClassesStore,
  [MY_LIKES_STORE_NAME]: myLikesStore,
  [FAQ_PAGE_STORE_NAME]: faqPageStore,
  [EDIT_COMPILATION_STORE_NAME]: editCompilationStore,
  [CREATE_PRODUCT_STORE_NAME]: createProductStore,
  [CREATE_ARTICLE_STORE_NAME]: createArticleStore,
  [COMPILATION_STORE_NAME]: compilationStore,
  [BASKET_STORE_NAME]: basketStore,
  [ARTICLES_STORE_NAME]: articlesStore,
  [ARTICLE_PAGE_STORE_NAME]: articlePageStore,
  [ABOUT_ACCOUNT_STORE_NAME]: aboutAccountStore,
  [ORDER_NUMBER_STORE_NAME]: orderNumberStore,
});

export { initStore } from './store.core';
