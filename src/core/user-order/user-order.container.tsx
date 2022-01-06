import { useEffect, useReducer } from 'react';
import { getQuery } from 'src/main/navigation';
import { getOrderAction } from './user-order.action';
import { UserOrderComponent } from './user-order.component';
import {
  USER_ORDER_ACTION_TYPE,
  UserOrderStateType,
  UserOrderActionType,
} from './user-order.type';

const initialState: UserOrderStateType = {
  pending: false,
  order: undefined,
  products: [],
  price: 0,
  error: undefined,
};
function UserOrderReducer(
  state: UserOrderStateType,
  action: UserOrderActionType,
): UserOrderStateType {
  switch (action.type) {
    case USER_ORDER_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: undefined,
      };
    case USER_ORDER_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        order: action.order,
        products: action.products || [],
        price: action.price || 0,
      };
    case USER_ORDER_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export function UserOrderContainer() {
  const id = getQuery('id');
  const [state, setState] = useReducer(UserOrderReducer, initialState);

  useEffect(() => {
    if (id && typeof id === 'string') {
      getOrderAction(id)(setState);
    }
  }, [id]);

  return <UserOrderComponent state={state} />;
}
