

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { editCompilationUploadData } from './edit-compilation.action';
import { EditCompilationComponent } from './edit-compilation.component';
import { TEST_EDIT_COMPILATION_ITEMS, EDIT_COMPILATION_STORE_NAME } from './edit-compilation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function EditCompilationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[EDIT_COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(editCompilationUploadData());
  // }, []);

  return (
    <EditCompilationComponent
      isPending={isRequestPending(state.editCompilation)}
      isError={isRequestError(state.editCompilation)}
      isSuccess={isRequestSuccess(state.editCompilation)}
      errorMessage={getRequestErrorMessage(state.editCompilation)}
      pageLoading={pageLoading}
      {...TEST_EDIT_COMPILATION_ITEMS}
    />
  );
}

