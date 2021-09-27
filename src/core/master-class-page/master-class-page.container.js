import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuery } from 'src/main/navigation';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { purchasedMasterClassUploadData } from './master-class-page.action';
import { MasterClassPageComponent } from './master-class-page.component';
import { MASTER_CLASS_PAGE_STORE_NAME } from './master-class-page.constant';

export function MasterClassPageContainer() {
  const dispatch = useDispatch();
  const purchaseId = getQuery('id');
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MASTER_CLASS_PAGE_STORE_NAME].masterClass,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(purchasedMasterClassUploadData(purchaseId));
  }, []);

  return (
    <MasterClassPageComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      productInfo={getRequestData(state)}
    />
  );
}
