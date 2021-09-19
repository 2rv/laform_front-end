import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { getQuery } from 'src/main/navigation';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { patternProductUploadData } from './patterns-product.action';
import { PATTERNS_PRODUCT_STORE_NAME } from './patterns-product.constant';
import { PatternsProductComponent } from './patterns-product.component';
import { addToBasket } from '../basket';

export function PatternsProductContainer() {
  const dispatch = useDispatch();
  const patternId = getQuery('id');

  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[PATTERNS_PRODUCT_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    dispatch(patternProductUploadData(currentLang, patternId));
  }, []);

  const addToCart = (inCart, values) => {
    if (inCart) dispatch(addToBasket(values, currentLang));
  };

  return (
    <PatternsProductComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      pageLoading={pageLoading}
      productInfo={getRequestData(state, false)}
      addToCart={addToCart}
    />
  );
}
