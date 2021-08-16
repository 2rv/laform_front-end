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
import { myPurchasesUploadData } from './my-purchases.action';
import { MY_PURCHASES_STORE_NAME } from './my-purchases.constant';
import { MyPurchasesComponent } from './my-purchases.component';

export function MyPurchasesContainer() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_PURCHASES_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    //   dispatch(myPurchasesUploadData());
  }, []);

  return (
    <MyPurchasesComponent
      isPending={isRequestPending(state.myPurchases)}
      isError={isRequestError(state.myPurchases)}
      isSuccess={isRequestSuccess(state.myPurchases)}
      errorMessage={getRequestErrorMessage(state.myPurchases)}
      pageLoading={pageLoading}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabItems={tabItems}
      headersTable={activeTab === 0 && headersTable}
      itemsTable={filterByType(itemsTable, activeTab)}
    />
  );
}

const tabItems = [
  { name: 'Популярные товары', type: 0 },
  { name: 'Лучшие мастер-классы', type: 1 },
  { name: 'Лучшие полезные статьи', type: 2 },
];

const headersTable = [
  'название',
  'параметры',
  //   'данные доставки',
  'цена товара',
  'состояние',
];
const itemsTable = [
  {
    name: 'Товары для шитья',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 1 },
    ],
    status: 'Доставленно',
    type: 0,
  },
  {
    name: 'Товары для шитья',
    price: 320000,
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Цвет', value: 'Зелёный' },
      { name: 'Размер', value: '15/70 250' },
      { name: 'Категория', value: 'Верхняя одежда' },
      { name: 'Количество', value: 1 },
    ],
    status: 'Доставленно',
    type: 0,
  },
  {
    name: 'Инструкция по пошиву Комбинезон 0717',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    otherParams: [{ name: 'Программа', value: 'Удалённая' }],
    type: 1,
  },
  {
    name: 'Мастер-класс по пошиву Жакета 0305',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    otherParams: [{ name: 'Программа', value: 'Удалённая' }],
    type: 1,
  },
  {
    name: 'Выкройка Пальто 1250 Цк с рукавом',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Формат', value: 'Электронный' },
      { name: 'Размер', value: '15/70 250' },
    ],
    type: 2,
  },
  {
    name: 'Выкройка Пальто 1250 Цк с рукавом',
    image:
      'https://cs7.pikabu.ru/post_img/big/2018/04/07/0/1523049466170621730.png',
    params: [
      { name: 'Формат', value: 'Электронный' },
      { name: 'Размер', value: '15/70 250' },
    ],
    type: 2,
  },
];
