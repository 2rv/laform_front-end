import React from 'react';
import { HomeComponent } from './home.component';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { pinnedMasterClassesUploadData } from './home.action';
import { HOME_STORE_NAME } from './home.constant';

export function HomeContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[HOME_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active,
  }));

  React.useEffect(() => {
    dispatch(pinnedMasterClassesUploadData(currentLang.toLowerCase()));
  }, []);
  return (
    <HomeComponent
      // isPending={isRequestPending(state.home)}
      // isError={isRequestError(state.home)}
      // isSuccess={isRequestSuccess(state.home)}
      // errorMessage={getRequestErrorMessage(state.home)}
      // pageLoading={pageLoading}
      // masterClassesListItems={getRequestData(state.pinnedMasterClasses, [])} // будут приходить данные можно и исправить
      articlesListItems={testArticlesListItems}
      masterClassesListItems={testMasterClassesListItems}
      sewingGoodsListItems={testSewingGoodsListItems}
    />
  );
}

export const testArticlesListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    like: true,
    date: '1 неделю назад',
    type: 2,
  },

  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    like: false,
    date: '1 неделю назад',
    type: 2,
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    like: false,
    date: '2 недели назад',
    type: 2,
  },
];
export const testMasterClassesListItems = [
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
export const testPatternsListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    complexity: 1,
    select: true,
    like: true,
    type: 3,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    complexity: 3,
    select: false,
    like: false,
    bestseller: true,
    type: 4,
    price: {
      min: 200,
      discount: null,
      max: 4150,
    },
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    complexity: 3,
    select: false,
    like: false,
    bestseller: true,
    type: 5,
    price: {
      min: 200,
      discount: 100,
      max: 900,
    },
  },
];
export const testSewingGoodsListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    select: true,
    like: true,
    type: 0,
    price: {
      min: 500,
      discount: 230,
      max: null,
    },
  },
  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    select: false,
    like: false,
    bestseller: true,
    type: 0,
    price: {
      min: 200,
      discount: null,
      max: 4150,
    },
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    select: false,
    like: false,
    bestseller: true,
    type: 0,
    price: {
      min: 200,
      discount: 100,
      max: 900,
    },
  },
];
