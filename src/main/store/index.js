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
  sewingGoodsStore,
  SEWING_GOODS_STORE_NAME,
} from '../../core/sewing-goods';
import { patternsStore, PATTERNS_STORE_NAME } from '../../core/patterns';
import { ordersStore, ORDERS_STORE_NAME } from '../../core/orders';
import {
  userOrdersStore,
  USER_ORDERS_STORE_NAME,
} from '../../core/user-orders';
import { userOrderStore, USER_ORDER_STORE_NAME } from '../../core/user-order';
import { faqStore, FAQ_STORE_NAME } from '../../core/faq';
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
  AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_STORE_NAME,
  authVerificateEmailRecoveryAccountStore,
} from '../../core/auth-verificate-email-recovery-account';
import { promocodesStore, PROMOCODES_STORE_NAME } from '../../core/promocodes';
import {
  createMasterClassStore,
  CREATE_MASTER_CLASS_STORE_NAME,
} from '../../core/master-class-create';
import {
  recomendationStore,
  RECOMENDATION_STORE_NAME,
} from '../../lib/common/block-select-recomendation';
import {
  createSewingGoodsStore,
  CREATE_SEWING_GOODS_STORE_NAME,
} from '../../core/sewing-goods-create';
import {
  createArticleStore,
  CREATE_ARTICLE_STORE_NAME,
} from '../../core/article-create';
import {
  createNotificationStore,
  CREATE_NOTIFICATION_STORE_NAME,
} from '../../core/create-notification';
import { commentStore, COMMENT_STORE_NAME } from '../../core/block-comment';
import { likeStore, LIKE_STORE_NAME } from '../../core/block-like';
import {
  emailConfirmedStore,
  EMAIL_CONFIRMED_STORE_NAME,
} from '../../core/email-confirmed';
import {
  masterClassPageStore,
  MASTER_CLASS_PAGE_STORE_NAME,
} from '../../core/master-class-page';
import { usersStore, USERS_STORE_NAME } from '../../core/users';
import { allLikesStore, ALL_LIKES_STORE_NAME } from '../../core/likes';
import { searchButtonStore } from '../../core/search-button/search-button.store';
import { SEARCH_BUTTON_STORE_NAME } from '../../core/search-button/search-button.constant';
import { aboutStore, ABOUT_STORE_NAME } from '../../core/about';
import {
  deliveryPricePageStore,
  DELIVERY_PRICE_PAGE_STORE_NAME,
} from '../../core/delivery-price-page';
import {
  unsubscribeNotificationStore,
  UNSUBSCRIBE_NOTIFICATION_STORE_NAME,
} from '../../core/unsubscribe-notification';
import {
  categoriesStore,
  CATEGORIES_STORE_NAME,
} from '../../lib/common/block-categories';
import {
  createPatternStore,
  CREATE_PATTERN_STORE_NAME,
} from '../../core/pattern-create';
import {
  allProductsStore,
  ALL_PRODUCTS_STORE_NAME,
} from '../../core/all-products';
import {
  legalInformationStore,
  LEGAL_INFORMATION_STORE_NAME,
} from '../../core/legal-information';
import {
  privacyPolicyStore,
  PRIVACY_POLICY_STORE_NAME,
} from '../../core/privacy-policy';
import {
  termsOfUseStore,
  TERMS_OF_USE_STORE_NAME,
} from '../../core/terms-of-use';
import { feedbackStore, FEEDBACK_STORE_NAME } from '../../core/feedback';
import {
  recentCommentsStore,
  RECENT_COMMENTS_STORE_NAME,
} from '../../core/recent-comments';
import { statisticsStore, STATISTICS_STORE_NAME } from '../../core/statistics';
import {
  productSelectionsStore,
  PRODUCT_SELECTIONS_STORE_NAME,
} from '../../core/product-selections';
import {
  findAdressStore,
  FIND_ADRESS_STORE_NAME,
} from '../../lib/common/block-find-adress';

