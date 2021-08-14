import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { createProductUploadData } from './create-product.action';
import { CreateProductComponent } from './create-product.component';
import {
  TEST_CREATE_PRODUCT_FIELDS__DATA,
  TEST_CREATE_PRODUCT_IMAGES__DATA,
  CREATE_PRODUCT_STORE_NAME,
} from './create-product.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';


export function CreateProductContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[CREATE_PRODUCT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(createProductUploadData());
  // }, []);

  return (
    <CreateProductComponent
      isPending={isRequestPending(state.createProduct)}
      isError={isRequestError(state.createProduct)}
      isSuccess={isRequestSuccess(state.createProduct)}
      errorMessage={getRequestErrorMessage(state.createProduct)}
      pageLoading={pageLoading}
      imagesData={TEST_CREATE_PRODUCT_IMAGES__DATA}
      fieldsData={TEST_CREATE_PRODUCT_FIELDS__DATA}
    />
  );
}
