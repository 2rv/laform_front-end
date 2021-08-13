import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { productUploadData } from './product.action';
import { TEST_PRODUCT_DATA, PRODUCT_STORE_NAME } from './product.constant';
import { ProductComponent } from './product.component';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function ProductContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[PRODUCT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(productUploadData());
  // }, []);

  return (
    <ProductComponent
      isPending={isRequestPending(state.product)}
      isError={isRequestError(state.product)}
      isSuccess={isRequestSuccess(state.product)}
      errorMessage={getRequestErrorMessage(state.product)}
      pageLoading={pageLoading}
      {...TEST_PRODUCT_DATA}
      listItems={testSewingGoodsListItems}
      comments={testCommentsItems}
    />
  );
}

export const testSewingGoodsListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    select: true,
    like: true,
    patternType: 1,
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
    patternType: 2,
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
    patternType: 1,
    price: {
      min: 200,
      discount: 100,
      max: 900,
    },
  },
];
export const testCommentsItems = [
  {
    me: false,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей.
  	  Очень удгобная и хорошая вещь, спасибо! Хотелось бы сказать что вещь правда хороашая и дошла очень быстро, буду заказывать ещё. Из минусов – дороговато, всё таки.`,
  },
  {
    me: false,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
  },
  {
    me: true,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
  },
];
