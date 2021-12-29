import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { getQuery } from 'src/main/navigation';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { getSewingGoodsProductAction } from './sewing-goods-product.action';
import { SewingGoodsProductComponent } from './sewing-goods-product.component';
import {
  SewingGoodsProductStateType,
  SewingGoodsProductActionType,
  SEWING_GOODS_PRODUCT_ACTION_TYPE,
} from './sewing-goods-product.type';

const initialState = {
  pending: false,
  product: {},
  error: '',
};

function sewingGoodsProductReducer(
  state: SewingGoodsProductStateType,
  action: SewingGoodsProductActionType,
) {
  switch (action.type) {
    case SEWING_GOODS_PRODUCT_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };

    case SEWING_GOODS_PRODUCT_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        product: action.data,
      };
    case SEWING_GOODS_PRODUCT_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function SewingGoodsProductContainer() {
  const id = getQuery('id');
  const { lang, isAuth } = useSelector((state: any) => ({
    lang: state[LANG_STORE_NAME].active.toLowerCase(),
    isAuth: state[AUTH_STORE_NAME].logged,
  }));
  const [state, setState] = useReducer(sewingGoodsProductReducer, initialState);

  useEffect(() => {
    if (typeof id === 'string' && id) {
      getSewingGoodsProductAction(id, isAuth, lang)(setState);
    }
  }, [id]);

  return <SewingGoodsProductComponent state={state} />;
}
