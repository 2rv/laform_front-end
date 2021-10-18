import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { masterClassProductUploadData } from './master-class-product.action';
import { MASTER_CLASS_PRODUCT_STORE_NAME } from './master-class-product.constant';
import { MasterClassProductComponent } from './master-class-product.component';
import { getQuery } from 'src/main/navigation';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';

export function MasterClassProductContainer() {
  const dispatch = useDispatch();
  const masterClassId = getQuery('id');

  const { state, pageLoading, currentLang, isAuth } = useSelector((state) => ({
    state: state[MASTER_CLASS_PRODUCT_STORE_NAME].product,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  useEffect(() => {
    dispatch(masterClassProductUploadData(currentLang, masterClassId, isAuth));
  }, [masterClassId]);

  return (
    <MasterClassProductComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      pageLoading={pageLoading}
      productData={getRequestData(state, false)}
    />
  );
}
