import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { filterByType } from '../../lib/common/filter-list-card';
import { ordersUploadData } from './orders.action';
import { OrdersComponent } from './orders.component';
import { ORDERS_STORE_NAME } from './orders.constant';

export function OrdersContainer() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ORDERS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    //   dispatch(ordersUploadData());
  }, []);

  return (
    <OrdersComponent
      isPending={isRequestPending(state.orders)}
      isError={isRequestError(state.orders)}
      isSuccess={isRequestSuccess(state.orders)}
      errorMessage={getRequestErrorMessage(state.orders)}
      pageLoading={pageLoading}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabItems={tabItems}
      itemsTable={filterByType(itemsTable, activeTab)}
      headersTable={headersTable}
    />
  );
}

const tabItems = [
  { name: 'Товары для шитья', type: 0 },
  { name: 'Выкройки печатные', type: 1 },
];

const headersTable = [
  'название',
  'параметры',
  'данные доставки',
  'цена товара',
  'состояние',
];
const itemsTable = [
  {
    name: 'Батист Макс Мара Горохи',
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
    type: 0,
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
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
    type: 0,
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
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
    type: 1,
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
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
    type: 1,
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
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
    type: 1,
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
    otherParams: [
      { name: 'ФИО', value: 'Зинченко Илья' },
      { name: 'Город', value: 'Масква' },
      { name: 'Адрес доставки', value: 'Ул. Ленина 25А' },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      { name: 'Контактный телефон', value: '+7 000 000 00 00' },
    ],
    status: 'Доставленно',
    type: 1,
  },
];
