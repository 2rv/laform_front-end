import { useEffect, useReducer, useState } from 'react';
import { getOrdersAction } from './orders.action';
import { OrdersComponent } from './orders.component';
import {
  ORDERS_ACTION_TYPE,
  OrdersStateType,
  OrdersActionType,
  OrdersFilterValues,
} from './orders.type';

const initialState = {
  pending: false,
  error: '',

  orders: [],

  total: 0,
  page: 1,
};

function ordersReducer(state: OrdersStateType, action: OrdersActionType) {
  switch (action.type) {
    case ORDERS_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
      };
    case ORDERS_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        orders: [...state.orders, ...(action.orders || [])],
        total: action.total || 0,
        page: state.page + 1,
      };
    case ORDERS_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case ORDERS_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function OrdersContainer() {
  const [state, setState] = useReducer(ordersReducer, initialState);
  const [filter, setFilter] = useState<OrdersFilterValues>();

  const onFetch = () => {
    if (filter?.from && filter?.to) {
      const query = {
        page: state.page,
        orderNumber: filter.where,
        status: filter.status,
        from: filter.from,
        to: filter.to,
      };
      getOrdersAction(query)(setState);
    }
  };

  useEffect(onFetch, [filter]);

  const onFilter = (values: OrdersFilterValues) => {
    setState({ type: ORDERS_ACTION_TYPE.RESET });
    setFilter({ ...filter, ...values });
  };

  return (
    <OrdersComponent state={state} onFilter={onFilter} onPagination={onFetch} />
  );
}
