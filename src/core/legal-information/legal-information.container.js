import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';
import { getRequestData, isRequestPending } from 'src/main/store/store.service';
import { legalInformationLoadData, legalInformationUploadData } from './legal-information.action';
import { LegalInformationComponent } from './legal-information.component';
import { LEGAL_INFORMATION_STORE_NAME } from './legal-information.constant';

export function LegalInformationContainer() {
  const dispatch = useDispatch();
  const { state, user, isAuth, pageLoading } = useSelector((state) => ({
    state: state[LEGAL_INFORMATION_STORE_NAME].legalInformation,
    user: state[AUTH_STORE_NAME].user,
    isAuth: state[AUTH_STORE_NAME].logged,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [editorData, setEditorData] = useState(null);

  useEffect(() => {
    dispatch(legalInformationLoadData());
  }, []);

  const legalInformationUploadDataHandler = () => {
    dispatch(legalInformationUploadData({ legalInformation: editorData }));
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
    <LegalInformationComponent
      legalInformationUploadDataHandler={legalInformationUploadDataHandler}
      legalInformation={getRequestData(state)?.legalInformation}
      handleChangeEditorValue={handleChangeEditorValue}
      user={user}
      isAuth={isAuth}
    />
  );
}