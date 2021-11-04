import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from 'src/lib/common/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';
import { getRequestData } from 'src/main/store/store.service';
import { termsOfUseLoadData, termsOfUseUploadData } from './terms-of-use.action';
import { TermsOfUseComponent } from './terms-of-use.component';
import { TERMS_OF_USE_STORE_NAME } from './terms-of-use.constant';

export function TermsOfUseContainer() {
  const dispatch = useDispatch();
  const { state, user, isAuth, pageLoading } = useSelector((state) => ({
    state: state[TERMS_OF_USE_STORE_NAME].termsOfUse,
    user: state[AUTH_STORE_NAME].user,
    isAuth: state[AUTH_STORE_NAME].logged,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const termsOfUse = getRequestData(state)?.termsOfUse;
  const [editorData, setEditorData] = useState();
  console.log('editorData:', editorData);
  console.log('termsOfUse:', termsOfUse);

  useEffect(() => {
    dispatch(termsOfUseLoadData());
  }, []);

  useEffect(() => {
    setEditorData(termsOfUse);
  }, [termsOfUse]);

  const termsOfUseUploadDataHandler = () => {
    dispatch(termsOfUseUploadData({ termsOfUse: editorData }));
  };

  const handleChangeEditorValue = (value) => {
    setEditorData(value);
  };

  if (pageLoading) {
    return <LoaderPrimary />;
  }

  return (
    <TermsOfUseComponent
      termsOfUseUploadDataHandler={termsOfUseUploadDataHandler}
      termsOfUse={termsOfUse}
      editorData={editorData}
      handleChangeEditorValue={handleChangeEditorValue}
      user={user}
      isAuth={isAuth}
    />
  );
}
