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
import { LOGIN_ROUTE_PATH } from '../login';

export function PatternsPageContainer() {
  const id = getQuery('id');
  const dispatch = useDispatch();
  const { pageLoading, isAuth, productState, sendMailState } = useSelector(
    (state) => ({
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      isAuth: state[AUTH_STORE_NAME].logged,
      productState: state[PATTERNS_PAGE_STORE_NAME].product,
      sendMailState: state[PATTERNS_PAGE_STORE_NAME].sendFilesToMail,
    }),
  );
  useEffect(() => {
    if (isAuth) dispatch(patternsPageUploadData(id));
    else redirect(LOGIN_ROUTE_PATH);
  }, []);
  return (
    <PatternsPageComponent
      pageLoading={pageLoading}
      pending={isRequestPending(productState)}
      error={isRequestError(productState)}
      errorMessage={getRequestErrorMessage(productState)}
      productData={getRequestData(productState, false)}
      mailPending={isRequestPending(sendMailState)}
      mailSuccess={isRequestSuccess(sendMailState)}
    />
  );
}
