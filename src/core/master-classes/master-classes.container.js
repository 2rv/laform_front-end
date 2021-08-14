import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { masterClassesUploadData } from './master-classes.action';
import { MasterClassesComponent } from './master-classes.component';
import { TEST_MASTER_CLASSES_ITEMS, MASTER_CLASSES_STORE_NAME } from './master-classes.constant';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MasterClassesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, activePath, currentLang } = useSelector((state) => ({
    state: state[MASTER_CLASSES_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    activePath: state[NAVIGATION_STORE_NAME].activePath,
    currentLang: state[LANG_STORE_NAME].active,
  }));

  React.useEffect(() => {
    dispatch(masterClassesUploadData(currentLang.toLowerCase()));
    console.log(currentLang.toLowerCase());
  }, []);

  return (
    <MasterClassesComponent
      isPending={isRequestPending(state.masterClasses)}
      isError={isRequestError(state.masterClasses)}
      isSuccess={isRequestSuccess(state.masterClasses)}
      errorMessage={getRequestErrorMessage(state.masterClasses)}
      items={getRequestData(state.masterClasses, [])}
      pageLoading={pageLoading}
      activePath={activePath}
    />
  );
}

export const categorySelectOptions = [
  {
    id: 1,
    tid: 'Категория 1',
  },
  {
    id: 2,
    tid: 'Категория 2',
  },
];
export const tagsSelectOptions = [
  {
    id: 1,
    tid: 'Популярные',
  },
  {
    id: 2,
    tid: 'Самые дорогие',
  },
  {
    id: 3,
    tid: 'Самые дешевые',
  },
];
export const testListItems = [
  {
    id: 1,
    name: 'Мастер-класс по пошиву мужских брюк 1003',
    image: '/static/test/popular-gods-1.png',
    bestseller: true,
    select: false,
    like: true,
    type: 1,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 2,
    name: 'Инструкция по пошиву Комбинезон 0717',
    image: '/static/test/popular-gods-2.png',
    bestseller: true,
    select: true,
    like: false,
    type: 1,
    price: {
      min: 500,
      discount: null,
      max: 1000,
    },
  },
  {
    id: 3,
    name: 'Мастер-класс по пошиву Жакета 0305',
    image: '/static/test/popular-gods-3.png',
    bestseller: false,
    select: true,
    like: true,
    type: 1,
    price: {
      min: 500,
      discount: 230,
      max: 1000,
    },
  },
];
