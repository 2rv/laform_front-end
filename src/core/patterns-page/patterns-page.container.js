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
import { getQuery } from 'src/main/navigation';

export function PatternsPageContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[PATTERNS_PAGE_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const id = getQuery('id');

  useEffect(() => {
    dispatch(patternsPageUploadData(id));
  }, []);

  return (
    <PatternsPageComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      pageLoading={pageLoading}
      productData={getRequestData(state, false)}
    />
  );
}
