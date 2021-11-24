import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import {
  orderNumberUploadData,
  updatePurchaseOrderStatus,
  changeProductAction,
  deleteProductAction,
} from './order-number.action';
import { ORDER_NUMBER_STORE_NAME } from './order-number.constant';
import { OrderNumberComponent } from './order-number.component';
import { ABOUT_ORDER_FIELD_NAME } from './order-number.type';
import { getDeliveryInfoAction } from '../basket/basket.action';
import { BASKET_STORE_NAME } from '../basket';

export function OrderNumberContainer() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const {
    purchaseInfoState,
    purchaseProducts,
    orderNumberState,
    deliveryTypes,
    pageLoading,
  } = useSelector((state) => ({
    purchaseInfoState: state[ORDER_NUMBER_STORE_NAME].purchaseInfo,
    purchaseProducts: state[ORDER_NUMBER_STORE_NAME].purchaseProducts,
    orderNumberState: state[ORDER_NUMBER_STORE_NAME].orderUpdate,
    deliveryTypes: state[BASKET_STORE_NAME].deliveryTypes,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const deliveryTypeOptions = getRequestData(deliveryTypes, []) ?? [];

  useEffect(() => {
    dispatch(orderNumberUploadData(query.id));
    dispatch(getDeliveryInfoAction());
  }, []);

  const onSubmit = (values) => {
    dispatch(updatePurchaseOrderStatus(query.id, values, purchaseProducts[1]));
  };
  const changeItem = (values) => {
    dispatch(changeProductAction(values, purchaseProducts[1]));
  };
  const deleteItem = (values) => {
    dispatch(deleteProductAction(values, purchaseProducts[1]));
  };

  function initialValue() {
    const purchaseInfo = getRequestData(purchaseInfoState, {
      [ABOUT_ORDER_FIELD_NAME.CITY]: '',
      [ABOUT_ORDER_FIELD_NAME.EMAIL]: '',
      [ABOUT_ORDER_FIELD_NAME.FULL_NAME]: '',
      [ABOUT_ORDER_FIELD_NAME.PHONE_NUMBER]: '',
      [ABOUT_ORDER_FIELD_NAME.PROMO_CODE]: '',
      [ABOUT_ORDER_FIELD_NAME.COMMENT]: '',
      [ABOUT_ORDER_FIELD_NAME.ORDER_STATUS]: 0,
      [ABOUT_ORDER_FIELD_NAME.PRICE]: 0,
      [ABOUT_ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT]: 0,
      [ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD]: '',
    });
    purchaseInfo.price = purchaseProducts[2];
    if (!Boolean(purchaseInfo.typeOfDelivery)) {
      purchaseInfo.typeOfDelivery = deliveryTypeOptions[0]?.tid;
    }
    return purchaseInfo;
  }

  return (
    <OrderNumberComponent
      isPending={isRequestPending(purchaseInfoState)}
      isError={isRequestError(purchaseInfoState)}
      isSuccess={isRequestSuccess(purchaseInfoState)}
      errorMessage={getRequestErrorMessage(purchaseInfoState)}
      isOrderNumberChangePending={isRequestPending(orderNumberState)}
      isOrderNumberChangeSuccess={isRequestSuccess(orderNumberState)}
      pageLoading={pageLoading}
      onSubmit={onSubmit}
      initialValue={initialValue()}
      purchaseProducts={purchaseProducts[0]}
      headersTable={headersTable}
      changeItem={changeItem}
      deleteItem={deleteItem}
      deliveryTypeOptions={deliveryTypeOptions}
    />
  );
}

const headersTable = [
  'ORDER_NUMBER.TABLE.HEADER.ORDER_ITEMS',
  'ORDER_NUMBER.TABLE.HEADER.PARAMETERS',
  'ORDER_NUMBER.TABLE.HEADER.QUANTITY',
  'ORDER_NUMBER.TABLE.HEADER.TOTAL_PRICE',
];
