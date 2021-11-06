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
  const purchaseInfo = getRequestData(purchaseInfoState, {
    purchaseInfo: null,
  });
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
    return {
      [ABOUT_ORDER_FIELD_NAME.CITY]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.CITY] ?? '',
      [ABOUT_ORDER_FIELD_NAME.EMAIL]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.EMAIL] ?? '',
      [ABOUT_ORDER_FIELD_NAME.FULL_NAME]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.FULL_NAME] ?? '',
      [ABOUT_ORDER_FIELD_NAME.PHONE_NUMBER]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.PHONE_NUMBER] ?? '',
      [ABOUT_ORDER_FIELD_NAME.PROMO_CODE]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.PROMO_CODE] ?? '',
      [ABOUT_ORDER_FIELD_NAME.COMMENT]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.COMMENT] ?? '',
      [ABOUT_ORDER_FIELD_NAME.ORDER_STATUS]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.ORDER_STATUS] ?? 0,
      [ABOUT_ORDER_FIELD_NAME.PRICE]: purchaseProducts[2],
      [ABOUT_ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT] ?? 0,
      [ABOUT_ORDER_FIELD_NAME.ID]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.ID] ?? null,
      [ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD]:
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD] ??
        deliveryTypeOptions[0]?.tid,
    };
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
      orderNumberTitle={
        purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.ORDER_NUMBER] || 0
      }
      purchaseProducts={purchaseProducts[0]}
      headersTable={headersTable}
      changeItem={changeItem}
      deleteItem={deleteItem}
      statusOrderSelect={statusOrderSelect}
      deliveryTypeOptions={deliveryTypeOptions}
    />
  );
}

const headersTable = [
  'Товары заказа',
  'Параметры',
  'Количество',
  'Итоговая цена',
];

const statusOrderSelect = [
  { id: 0, tid: 'Сформирован' },
  { id: 1, tid: 'Ожидает оплаты' },
  { id: 2, tid: 'Оплачено' },
  { id: 3, tid: 'Ожидает отправки' },
  { id: 4, tid: 'Отправлено' },
  { id: 5, tid: 'Получено' },
  { id: 6, tid: 'Отменено' },
  { id: 7, tid: 'Вовращен отправителю' },
  { id: 8, tid: 'Возвращен по гарантии' },
];
