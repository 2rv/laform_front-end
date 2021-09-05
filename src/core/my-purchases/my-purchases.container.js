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
      itemsTable={filterByType(itemsTable, activeTab)}
    />
  );
}

const tabItems = [
  { name: 'Мастер-классы', type: 0 },
  { name: 'Полезные статьи', type: 1 },
];

const itemsTable = [
  {
    name: 'Мастер-класс комбинезон',
    image:
      'https://images.unsplash.com/photo-1613555612473-90cf723dfb60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    otherParams: [{ name: 'Программа', value: 'Удалённая' }],
    type: 0,
  },
  {
    name: 'Мастер-класс по пошиву Жакета 0305',
    image:
      'https://images.unsplash.com/photo-1613555612473-90cf723dfb60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    otherParams: [{ name: 'Программа', value: 'Удалённая' }],
    type: 0,
  },
  {
    name: 'Выкройка Пальто 1250 Цк с рукавом',
    image:
      'https://images.unsplash.com/photo-1613555612473-90cf723dfb60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    params: [
      { name: 'Формат', value: 'Электронный' },
      { name: 'Размер', value: '15/70 250' },
    ],
    type: 1,
  },
  {
    name: 'Выкройка Пальто 1250 Цк с рукавом',
    image:
      'https://images.unsplash.com/photo-1613555612473-90cf723dfb60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    params: [
      { name: 'Формат', value: 'Электронный' },
      { name: 'Размер', value: '15/70 250' },
    ],
    type: 1,
  },
];
