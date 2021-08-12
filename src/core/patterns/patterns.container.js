import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { patternsUploadData } from './patterns.action';
import { PATTERNS_SUB_MENU_ITEMS, PATTERNS_STORE_NAME } from './patterns.constant';
import { PatternsComponent } from './patterns.component';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function PatternsContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, activePath } = useSelector((state) => ({
    state: state[PATTERNS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  // React.useEffect(() => {
  //   dispatch(patternsUploadData());
  // }, []);

  return (
    <PatternsComponent
      isPending={isRequestPending(state.patterns)}
      isError={isRequestError(state.patterns)}
      isSuccess={isRequestSuccess(state.patterns)}
      errorMessage={getRequestErrorMessage(state.patterns)}
      pageLoading={pageLoading}
      activePath={activePath}
      items={testPatternItems}
      menuItems={PATTERNS_SUB_MENU_ITEMS}
    />
  );
}

export const testPatternItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    complexity: 1,
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
    complexity: 3,
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
    complexity: 3,
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
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',
    complexity: 3,
    select: false,
    like: false,
    bestseller: true,
    patternType: 2,
    price: {
      min: 200,
      discount: 100,
      max: 900,
    },
  },
];
