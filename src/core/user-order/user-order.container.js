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
import { userOrderUploadData } from './user-order.action';
import { USER_ORDER_STORE_NAME } from './user-order.constant';
import { UserOrderComponent } from './user-order.component';
import { ABOUT_ORDER_FIELD_NAME } from './user-order.type';
import { PURCHASE_STATUS_SELECT } from 'src/lib/basic-types';

export function UserOrderContainer() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { orderState, pageLoading } = useSelector((state) => ({
    orderState: state[USER_ORDER_STORE_NAME].order,

    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const { purchaseInfo, purchaseProducts } = getRequestData(orderState, {
    purchaseInfo: null,
    purchaseProducts: null,
  });

  const deliveryTypeOptions = [];

  useEffect(() => {
    dispatch(userOrderUploadData(query.id));
  }, []);

  const onSubmit = (values) => {
    // dispatch(
    //   updatePurchaseOrderStatus(query.id, {
    //     [ABOUT_ORDER_FIELD_NAME.ORDER_STATUS]: Number(
    //       values[ABOUT_ORDER_FIELD_NAME.ORDER_STATUS],
    //     ),
    //   }),
    // );
  };

  const initialValue = () => ({
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
    [ABOUT_ORDER_FIELD_NAME.PRICE]:
      purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.PRICE] ?? 0,
    [ABOUT_ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT]:
      purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT] ?? 0,
    [ABOUT_ORDER_FIELD_NAME.ID]:
      purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.ID] ?? null,
    [ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD]:
      purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD] ??
      deliveryTypeOptions[0]?.tid,
  });

  return (
    <UserOrderComponent
      isPending={isRequestPending(orderState)}
      isError={isRequestError(orderState)}
      isSuccess={isRequestSuccess(orderState)}
      errorMessage={getRequestErrorMessage(orderState)}
      pageLoading={pageLoading}
      headersTable={headersTable}
      onSubmit={onSubmit}
      initialValue={initialValue()}
      userOrderTitle={purchaseInfo?.[ABOUT_ORDER_FIELD_NAME.ORDER_NUMBER] || 0}
      purchaseProducts={purchaseProducts}
      statusOrderSelect={PURCHASE_STATUS_SELECT}
      deliveryTypeOptions={deliveryTypeOptions}
    />
  );
}

const headersTable = [
  'ORDER_NUMBER.TABLE.HEADER.ORDER_ITEMS',
  'ORDER_NUMBER.TABLE.HEADER.PARAMETERS',
  'ORDER_NUMBER.TABLE.HEADER.TOTAL_PRICE',
];
