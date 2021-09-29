import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { sewingGoodsPageUploadData } from './sewing-goods-page.action';
import { SEWING_GOODS_PAGE_STORE_NAME } from './sewing-goods-page.constant';
import { SewingGoodsPageComponent } from './sewing-goods-page.component';
import { getQuery } from 'src/main/navigation';

export function SewingGoodsPageContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SEWING_GOODS_PAGE_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const id = getQuery('id');

  useEffect(() => {
    dispatch(sewingGoodsPageUploadData(id));
  }, []);

  return (
    <SewingGoodsPageComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      pageLoading={pageLoading}
      productData={getRequestData(state, false)}
    />
  );
}
