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
import { saveDataAction, getDataAction } from './dilivery-and-payment.action';
import { DeliveryPaymentComponent } from './dilivery-and-payment.component';
import { DELIVERY_PAYMENT_STORE_NAME } from './dilivery-and-payment.constant';
import { USER_ROLE } from 'src/lib/common/auth';

export function DeliveryPaymentContainer() {
  const dispatch = useDispatch();
  const { dataState, saveState, user, isAuth, pageLoading } = useSelector(
    (state) => ({
      dataState: state[DELIVERY_PAYMENT_STORE_NAME].data,
      saveState: state[DELIVERY_PAYMENT_STORE_NAME].save,
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
    <DeliveryPaymentComponent
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
