import { combineReducers } from 'redux';
import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';
import { signupStore, SIGNUP_STORE_NAME } from '../../core/auth-signup';
import { loginStore, LOGIN_STORE_NAME } from '../../core/auth-login';
import {
  settingsChangePasswordStore,
  SETTINGS_CHANGE_PASSWORD_STORE_NAME,
} from '../../core/settings-change-password';
import {
  sewingGoodsStore,
  SEWING_GOODS_STORE_NAME,
} from '../../core/sewing-goods';
import { patternsStore, PATTERNS_STORE_NAME } from '../../core/patterns';
import {
  userOrdersStore,
  USER_ORDERS_STORE_NAME,
} from '../../core/user-orders';
import { userOrderStore, USER_ORDER_STORE_NAME } from '../../core/user-order';
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
import { promocodesStore, PROMOCODES_STORE_NAME } from '../../core/promocodes';
import {
  createNotificationStore,
  CREATE_NOTIFICATION_STORE_NAME,
} from '../../core/create-notification';
import { commentStore, COMMENT_STORE_NAME } from '../../core/block-comment';
import {
  masterClassPageStore,
  MASTER_CLASS_PAGE_STORE_NAME,
} from '../../core/master-class-page';
import { usersStore, USERS_STORE_NAME } from '../../core/users';
import { allLikesStore, ALL_LIKES_STORE_NAME } from '../../core/likes';
import {
  categoriesStore,
  CATEGORIES_STORE_NAME,
} from '../../lib/common/block-categories';
import {
  allProductsStore,
  ALL_PRODUCTS_STORE_NAME,
} from '../../core/all-products';
import { feedbackStore, FEEDBACK_STORE_NAME } from '../../core/feedback';
import {
  recentCommentsStore,
  RECENT_COMMENTS_STORE_NAME,
} from '../../core/recent-comments';
import {
  productSelectionsStore,
  PRODUCT_SELECTIONS_STORE_NAME,
} from '../../core/product-selections';
import {
  userInfoStore,
  USER_INFO_STORE_NAME,
} from '../../core/settings-user-info';
import {
  faqArticleStore,
  FAQ_ARTICLE_STORE_NAME,
} from '../../core/faq-article';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [BASKET_STORE_NAME]: basketStore,
  // Сверху нужное снизу лучше бы отвязать от стора
  [FAQ_ARTICLE_STORE_NAME]: faqArticleStore,
  [USER_INFO_STORE_NAME]: userInfoStore,
  [PRODUCT_SELECTIONS_STORE_NAME]: productSelectionsStore,
  [RECENT_COMMENTS_STORE_NAME]: recentCommentsStore,
  [FEEDBACK_STORE_NAME]: feedbackStore,
  [CATEGORIES_STORE_NAME]: categoriesStore,
  [MASTER_CLASS_PAGE_STORE_NAME]: masterClassPageStore,
  [COMMENT_STORE_NAME]: commentStore,
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
  [SIGNUP_STORE_NAME]: signupStore,
  [LOGIN_STORE_NAME]: loginStore,
  [SETTINGS_CHANGE_PASSWORD_STORE_NAME]: settingsChangePasswordStore,
  [USER_ORDERS_STORE_NAME]: userOrdersStore,
  [USER_ORDER_STORE_NAME]: userOrderStore,
  [ABOUT_ACCOUNT_STORE_NAME]: aboutAccountStore,
  [HOME_STORE_NAME]: homeStore,
  [ORDER_NUMBER_STORE_NAME]: orderNumberStore,
  [PROMOCODES_STORE_NAME]: promocodesStore,
  [CREATE_NOTIFICATION_STORE_NAME]: createNotificationStore,
  [USERS_STORE_NAME]: usersStore,
  [ALL_LIKES_STORE_NAME]: allLikesStore,
  [ALL_PRODUCTS_STORE_NAME]: allProductsStore,
});

export { initStore } from './store.core';
