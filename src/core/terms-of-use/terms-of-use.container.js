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
} from 'src/main/store/store.service';
import {
  termsOfUseLoadData,
  termsOfUseUploadData,
} from './terms-of-use.action';
import { TermsOfUseComponent } from './terms-of-use.component';
import { TERMS_OF_USE_STORE_NAME } from './terms-of-use.constant';

export function TermsOfUseContainer() {
  const dispatch = useDispatch();
  const { state, user, saveState, isAuth, pageLoading } = useSelector(
    (state) => ({
      state: state[TERMS_OF_USE_STORE_NAME].termsOfUse,
      saveState: state[TERMS_OF_USE_STORE_NAME].save,
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }),
  );
  const [editorData, setEditorData] = useState(null);

  useEffect(() => {
    dispatch(termsOfUseLoadData());
  }, []);

  const termsOfUseUploadDataHandler = () => {
    dispatch(termsOfUseUploadData({ termsOfUse: editorData }));
  };

  const handleChangeEditorValue = (value) => {
    setEditorData(value);
  };

  if (isRequestPending(state)) {
    return <LoaderPrimary />;
  }

  if (isRequestPending(state)) {
    return <Spinner />;
  }

  return (
    <TermsOfUseComponent
      saveIsPending={isRequestPending(saveState)}
      saveIsSuccess={isRequestSuccess(saveState)}
      saveIsError={isRequestError(saveState)}
      saveErrorMessage={getRequestErrorMessage(saveState)}
      termsOfUseUploadDataHandler={termsOfUseUploadDataHandler}
      termsOfUse={getRequestData(state)?.termsOfUse}
      handleChangeEditorValue={handleChangeEditorValue}
      user={user}
      isAuth={isAuth}
    />
  );
}
