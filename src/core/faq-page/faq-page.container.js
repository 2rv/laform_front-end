import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { faqPageUploadData } from './faq-page.action';
import { FaqPageComponent } from './faq-page.component';
import { FAQ_PAGE_STORE_NAME } from './faq-page.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function FaqPageContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[FAQ_PAGE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(faqPageUploadData());
  // }, []);

  return (
    <FaqPageComponent
      isPending={isRequestPending(state.faqPage)}
      isError={isRequestError(state.faqPage)}
      isSuccess={isRequestSuccess(state.faqPage)}
      errorMessage={getRequestErrorMessage(state.faqPage)}
      pageLoading={pageLoading}
    />
  );
}
