import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { faqUploadData, fetchFaqData } from './faq.action';
import { FaqComponent } from './faq.component';
import { FAQ_STORE_NAME } from './faq.constant';

export function FaqContainer() {
  const dispatch = useDispatch();
  const { state, saveState, user, isAuth, pageLoading } = useSelector(
    (state) => ({
      state: state[FAQ_STORE_NAME].faq,
      saveState: state[FAQ_STORE_NAME].save,
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }),
  );
  const [editorData, setEditorData] = useState(null);

  useEffect(() => {
    dispatch(fetchFaqData());
  }, []);

  const faqUsUploadDataHandler = () => {
    dispatch(faqUploadData({ faq: editorData }));
  };

  const handleChangeEditorValue = (value) => {
    setEditorData(value);
  };

  if (pageLoading) {
    return <LoaderPrimary />;
  }

  if (isRequestPending(state)) {
    return <Spinner />;
  }

  return (
    <FaqComponent
      saveIsPending={isRequestPending(saveState)}
      saveIsSuccess={isRequestSuccess(saveState)}
      saveIsError={isRequestError(saveState)}
      saveErrorMessage={getRequestErrorMessage(saveState)}
      faqUsUploadDataHandler={faqUsUploadDataHandler}
      faq={getRequestData(state)?.faq}
      handleChangeEditorValue={handleChangeEditorValue}
      user={user}
      isAuth={isAuth}
    />
  );
}