export const reducers = combineReducers({
  [FIND_ADRESS_STORE_NAME]: findAdressStore,
  [PRODUCT_SELECTIONS_STORE_NAME]: productSelectionsStore,
  [RECENT_COMMENTS_STORE_NAME]: recentCommentsStore,
  [STATISTICS_STORE_NAME]: statisticsStore,
  [LEGAL_INFORMATION_STORE_NAME]: legalInformationStore,
  [PRIVACY_POLICY_STORE_NAME]: privacyPolicyStore,
  [TERMS_OF_USE_STORE_NAME]: termsOfUseStore,
  [FEEDBACK_STORE_NAME]: feedbackStore,
  [CREATE_PATTERN_STORE_NAME]: createPatternStore,
  [CATEGORIES_STORE_NAME]: categoriesStore,
  [MASTER_CLASS_PAGE_STORE_NAME]: masterClassPageStore,
  [COMMENT_STORE_NAME]: commentStore,
  [CREATE_ARTICLE_STORE_NAME]: createArticleStore,
  [CREATE_SEWING_GOODS_STORE_NAME]: createSewingGoodsStore,
  [RECOMENDATION_STORE_NAME]: recomendationStore,
  [CREATE_MASTER_CLASS_STORE_NAME]: createMasterClassStore,
  [AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_STORE_NAME]:
    authVerificateEmailRecoveryAccountStore,
  [PATTERNS_PAGE_STORE_NAME]: patternsPageStore,
  [SEWING_GOODS_PAGE_STORE_NAME]: sewingGoodsPageStore,
  [SEWING_GOODS_PRODUCT_STORE_NAME]: sewingGoodsProductStore,
  [SEWING_GOODS_STORE_NAME]: sewingGoodsStore,
  [MASTER_CLASS_PRODUCT_STORE_NAME]: masterClassProductStore,
  [MASTER_CLASSES_STORE_NAME]: masterClassesStore,
  [PATTERNS_STORE_NAME]: patternsStore,
  [PATTERNS_PRODUCT_STORE_NAME]: patternsProductStore,
  [ARTICLES_STORE_NAME]: articlesStore,
  [ARTICLE_PAGE_STORE_NAME]: articlePageStore,
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
  [SETTINGS_CHANGE_NOTIFICATION_STORE_NAME]: settingsChangeNotificationStore,
  [ORDERS_STORE_NAME]: ordersStore,
  [USER_ORDERS_STORE_NAME]: userOrdersStore,
  [USER_ORDER_STORE_NAME]: userOrderStore,
  [FAQ_STORE_NAME]: faqStore,
  [BASKET_STORE_NAME]: basketStore,
  [ABOUT_ACCOUNT_STORE_NAME]: aboutAccountStore,
  [HOME_STORE_NAME]: homeStore,
  [ORDER_NUMBER_STORE_NAME]: orderNumberStore,
  [SLIDER_LIST_STORE_NAME]: sliderListStore,
  [SLIDER_EDIT_STORE_NAME]: sliderEditStore,
  [PROMOCODES_STORE_NAME]: promocodesStore,
  [CREATE_NOTIFICATION_STORE_NAME]: createNotificationStore,
  [LIKE_STORE_NAME]: likeStore,
  [EMAIL_CONFIRMED_STORE_NAME]: emailConfirmedStore,
  [USERS_STORE_NAME]: usersStore,
  [ALL_LIKES_STORE_NAME]: allLikesStore,
  [SEARCH_BUTTON_STORE_NAME]: searchButtonStore,
  [ABOUT_STORE_NAME]: aboutStore,
  [DELIVERY_PRICE_PAGE_STORE_NAME]: deliveryPricePageStore,
  [UNSUBSCRIBE_NOTIFICATION_STORE_NAME]: unsubscribeNotificationStore,
  [ALL_PRODUCTS_STORE_NAME]: allProductsStore,
});

export { initStore } from './store.core';
