import React from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { CreateArticleComponent } from './create-article.component';
import { TEST_CREATE_ARTICLE_FIELDS__DATA, CREATE_ARTICLE_STORE_NAME } from './create-article.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function CreateArticleContainer() {
  const { state, pageLoading } = useSelector((state) => ({
    state: state[CREATE_ARTICLE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  return (
    <CreateArticleComponent
      isPending={isRequestPending(state.createArticle)}
      isError={isRequestError(state.createArticle)}
      isSuccess={isRequestSuccess(state.createArticle)}
      errorMessage={getRequestErrorMessage(state.createArticle)}
      pageLoading={pageLoading}
      fieldsData={TEST_CREATE_ARTICLE_FIELDS__DATA}
    />
  );
}
