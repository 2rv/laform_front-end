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
    />
  );
}
