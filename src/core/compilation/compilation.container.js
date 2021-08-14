import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { compilationUploadData } from './compilation.action';
import { CompilationComponent } from './compilation.component';
import {
  COMPILATION_SUB_MENU_ITEMS,
  TEST_COMPILATION_ITEMS,
  COMPILATION_STORE_NAME,
} from './compilation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function CompilationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, activePath } = useSelector((state) => ({
    state: state[COMPILATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  // React.useEffect(() => {
  //   dispatch(compilationUploadData());
  // }, []);

  return (
    <CompilationComponent
      isPending={isRequestPending(state.compilation)}
      isError={isRequestError(state.compilation)}
      isSuccess={isRequestSuccess(state.compilation)}
      errorMessage={getRequestErrorMessage(state.compilation)}
      pageLoading={pageLoading}
      activePath={activePath}
      subMenuItems={COMPILATION_SUB_MENU_ITEMS}
      items={TEST_COMPILATION_ITEMS}
    />
  );
}
