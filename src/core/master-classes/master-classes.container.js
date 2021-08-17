import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { masterClassesUploadData } from './master-classes.action';
import { MasterClassesComponent } from './master-classes.component';
import { MASTER_CLASSES_FIELD_NAME } from './master-classes.type';
import { MASTER_CLASSES_STORE_NAME } from './master-classes.constant';

export function MasterClassesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[MASTER_CLASSES_STORE_NAME].masterClasses,
    currentLang: state[LANG_STORE_NAME].active,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const initialValue = () => {
    return {
      [MASTER_CLASSES_FIELD_NAME.CATEGORY]: 1,
      [MASTER_CLASSES_FIELD_NAME.TAGS]: 1,
      [MASTER_CLASSES_FIELD_NAME.FIND_INPUT]: '',
    };
  };

  const masterClassesFormFilterGetInitialValue = () => {
    //   const rawData = getRequestData(changeDeliveryInfo, null);
    //   if (!rawData) {
    //     return {
    //       [MASTER_CLASSES_FILTER_FIELD_NAME.CATEGORY]:
    //         MASTER_CLASSES_FILTER_CATEGORY_OPTIONS[0].id,
    //       [MASTER_CLASSES_FILTER_FIELD_NAME.TAGS]:
    //         MASTER_CLASSES_FILTER_TAGS_OPTIONS[0].id,
    //     };
  };

  useEffect(() => {
    dispatch(masterClassesUploadData(currentLang.toLowerCase()));
  }, []);

  const onSubmit = (values) => {
    console.log(values); // это ответ с формы если пользователь что то вводит или тыкает селект/инпут
  };

  return (
    <MasterClassesComponent
      // isPending={isRequestPending(state)}
      // isError={isRequestError(state)}
      // isSuccess={isRequestSuccess(state)}
      // errorMessage={getRequestErrorMessage(state)}
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
