export const BASKET_ROUTE_PATH = '/basket';
export const BASKET_STORE_NAME = 'BASKET';
export const BASKET_API = {
  LOAD_USER_INFO: 'user/info/get',
  UPDATE_USER_INFO: '/user/info/update',
  CREATE_ORDER: (isAuth: boolean) => {
    if (isAuth) return 'purchase/create';
    else return 'purchase/not-auth/create';
  },
  ADD_BACKET_LOAD_ITEM_INFO: (
    type: 0 | 1 | 2 | 3,
    id: string,
    currentLang: string,
  ) => {
    if (type === 0) return `/master-class/get/${id}/?lang=${currentLang}`;
    if (type === 1) return `/pattern-product/get/${id}/?lang=${currentLang}`;
    if (type === 2) return `/pattern-product/get/${id}/?lang=${currentLang}`;
    if (type === 3) return `/sewing-product/get/${id}/?lang=${currentLang}`;
  },
};
