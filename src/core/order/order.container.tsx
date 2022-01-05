import { useEffect, useReducer } from 'react';
import { getQuery } from 'src/main/navigation';
import { OrderComponent } from './order.component';
import {
  getOrderAction,
  updateOrderAction,
  changePurchaseProductAction,
  deletePurchaseProductAction,
} from './order.action';
import {
  ORDER_FIELD_NAME,
  OrderStateType,
  OrderActionType,
  ORDER_ACTION_TYPE,
  changePurchaseProductValues,
  OrderValues,
} from './order.type';

const initialState: OrderStateType = {
  getPending: false,
  order: undefined,
  purchaseProducts: [],
  products: [],
  price: 0,
  getError: '',

  updatePending: false,
  updateSuccess: false,
  updateError: '',
};

function orderReducer(
  state: OrderStateType,
  action: OrderActionType,
): OrderStateType {
  switch (action.type) {
    case ORDER_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getError: '',
      };
    case ORDER_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        order: action.order,
        purchaseProducts: action.purchaseProducts || [],
        products: action.products || [],
        price: action.price || 0,
      };
    case ORDER_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case ORDER_ACTION_TYPE.CHANGE_PRODUCT:
      return {
        ...state,
        purchaseProducts: action.purchaseProducts || [],
        products: action.products || [],
        price: action.price || 0,
      };

    case ORDER_ACTION_TYPE.UPDATE_PENDING:
      return {
        ...state,
        updatePending: true,
        updateError: '',
      };
    case ORDER_ACTION_TYPE.UPDATE_SUCCESS:
      return {
        ...state,
        updatePending: false,
        updateSuccess: true,
      };
    case ORDER_ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        updatePending: false,
        updateError: action.error,
      };
    default:
      return state;
  }
}

export function OrderContainer() {
  const id = getQuery('id');
  const [state, setState] = useReducer(orderReducer, initialState);

  useEffect(() => {
    if (id && typeof id === 'string') {
      getOrderAction(id)(setState);
    }
  }, [id]);

  const onSubmit = (values: OrderValues) => {
    if (id && typeof id === 'string') {
      updateOrderAction(id, values, state.purchaseProducts)(setState);
    }
  };
  const changeItem = (values: changePurchaseProductValues) => {
    changePurchaseProductAction(state.purchaseProducts, values)(setState);
  };
  const deleteItem = (values: changePurchaseProductValues) => {
    deletePurchaseProductAction(state.purchaseProducts, values)(setState);
  };

  function initialValues() {
    const purchaseInfo = state.order || {
      [ORDER_FIELD_NAME.ADRESS]: '',
      [ORDER_FIELD_NAME.EMAIL]: '',
      [ORDER_FIELD_NAME.FULL_NAME]: '',
      [ORDER_FIELD_NAME.PHONE_NUMBER]: '',
      [ORDER_FIELD_NAME.PROMO_CODE]: '',
      [ORDER_FIELD_NAME.COMMENT]: '',
      [ORDER_FIELD_NAME.ORDER_STATUS]: 0,
      [ORDER_FIELD_NAME.PRICE]: 0,
      [ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT]: 0,
      [ORDER_FIELD_NAME.SHIPPING_PRICE]: 0,
    };
    return purchaseInfo;
  }

  return (
    <OrderComponent
      state={state}
      onSubmit={onSubmit}
      initialValues={initialValues()}
      changeItem={changeItem}
      deleteItem={deleteItem}
    />
  );
}
