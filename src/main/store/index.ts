import { combineReducers } from 'redux';
import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';
import { basketStore, BASKET_STORE_NAME } from '../../core/basket';
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
import { promocodesStore, PROMOCODES_STORE_NAME } from '../../core/promocodes';
import {
  masterClassPageStore,
  MASTER_CLASS_PAGE_STORE_NAME,
} from '../../core/master-class-page';
import {
  categoriesStore,
  CATEGORIES_STORE_NAME,
} from '../../lib/common/block-categories';
import {
  userInfoStore,
  USER_INFO_STORE_NAME,
} from '../../core/settings-user-info';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [BASKET_STORE_NAME]: basketStore,

  [MASTER_CLASS_PAGE_STORE_NAME]: masterClassPageStore,
  [PATTERNS_PAGE_STORE_NAME]: patternsPageStore,
  [SEWING_GOODS_PAGE_STORE_NAME]: sewingGoodsPageStore,

  [ABOUT_ACCOUNT_STORE_NAME]: aboutAccountStore,

  [USER_INFO_STORE_NAME]: userInfoStore,

  [CATEGORIES_STORE_NAME]: categoriesStore,
  [PROMOCODES_STORE_NAME]: promocodesStore,
});
export { initStore } from './store.core';
