import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { myMasterClassesUploadData } from './my-master-classes.action';
import { MY_MASTER_CLASSES_STORE_NAME } from './my-master-classes.constant';
import { MyMasterClassesComponent } from './my-master-classes.component';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyMasterClassesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_MASTER_CLASSES_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(myMasterClassesUploadData());
  // }, []);

  return (
    <MyMasterClassesComponent
      isPending={isRequestPending(state.myMasterClasses)}
      isError={isRequestError(state.myMasterClasses)}
      isSuccess={isRequestSuccess(state.myMasterClasses)}
      errorMessage={getRequestErrorMessage(state.myMasterClasses)}
      pageLoading={pageLoading}
    />
  );
}
