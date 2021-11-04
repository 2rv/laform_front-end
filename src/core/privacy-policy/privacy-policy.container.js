import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';
import { getRequestData } from 'src/main/store/store.service';
import { privacyPolicyLoadData, privacyPolicyUploadData } from './privacy-policy.action';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PRIVACY_POLICY_STORE_NAME } from './privacy-policy.constant';

export function PrivacyPolicyContainer() {
  const dispatch = useDispatch();
  const { state, user, isAuth, pageLoading } = useSelector((state) => ({
    state: state[PRIVACY_POLICY_STORE_NAME].privacyPolicy,
    user: state[AUTH_STORE_NAME].user,
    isAuth: state[AUTH_STORE_NAME].logged,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const privacyPolicy = getRequestData(state)?.privacyPolicy;
  const [editorData, setEditorData] = useState();

  useEffect(() => {
    dispatch(privacyPolicyLoadData());
  }, []);

  useEffect(() => {
    setEditorData(privacyPolicy);
  }, [privacyPolicy]);

  const privacyPolicyUploadDataHandler = () => {
    dispatch(privacyPolicyUploadData({ privacyPolicy: editorData }));
  };

  const handleChangeEditorValue = (value) => {
    setEditorData(value);
  };

  if (pageLoading) {
    return <LoaderPrimary />;
  }

  return (
    <PrivacyPolicyComponent
      privacyPolicyUploadDataHandler={privacyPolicyUploadDataHandler}
      privacyPolicy={privacyPolicy}
      editorData={editorData}
      handleChangeEditorValue={handleChangeEditorValue}
      user={user}
      isAuth={isAuth}
    />
  );
}
