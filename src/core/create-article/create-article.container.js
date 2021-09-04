import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { CreateArticleComponent } from './create-article.component';
import {
  TEST_CREATE_ARTICLE_FIELDS__DATA,
  CREATE_ARTICLE_STORE_NAME,
} from './create-article.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function CreateArticleContainer({ children, disabled }) {
  const { state, pageLoading, user } = useSelector((state) => ({
    state: state[CREATE_ARTICLE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
  }));

  useEffect(() => {
    if (user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
  }, []);

  return (
    <>
      <CreateArticleComponent
        isPending={isRequestPending(state.createArticle)}
        isError={isRequestError(state.createArticle)}
        isSuccess={isRequestSuccess(state.createArticle)}
        errorMessage={getRequestErrorMessage(state.createArticle)}
        pageLoading={pageLoading}
        fieldsData={TEST_CREATE_ARTICLE_FIELDS__DATA}
        children={children}
        disabled={disabled}
      />
    </>
  );
}
