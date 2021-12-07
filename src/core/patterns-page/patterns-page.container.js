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
import { patternsPageUploadData } from './patterns-page.action';
import { PATTERNS_PAGE_STORE_NAME } from './patterns-page.constant';
import { PatternsPageComponent } from './patterns-page.component';
import { getQuery, redirect } from 'src/main/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { HOME_ROUTE_PATH } from '../home';

export function PatternsPageContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, isAuth } = useSelector((state) => ({
    state: state[PATTERNS_PAGE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    isAuth: state[AUTH_STORE_NAME].logged,
  }));
  const id = getQuery('id');

  useEffect(() => {
    if (isAuth) {
      dispatch(patternsPageUploadData(id));
    } else {
      redirect(HOME_ROUTE_PATH);
    }
  }, []);

  return (
    <PatternsPageComponent
      isPending={isRequestPending(state.product)}
      isError={isRequestError(state.product)}
      isSuccess={isRequestSuccess(state.product)}
      errorMessage={getRequestErrorMessage(state.product)}
      isPdfPending={isRequestPending(state.productPdf)}
      isPdfSuccess={isRequestSuccess(state.productPdf)}
      pageLoading={pageLoading}
      productData={getRequestData(state.product, false)}
    />
  );
}
