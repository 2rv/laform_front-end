import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { ordersLoadData } from './orders-list.action';
import { OrdersListComponent } from './orders-list.component';
import { ORDERS_LIST_STORE_NAME } from './orders-list.constant';

export function OrdersListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ORDERS_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const orders = getRequestData(state.ordersList, []);
  const filteredTableItems = orders;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  useEffect(() => {
    dispatch(ordersLoadData());
  }, []);

  return (
    <OrdersListComponent
      isPending={isRequestPending(state.ordersList)}
      isError={isRequestError(state.ordersList)}
      isSuccess={isRequestSuccess(state.ordersList)}
      errorMessage={getRequestErrorMessage(state.ordersList)}
      pageLoading={pageLoading}
      products={filteredTableItems.slice(startIndex, startIndex + itemsPerPage)}
      headersTable={headersTable}
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    />
  );
}

const headersTable = [
  'Номер заказа',
  'Детали заказа',
  'Данные доставки',
  'Цена товара',
  'Состояние',
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
];
