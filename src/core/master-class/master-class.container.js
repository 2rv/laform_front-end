import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { masterClassUploadData } from './master-class.action';
import { TEST_MASTER_CLASS_DATA, MASTER_CLASS_STORE_NAME } from './master-class.constant';
import { MasterClassComponent } from './master-class.component';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MasterClassContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MASTER_CLASS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(masterClassUploadData());
  // }, []);

  return (
    <MasterClassComponent
      isPending={isRequestPending(state.masterClass)}
      isError={isRequestError(state.masterClass)}
      isSuccess={isRequestSuccess(state.masterClass)}
      errorMessage={getRequestErrorMessage(state.masterClass)}
      masterClass={getRequestData(state.masterClass, [])}
      pageLoading={pageLoading}
      {...TEST_MASTER_CLASS_DATA}
    />
  );
}
