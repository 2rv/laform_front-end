import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { basketUploadData, basketLoadUserInfoData } from './basket.action';
import { BasketComponent } from './basket.component';
import { BASKET_STORE_NAME } from './basket.constant';
import { basketFormValidation } from './basket.validation';
import {
  FORMALIZATION_ORDERING_FIELD_NAME,
  FORMALIZATION_ORDERING_FORM_FIELD_NAME,
  BASKET_DATA_KEY,
} from './basket.type';
import { getRequestData } from '../../main/store/store.service';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function BasketContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, userData } = useSelector((state) => ({
    state: state[BASKET_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    userData: getRequestData(state[BASKET_STORE_NAME].basketLoadData),
  }));

  const basketFormSendData = (values) => {
    const data = convertSettingsChangeEmailFormData(values);
    dispatch(basketUploadData(data));
  };

  const basketFormGetInitialValue = () => ({
    [FORMALIZATION_ORDERING_FIELD_NAME.FULL_NAME]: userData[
      BASKET_DATA_KEY.FULLNAME
    ]
      ? userData[BASKET_DATA_KEY.FULLNAME]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_DELIVERY_METHOD]: userData[
      BASKET_DATA_KEY.DELIVERY_TYPE
    ]
      ? userData[BASKET_DATA_KEY.DELIVERY_TYPE]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CURRENT_CITY]: userData[
      BASKET_DATA_KEY.LOCATION
    ]
      ? userData[BASKET_DATA_KEY.LOCATION]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONTACT_PHONE_NUMBER]: userData[
      BASKET_DATA_KEY.PHONE
    ]
      ? userData[BASKET_DATA_KEY.PHONE]
      : '',
    [FORMALIZATION_ORDERING_FIELD_NAME.CONVENIENT_PAYMENT_METHOD]: 0,
    [FORMALIZATION_ORDERING_FIELD_NAME.ORDER_NOTE]: '',
  });

  React.useEffect(() => {
    dispatch(basketLoadUserInfoData());
  }, []);

  return (
    <BasketComponent
      isPending={isRequestPending(state.basket)}
      isError={isRequestError(state.basket)}
      isSuccess={isRequestSuccess(state.basket)}
      errorMessage={getRequestErrorMessage(state.basket)}
      isUserInfoLoadPending={isRequestPending(state.basketLoadData)}
      pageLoading={pageLoading}
      initialValue={basketFormGetInitialValue()}
      validation={basketFormValidation}
      onSubmitForm={basketFormSendData}
      fieldName={FORMALIZATION_ORDERING_FORM_FIELD_NAME}
    />
  );
}
