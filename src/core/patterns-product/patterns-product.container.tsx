import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { getQuery } from 'src/main/navigation';
import { getPatternsProductAction } from './patterns-product.action';
import { PatternsProductComponent } from './patterns-product.component';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import {
  PatternsProductActionType,
  PatternsProductStateType,
  PATTERNS_PRODUCT_ACTION_TYPE,
} from './patterns-product.type';

const initialState = {
  pending: false,
  product: {},
  error: '',
};

function patternsProductReducer(
  state: PatternsProductStateType,
  action: PatternsProductActionType,
) {
  switch (action.type) {
    case PATTERNS_PRODUCT_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };

    case PATTERNS_PRODUCT_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        product: action.data,
      };
    case PATTERNS_PRODUCT_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function PatternsProductContainer() {
  const id = getQuery('id');
  const { isAuth } = useSelector((state: any) => ({
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const [state, setState] = useReducer(patternsProductReducer, initialState);

  useEffect(() => {
    if (typeof id === 'string' && id) {
      getPatternsProductAction(id, isAuth)(setState);
    }
  }, [id]);

  return <PatternsProductComponent state={state} />;
}
