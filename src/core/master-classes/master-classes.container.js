import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
// import { PATTERNS_STORE_NAME } from './patterns.constant';  // заменить на мастер классы
import { MASTER_CLASSES_FIELD_NAME } from './master-classes.type';
import { MasterClassesComponent } from './master-classes.component';

export function MasterClassesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    // state: state[PATTERNS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const initialValue = () => {
    return {
      [MASTER_CLASSES_FIELD_NAME.CATEGORY]: 1,
      [MASTER_CLASSES_FIELD_NAME.TAGS]: 1,
      [MASTER_CLASSES_FIELD_NAME.FIND_INPUT]: '',
    };
  };

  const onSubmit = (values) => {
    console.log(values); // это ответ с формы если пользователь что то вводит или тыкает селект/инпут
  };

  return (
    <MasterClassesComponent
      //   isPending={isRequestPending(state.sewingGoods)}
      //   isError={isRequestError(state.sewingGoods)}
      //   isSuccess={isRequestSuccess(state.sewingGoods)}
      //   errorMessage={getRequestErrorMessage(state.sewingGoods)}
      //   pageLoading={pageLoading}
      initialValue={initialValue()}
      categoryOptions={categorySelectOptions}
      tagsOptions={tagsSelectOptions}
      listItems={testListItems}
      fieldName={MASTER_CLASSES_FIELD_NAME}
      onSubmit={onSubmit}
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
