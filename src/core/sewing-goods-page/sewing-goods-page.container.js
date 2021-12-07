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
import { AUTH_STORE_NAME } from 'src/lib/common/auth';

export function SewingGoodsPageContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, isAuth } = useSelector((state) => ({
    state: state[SEWING_GOODS_PAGE_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));
  const id = getQuery('id');

  useEffect(() => {
    if (isAuth) {
      dispatch(sewingGoodsPageUploadData(id));
    } else {
      redirect(HOME_ROUTE_PATH);
    }
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
