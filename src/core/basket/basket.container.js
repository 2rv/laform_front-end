import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { basketUploadData } from './basket.action';
import { BasketComponent } from './basket.component';
import { BASKET_STORE_NAME } from './basket.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function BasketContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[BASKET_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(basketUploadData());
  // }, []);

  return (
    <BasketComponent
      isPending={isRequestPending(state.basket)}
      isError={isRequestError(state.basket)}
      isSuccess={isRequestSuccess(state.basket)}
      errorMessage={getRequestErrorMessage(state.basket)}
      pageLoading={pageLoading}
    />
  );
}
