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
  privacyPolicyLoadData,
  privacyPolicyUploadData,
} from './privacy-policy.action';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PRIVACY_POLICY_STORE_NAME } from './privacy-policy.constant';

export function PrivacyPolicyContainer() {
  const dispatch = useDispatch();
  const { state, user, saveState, isAuth, pageLoading } = useSelector(
    (state) => ({
      state: state[PRIVACY_POLICY_STORE_NAME].privacyPolicy,
      saveState: state[PRIVACY_POLICY_STORE_NAME].save,
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }),
  );
  const [editorData, setEditorData] = useState(null);

  useEffect(() => {
    dispatch(privacyPolicyLoadData());
  }, []);

  const privacyPolicyUploadDataHandler = () => {
    dispatch(privacyPolicyUploadData({ privacyPolicy: editorData }));
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
    <PrivacyPolicyComponent
      saveIsPending={isRequestPending(saveState)}
      saveIsSuccess={isRequestSuccess(saveState)}
      saveIsError={isRequestError(saveState)}
      saveErrorMessage={getRequestErrorMessage(saveState)}
      privacyPolicyUploadDataHandler={privacyPolicyUploadDataHandler}
      privacyPolicy={getRequestData(state)?.privacyPolicy}
      handleChangeEditorValue={handleChangeEditorValue}
      user={user}
      isAuth={isAuth}
    />
  );
}
