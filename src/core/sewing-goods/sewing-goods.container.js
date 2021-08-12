import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { sewingGoodsUploadData } from './sewing-goods.action';
import { TEST_SEWING_GOODS_ITEMS, SEWING_GOODS_STORE_NAME } from './sewing-goods.constant';
import { SewingGoodsComponent } from './sewing-goods.component';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function SewingGoodsContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, activePath } = useSelector((state) => ({
    state: state[SEWING_GOODS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  // React.useEffect(() => {
  //   dispatch(sewingGoodsUploadData());
  // }, []);

  return (
    <SewingGoodsComponent
      isPending={isRequestPending(state.sewingGoods)}
      isError={isRequestError(state.sewingGoods)}
      isSuccess={isRequestSuccess(state.sewingGoods)}
      errorMessage={getRequestErrorMessage(state.sewingGoods)}
      pageLoading={pageLoading}
      activePath={activePath}
      items={TEST_SEWING_GOODS_ITEMS}
    />
  );
}
