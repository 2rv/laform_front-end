import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { useDebounce } from '../../lib/common/hooks';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { redirect } from '../../main/navigation/navigation.core';
import { userOrdersLoadData } from './users-order.action';
import { UsersOrderComponent } from './users-order.component';
import { USERS_ORDER_STORE_NAME } from './users-order.constant';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function UsersOrderContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, user } = useSelector((state) => ({
    state: state[USERS_ORDER_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const debounce = useDebounce(inputValue, 500);
  const usersOrder = getRequestData(state.usersOrder);
  const itemsPerPage = 5;

  useEffect(() => {
    if (user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
    dispatch(userOrdersLoadData(inputValue.toLowerCase().trim(), itemsPerPage, currentPage));
  }, [debounce, currentPage]);

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <UsersOrderComponent
      isPending={isRequestPending(state.usersOrder)}
      isError={isRequestError(state.usersOrder)}
      isSuccess={isRequestSuccess(state.usersOrder)}
      errorMessage={getRequestErrorMessage(state.usersOrder)}
      pageLoading={pageLoading}
      headersTable={headersTable}
      products={usersOrder.purchases}
      totalPages={usersOrder.totalPages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      onChange={onChange}
      inputValue={inputValue}
    />
  );
}

const headersTable = [
  'ORDERS.TABLE.HEADER.ORDER_NUMBER',
  'ORDERS.TABLE.HEADER.ORDER_DETAILS',
  'ORDERS.TABLE.HEADER.DELIVERY_DATA',
  'ORDERS.TABLE.HEADER.PRODUCT_PRICE',
  'ORDERS.TABLE.HEADER.STATE',
];

const tableItems = [
  {
    name: '12345qwe',
    price: 999,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 1 },
    ],
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
  },
  {
    name: '1234jhyut',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 4 },
    ],
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
  },
  {
    name: '987656gh',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 4 },
    ],
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
  },
  {
    name: '567686767yui',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 4 },
    ],
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
  },
  {
    name: '132456789werdfg',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 4 },
    ],
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
  },
  {
    name: '5678654321345678',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 4 },
    ],
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
  },
];
