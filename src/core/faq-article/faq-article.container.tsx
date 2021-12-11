import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';
import { USER_ROLE } from 'src/lib/common/auth';
import { FAQ_ARTICLE_STORE_NAME } from './faq-article.constant';
import { saveDataAction, loadDataAction } from './faq-article.action';
import { FaqArticleComponent } from './faq-article.component';

interface FaqArticleContainerProps {
  name: string;
  titleTid?: string;
}

export function FaqArticleContainer(props: FaqArticleContainerProps) {
  const dispatch = useDispatch();
  const { name, titleTid } = props;
  const { save, load, user, isAuth, pageLoading } = useSelector(
    (state: any) => ({
      load: state[FAQ_ARTICLE_STORE_NAME].load,
      save: state[FAQ_ARTICLE_STORE_NAME].save,
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }),
  );
  const [editorData, handleChange] = useState(false);
  useEffect(() => {
    dispatch(loadDataAction(name));
  }, [name]);

  const handleSave = () => {
    dispatch(saveDataAction(editorData, name));
    handleChange(false);
  };

  return (
    <FaqArticleComponent
      pageLoading={pageLoading}
      isAdmin={isAuth && user.role === USER_ROLE.ADMIN}
      handleSave={handleSave}
      handleChange={handleChange}
      pending={isRequestPending(save) || isRequestPending(load)}
      error={isRequestError(load) || isRequestError(save)}
      errorMessage={
        getRequestErrorMessage(load) || getRequestErrorMessage(save)
      }
      success={isRequestSuccess(save)}
      data={getRequestData(load, false)}
      disabled={!editorData}
      titleTid={titleTid}
    />
  );
}
