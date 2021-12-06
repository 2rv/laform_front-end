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
} from '../../main/store/store.service';
import { saveDataAction, getDataAction } from './size.action';
import { SizeComponent } from './size.component';
import { SIZE_STORE_NAME } from './size.constant';
import { USER_ROLE } from 'src/lib/common/auth';

export function SizeContainer() {
  const dispatch = useDispatch();
  const { dataState, saveState, user, isAuth, pageLoading } = useSelector(
    (state) => ({
      dataState: state[SIZE_STORE_NAME].data,
      saveState: state[SIZE_STORE_NAME].save,
      user: state[AUTH_STORE_NAME].user,
      isAuth: state[AUTH_STORE_NAME].logged,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }),
  );
  const [editorData, handleChange] = useState([]);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const handleSave = () => {
    dispatch(saveDataAction(editorData));
  };
  return (
    <SizeComponent
      pending={isRequestPending(dataState || saveState)}
      success={isRequestSuccess(saveState)}
      error={isRequestError(dataState || saveState)}
      errorMessage={getRequestErrorMessage(dataState || saveState)}
      data={getRequestData(dataState, false)}
      handleSave={handleSave}
      handleChange={handleChange}
      isAdmin={isAuth && user.role === USER_ROLE.ADMIN}
      pageLoading={pageLoading}
    />
  );
}
