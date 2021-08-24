import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AUTH_STORE_NAME, USER_ROLE } from '../../lib/common/auth';
import { redirect } from '../../main/navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { promocodesUploadData } from './promocodes.action';
import { PromocodesComponent } from './promocodes.component';
import { PROMOCODES_STORE_NAME } from './promocodes.constant';

import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function PromocodesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, currentLang, user } = useSelector((state) => ({
    state: state[PROMOCODES_STORE_NAME].promocodes,
    currentLang: state[LANG_STORE_NAME].active,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
  }));
  const [promocodes, setPromocodes] = useState([
    { id: 1, promocode: 'halyavaotivangaya' },
    { id: 2, promocode: 'qB9mfsk9KL' },
    { id: 3, promocode: 'igfoi8jidg' },
    { id: 4, promocode: '1234567890' },
  ]);

  useEffect(() => {
    if (user && user?.role !== USER_ROLE.ADMIN) {
      redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
      return;
    }
    //   dispatch(promocodesUploadData(currentLang.toLowerCase()));
  }, []);

  return (
    <PromocodesComponent
      // isPending={isRequestPending(state)}
      // isError={isRequestError(state)}
      // isSuccess={isRequestSuccess(state)}
      // errorMessage={getRequestErrorMessage(state)}
      //   pageLoading={pageLoading}
      promocodes={promocodes}
      setPromocodes={setPromocodes}
    />
  );
}
