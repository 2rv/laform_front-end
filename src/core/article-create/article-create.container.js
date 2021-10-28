import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  createArticlePreUploadData,
  updateArticlePreUpload,
  ArticleLoadData,
} from './article-create.action';
import { CreateArticleComponent } from './article-create.component';
import { CREATE_ARTICLE_STORE_NAME } from './article-create.constant';
import { ARTICLE_FIELD_NAME } from './article-create.type';
import { formValidation } from './article-create.validation';
import { getQuery } from 'src/main/navigation';
import { useEffect } from 'react';

export function CreateArticleContainer() {
  const dispatch = useDispatch();
  const ArticleId = getQuery('id');

  const { state, pageLoading, productState, updateArticleState } = useSelector(
    (state) => ({
      state: state[CREATE_ARTICLE_STORE_NAME].createArticle,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
      productState: state[CREATE_ARTICLE_STORE_NAME].product,
      updateArticleState: state[CREATE_ARTICLE_STORE_NAME].updateArticle,
    }),
  );

  useEffect(() => {
    if (Boolean(ArticleId)) {
      dispatch(ArticleLoadData(ArticleId));
    }
  }, [ArticleId]);

  const onSubmit = (formValues) => {
    if (Boolean(ArticleId)) {
      dispatch(updateArticlePreUpload(ArticleId, formValues));
    } else {
      dispatch(createArticlePreUploadData(formValues));
    }
  };

  const initialValues = () => {
    const data = getRequestData(productState, {
      [ARTICLE_FIELD_NAME.NAME]: '',
      [ARTICLE_FIELD_NAME.MODIFIER]: '',
      [ARTICLE_FIELD_NAME.CATEGORIES]: [],
      [ARTICLE_FIELD_NAME.IMAGES]: [],
      [ARTICLE_FIELD_NAME.RECOMMENDATIONS]: [],
    });
    return data;
  };

  return (
    <CreateArticleComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      //-------------
      initialValues={initialValues()}
      onSubmit={onSubmit}
      validation={formValidation}
      isEdit={Boolean(ArticleId)}
      updateIsPending={isRequestPending(updateArticleState)}
      updateIsError={isRequestError(updateArticleState)}
      updateIsSuccess={isRequestSuccess(updateArticleState)}
      updateErrorMessage={getRequestErrorMessage(updateArticleState)}
    />
  );
}
