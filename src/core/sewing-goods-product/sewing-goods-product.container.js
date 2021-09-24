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
import { sewingGoodsProductUploadData } from './sewing-goods-product.action';
import { SEWING_GOODS_PRODUCT_STORE_NAME } from './sewing-goods-product.constant';
import { SewingGoodsProductComponent } from './sewing-goods-product.component';
import { addToBasket } from '../basket';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';

export function SewingGoodsProductContainer() {
  const dispatch = useDispatch();
  const sewingGoodsProductId = getQuery('id');

  const { state, pageLoading, currentLang, logged } = useSelector((state) => ({
    state: state[SEWING_GOODS_PRODUCT_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    logged: state[AUTH_STORE_NAME].logged,
  }));

  useEffect(() => {
    dispatch(
      sewingGoodsProductUploadData(currentLang, sewingGoodsProductId, logged),
    );
  }, []);

  const addToCart = (inCart, values) => {
    if (inCart) dispatch(addToBasket(values, currentLang));
  };

  return (
    <SewingGoodsProductComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      pageLoading={pageLoading}
      addToCart={addToCart}
      productInfo={getRequestData(state, false)}
    />
  );
}
