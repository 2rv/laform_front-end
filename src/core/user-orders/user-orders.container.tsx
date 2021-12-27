import { useEffect, useReducer, useState } from 'react';
import { getUserOrdersAction } from './user-orders.action';
import { UserOrdersComponent } from './user-orders.component';
import {
  USER_ORDERS_ACTION_TYPE,
  UserOrdersStateType,
  UserOrdersActionType,
  UserOrdersFilterValues,
} from './user-orders.type';

const initialState = {
  pending: false,
  error: '',

  orders: [],

  total: 0,
  page: 1,
};

function userOrdersReducer(
  state: UserOrdersStateType,
  action: UserOrdersActionType,
) {
  switch (action.type) {
    case USER_ORDERS_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
      };
    case USER_ORDERS_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        orders: [...state.orders, ...(action.orders || [])],
        total: action.total || 0,
        page: state.page + 1,
      };
    case USER_ORDERS_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case USER_ORDERS_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function UserOrdersContainer() {
  const [state, setState] = useReducer(userOrdersReducer, initialState);
  const [filter, setFilter] = useState<UserOrdersFilterValues>();

  const onFetch = () => {
    if (filter?.from && filter?.to) {
      const query = {
        page: state.page,
        orderNumber: filter.where,
        status: filter.status,
        from: filter.from,
        to: filter.to,
      };
      getUserOrdersAction(query)(setState);
    }
  };

  useEffect(onFetch, [filter]);

  const onFilter = (values: UserOrdersFilterValues) => {
    setState({ type: USER_ORDERS_ACTION_TYPE.RESET });
    setFilter({ ...filter, ...values });
  };

  return (
    <UserOrdersComponent
      state={state}
      onFilter={onFilter}
      onPagination={onFetch}
    />
  );
}
