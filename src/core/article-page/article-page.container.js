import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuery } from 'src/main/navigation';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { articlePageUploadData } from './article-page.action';
import { ArticlePageComponent } from './article-page.component';
import { ARTICLE_PAGE_STORE_NAME } from './article-page.constant';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';

export function ArticlePageContainer() {
  const dispatch = useDispatch();
  const articleProductId = getQuery('id');
  const { state, pageLoading, isAuth } = useSelector((state) => ({
    state: state[ARTICLE_PAGE_STORE_NAME].articlePage,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,

    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  useEffect(() => {
    dispatch(articlePageUploadData(articleProductId, isAuth));
  }, [articleProductId]);

  return (
    <ArticlePageComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      productInfo={getRequestData(state)}
      pageLoading={pageLoading}
    />
  );
}
