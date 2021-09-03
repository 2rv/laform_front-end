import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { createArticlePreUploadData } from './article-create.action';
import { CreateArticleComponent } from './article-create.component';
import { CREATE_ARTICLE_STORE_NAME } from './article-create.constant';
import { ARTICLE_FIELD_NAME } from './article-create.type';
import { formValidation } from './article-create.validation';

export function CreateArticleContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[CREATE_ARTICLE_STORE_NAME].createArticle,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const onSubmit = (formValues) => {
    dispatch(createArticlePreUploadData(formValues));
  };

  const initialValues = () => ({
    [ARTICLE_FIELD_NAME.NAME]: '',
    [ARTICLE_FIELD_NAME.MODIFIER]: '',
    [ARTICLE_FIELD_NAME.CATEGORIES]: [],
    [ARTICLE_FIELD_NAME.IMAGES]: [],
  });

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
    />
  );
}
