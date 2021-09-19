import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { getQuery } from 'src/main/navigation';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { masterClassArticleUploadData } from './master-class-article.action';
import { MasterClassArticleComponent } from './master-class-article.component';
import { MASTER_CLASS_ARTICLE_STORE_NAME } from './master-class-article.constant';

export function MasterClassArticleContainer() {
  const dispatch = useDispatch();
  const articleProductId = getQuery('id');
  const { state, pageLoading, currentLang } = useSelector((state) => ({
    state: state[MASTER_CLASS_ARTICLE_STORE_NAME].masterClassArticle,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    dispatch(masterClassArticleUploadData(currentLang, articleProductId));
  }, []);

  return (
    <MasterClassArticleComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      productInfo={getRequestData(state)}
      pageLoading={pageLoading}
    />
  );
}
