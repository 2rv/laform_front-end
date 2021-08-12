import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { myLikesUploadData } from './my-likes.action';
import { MyLikesComponent } from './my-likes.component';
import {
  MY_LIKES_SUB_MENU_ITEMS,
  TEST_MY_LIKES_ITEMS,
  MY_LIKES_STORE_NAME
} from './my-likes.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyLikesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, activePath } = useSelector((state) => ({
    state: state[MY_LIKES_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  // React.useEffect(() => {
  //   dispatch(myLikesUploadData());
  // }, []);

  return (
    <MyLikesComponent
      isPending={isRequestPending(state.myLikes)}
      isError={isRequestError(state.myLikes)}
      isSuccess={isRequestSuccess(state.myLikes)}
      errorMessage={getRequestErrorMessage(state.myLikes)}
      pageLoading={pageLoading}
      activePath={activePath}
      items={TEST_MY_LIKES_ITEMS}
      menuItems={MY_LIKES_SUB_MENU_ITEMS}
    />
  );
}
