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
  sewingGoodsStore,
  SEWING_GOODS_STORE_NAME,
} from '../../core/sewing-goods';
import { patternsStore, PATTERNS_STORE_NAME } from '../../core/patterns';
import { ordersStore, ORDERS_STORE_NAME } from '../../core/orders';
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
import { myLikesStore, MY_LIKES_STORE_NAME } from '../../core/my-likes';
import { faqPageStore, FAQ_PAGE_STORE_NAME } from '../../core/faq-page';
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
import { basketStore, BASKET_STORE_NAME } from '../../core/basket';
import { articlesStore, ARTICLES_STORE_NAME } from '../../core/articles';
import {
  articlePageStore,
  ARTICLE_PAGE_STORE_NAME,
} from '../../core/article-page';
import {
  aboutAccountStore,
  ABOUT_ACCOUNT_STORE_NAME,
} from '../../core/about-account';
import {
  masterClassProductStore,
  MASTER_CLASS_PRODUCT_STORE_NAME,
} from '../../core/master-class-product';
import {
  sewingGoodsProductStore,
  SEWING_GOODS_PRODUCT_STORE_NAME,
} from '../../core/sewing-goods-product';
import {
  patternsProductStore,
  PATTERNS_PRODUCT_STORE_NAME,
} from '../../core/patterns-product';
import {
  sewingGoodsPageStore,
  SEWING_GOODS_PAGE_STORE_NAME,
} from '../../core/sewing-goods-page';
import {
  patternsPageStore,
  PATTERNS_PAGE_STORE_NAME,
} from '../../core/patterns-page';
import {
  masterClassesStore,
  MASTER_CLASSES_STORE_NAME,
} from '../../core/master-classes';
import { homeStore, HOME_STORE_NAME } from '../../core/home';
import {
  orderNumberStore,
  ORDER_NUMBER_STORE_NAME,
} from '../../core/order-number';
import {
  sliderListStore,
  SLIDER_LIST_STORE_NAME,
} from '../../core/slider-list';
import {
  sliderEditStore,
  SLIDER_EDIT_STORE_NAME,
} from '../../core/slider-edit';
import {
  promocodesStore,
  PROMOCODES_STORE_NAME,
} from '../../core/promocodes';

export const reducers = combineReducers({
  [PATTERNS_PAGE_STORE_NAME]: patternsPageStore,
  [SEWING_GOODS_PAGE_STORE_NAME]: sewingGoodsPageStore,
  [SEWING_GOODS_PRODUCT_STORE_NAME]: sewingGoodsProductStore,
  [SEWING_GOODS_STORE_NAME]: sewingGoodsStore,
  [MASTER_CLASS_PRODUCT_STORE_NAME]: masterClassProductStore,
  [MASTER_CLASSES_STORE_NAME]: masterClassesStore,
  [MY_MASTER_CLASSES_STORE_NAME]: myMasterClassesStore,
  [PATTERNS_STORE_NAME]: patternsStore,
  [PATTERNS_PRODUCT_STORE_NAME]: patternsProductStore,
  [MY_PATTERNS_STORE_NAME]: myPatternsStore,
  [ARTICLES_STORE_NAME]: articlesStore,
  [ARTICLE_PAGE_STORE_NAME]: articlePageStore,
  [CREATE_ARTICLE_STORE_NAME]: createArticleStore,
  [CREATE_PRODUCT_STORE_NAME]: createProductStore,
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
  [ORDERS_STORE_NAME]: ordersStore,
  [MY_PURCHASES_STORE_NAME]: myPurchasesStore,
  [MY_LIKES_STORE_NAME]: myLikesStore,
  [FAQ_PAGE_STORE_NAME]: faqPageStore,
  [EDIT_COMPILATION_STORE_NAME]: editCompilationStore,
  [COMPILATION_STORE_NAME]: compilationStore,
  [BASKET_STORE_NAME]: basketStore,
  [ABOUT_ACCOUNT_STORE_NAME]: aboutAccountStore,
  [HOME_STORE_NAME]: homeStore,
  [ORDER_NUMBER_STORE_NAME]: orderNumberStore,
  [SLIDER_LIST_STORE_NAME]: sliderListStore,
  [SLIDER_EDIT_STORE_NAME]: sliderEditStore,
  [PROMOCODES_STORE_NAME]: promocodesStore,
});

export { initStore } from './store.core';
