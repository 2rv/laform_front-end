import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { articlePageUploadData } from './article-page.action';
import { ArticlePageComponent } from './article-page.component';
import { TEST_ARTICLE_PAGE_DATA, ARTICLE_PAGE_STORE_NAME } from './article-page.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function ArticlePageContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ARTICLE_PAGE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(articlePageUploadData());
  // }, []);

  return (
    <ArticlePageComponent
      isPending={isRequestPending(state.articlePage)}
      isError={isRequestError(state.articlePage)}
      isSuccess={isRequestSuccess(state.articlePage)}
      errorMessage={getRequestErrorMessage(state.articlePage)}
      pageLoading={pageLoading}
      {...TEST_ARTICLE_PAGE_DATA}
    />
  );
}

