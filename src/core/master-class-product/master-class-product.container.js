import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { masterClassProductUploadData } from './master-class-product.action';
import { MASTER_CLASS_PRODUCT_STORE_NAME } from './master-class-product.constant';
import { MasterClassProductComponent } from './master-class-product.component';
import { getQuery } from 'src/main/navigation';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { addToBasket } from '../basket';

export function MasterClassProductContainer() {
  const dispatch = useDispatch();
  const masterClassId = getQuery('id');

  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[MASTER_CLASS_PRODUCT_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    dispatch(masterClassProductUploadData(currentLang, masterClassId));
  }, []);

  const addToCart = (inCart, values) => {
    if (inCart) dispatch(addToBasket(values, currentLang));
  };

  return (
    <MasterClassProductComponent
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
