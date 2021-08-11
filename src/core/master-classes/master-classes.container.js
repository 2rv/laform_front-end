import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

import { masterClassesUploadData } from './master-classes.action';
import { MasterClassesComponent } from './master-classes.component';
import { TEST_MASTER_CLASSES_ITEMS, MASTER_CLASSES_STORE_NAME } from './master-classes.constant';
import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MasterClassesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, activePath } = useSelector((state) => ({
    state: state[MASTER_CLASSES_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  React.useEffect(() => {
    dispatch(masterClassesUploadData());
  }, []);

  return (
    <MasterClassesComponent
      isPending={isRequestPending(state.masterClasses)}
      isError={isRequestError(state.masterClasses)}
      isSuccess={isRequestSuccess(state.masterClasses)}
      errorMessage={getRequestErrorMessage(state.masterClasses)}
      items={getRequestData(state.masterClasses, [])}
      pageLoading={pageLoading}
      activePath={activePath}
    />
  );
}
