import { combineReducers } from 'redux';
import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';
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
import {
  recentCommentsStore,
  RECENT_COMMENTS_STORE_NAME,
} from '../../core/recent-comments';
import {
  userInfoStore,
  USER_INFO_STORE_NAME,
} from '../../core/settings-user-info';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [BASKET_STORE_NAME]: basketStore,
  // Сверху нужное снизу лучше бы отвязать от стора

  [MASTER_CLASS_PAGE_STORE_NAME]: masterClassPageStore,
  [PATTERNS_PAGE_STORE_NAME]: patternsPageStore,
  [SEWING_GOODS_PAGE_STORE_NAME]: sewingGoodsPageStore,
  [ARTICLE_PAGE_STORE_NAME]: articlePageStore,

  [USER_ORDER_STORE_NAME]: userOrderStore,
  [ABOUT_ACCOUNT_STORE_NAME]: aboutAccountStore,
  [ORDER_NUMBER_STORE_NAME]: orderNumberStore,

  [USER_INFO_STORE_NAME]: userInfoStore,
  [ALL_LIKES_STORE_NAME]: allLikesStore,
  [CREATE_NOTIFICATION_STORE_NAME]: createNotificationStore,

  [RECENT_COMMENTS_STORE_NAME]: recentCommentsStore,
  [CATEGORIES_STORE_NAME]: categoriesStore,
  [COMMENT_STORE_NAME]: commentStore,
  [PROMOCODES_STORE_NAME]: promocodesStore,
  [USERS_STORE_NAME]: usersStore,
});
export { initStore } from './store.core';
