import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { getMasterClassProductAction } from './master-class-product.action';
import { MasterClassProductComponent } from './master-class-product.component';
import { getQuery } from 'src/main/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import {
  MasterClassProductActionType,
  MasterClassProductStateType,
  MASTER_CLASS_PRODUCT_ACTION_TYPE,
} from './master-class-product.type';
const initialState = {
  pending: false,
  product: {},
  error: '',
};
function masterClassProductReducer(
  state: MasterClassProductStateType,
  action: MasterClassProductActionType,
) {
  switch (action.type) {
    case MASTER_CLASS_PRODUCT_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };

    case MASTER_CLASS_PRODUCT_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        product: action.data,
      };
    case MASTER_CLASS_PRODUCT_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function MasterClassProductContainer() {
  const id = getQuery('id');

  const { isAuth } = useSelector((state: any) => ({
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const [state, setState] = useReducer(masterClassProductReducer, initialState);

  useEffect(() => {
    if (typeof id === 'string' && id) {
      getMasterClassProductAction(id, isAuth)(setState);
    }
  }, [id]);

  return <MasterClassProductComponent state={state} />;
}
