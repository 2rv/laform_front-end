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
import { userOrderStore, USER_ORDER_STORE_NAME } from '../../core/user-order';
import { basketStore, BASKET_STORE_NAME } from '../../core/basket';
import {
  articlePageStore,
  ARTICLE_PAGE_STORE_NAME,
} from '../../core/article-page';
import {
  aboutAccountStore,
  ABOUT_ACCOUNT_STORE_NAME,
} from '../../core/about-account';
import {
  sewingGoodsPageStore,
  SEWING_GOODS_PAGE_STORE_NAME,
} from '../../core/sewing-goods-page';
import {
  patternsPageStore,
  PATTERNS_PAGE_STORE_NAME,
} from '../../core/patterns-page';
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
import { feedbackStore, FEEDBACK_STORE_NAME } from '../../core/feedback';
import {
  recentCommentsStore,
  RECENT_COMMENTS_STORE_NAME,
} from '../../core/recent-comments';
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

  [MASTER_CLASS_PAGE_STORE_NAME]: masterClassPageStore,
  [PATTERNS_PAGE_STORE_NAME]: patternsPageStore,
  [SEWING_GOODS_PAGE_STORE_NAME]: sewingGoodsPageStore,
  [ARTICLE_PAGE_STORE_NAME]: articlePageStore,

  [SIGNUP_STORE_NAME]: signupStore,
  [LOGIN_STORE_NAME]: loginStore,
  [SETTINGS_CHANGE_PASSWORD_STORE_NAME]: settingsChangePasswordStore,

  [USER_INFO_STORE_NAME]: userInfoStore,
  [RECENT_COMMENTS_STORE_NAME]: recentCommentsStore,
  [FEEDBACK_STORE_NAME]: feedbackStore,
  [CATEGORIES_STORE_NAME]: categoriesStore,
  [COMMENT_STORE_NAME]: commentStore,
  [USER_ORDER_STORE_NAME]: userOrderStore,
  [ABOUT_ACCOUNT_STORE_NAME]: aboutAccountStore,
  [ORDER_NUMBER_STORE_NAME]: orderNumberStore,
  [PROMOCODES_STORE_NAME]: promocodesStore,
  [CREATE_NOTIFICATION_STORE_NAME]: createNotificationStore,
  [USERS_STORE_NAME]: usersStore,
  [ALL_LIKES_STORE_NAME]: allLikesStore,
});
export { initStore } from './store.core';
