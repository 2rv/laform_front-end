import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { orderNumberUploadData } from './order-number.action';
import { ORDER_NUMBER_STORE_NAME } from './order-number.constant';
import { OrderNumberComponent } from './order-number.component';
import { ABOUT_ORDER_FIELD_NAME } from './order-number.type';

export function OrderNumberContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, user } = useSelector((state) => ({
    state: state[ORDER_NUMBER_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
  }));

  const orderNumberDetails = getRequestData(state.orderNumber);

  useEffect(() => {
    if (user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
    dispatch(orderNumberUploadData());
  }, []);

  const onSubmit = (values) => {
    console.log('Values: ', values);
  };

  const initialValue = () => ({
    [ABOUT_ORDER_FIELD_NAME.FULL_NAME]: orderNumberDetails.fullName,
    [ABOUT_ORDER_FIELD_NAME.CURRENT_CITY]: orderNumberDetails.city,
    [ABOUT_ORDER_FIELD_NAME.CONVENIENT_DELIVERY_METHOD]: 0,
    [ABOUT_ORDER_FIELD_NAME.CONVENIENT_PAYMENT_METHOD]: 0,
    [ABOUT_ORDER_FIELD_NAME.CONTACT_PHONE_NUMBER]:
      orderNumberDetails.phoneNumber,
    [ABOUT_ORDER_FIELD_NAME.ORDER_NOTE]: orderNumberDetails.comment,
    [ABOUT_ORDER_FIELD_NAME.ORDER_STATUS]: 0,
    [ABOUT_ORDER_FIELD_NAME.PROMO_CODE]: '',
  });

  return (
    <OrderNumberComponent
      isPending={isRequestPending(state.orderNumber)}
      isError={isRequestError(state.orderNumber)}
      isSuccess={isRequestSuccess(state.orderNumber)}
      errorMessage={getRequestErrorMessage(state.orderNumber)}
      pageLoading={pageLoading}
      orderNumberDetails={orderNumberDetails}
      headersTable={headersTable}
      onSubmit={onSubmit}
      initialValue={initialValue()}
    />
  );
}

const headersTable = ['Товары заказа', 'Параметры', 'Итоговая цена'];
const itemsTable = [
  {
    name: 'Батист Макс Мара Горохи',
    price: 999,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
    ],
  },
  {
    name: 'Хлопок Том Форд',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 4 },
    ],
  },
];
