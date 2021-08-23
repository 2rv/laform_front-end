import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { promocodesLoadData, promocodesUpoadData } from './promocodes.action';
import { PromocodesComponent } from './promocodes.component';
import { promocodeFormValidation } from './promocodes.validation';
import { convertPromocodeFormData } from './promocodes.convert';
import { PROMOCODES_STORE_NAME } from './promocodes.constant';
import { PROMOCODE_FORM_FIELD_NAME, PROMOCODE_FIELD_NAME } from './promocodes.type';

import {
  getRequestErrorMessage,
  getRequestData,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function PromocodesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[PROMOCODES_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(promocodesLoadData());
  }, []);

  const promocodeFormSendData = (values, { resetForm }) => {
    const data = convertPromocodeFormData(values);
    dispatch(promocodesUpoadData(data));
    resetForm({});
  };

  const promocodeFormGetInitialValue = () => ({
    [PROMOCODE_FIELD_NAME.PROMOCODE]: '',
    [PROMOCODE_FIELD_NAME.DISCOUNT]: '',
  });

  return (
    <PromocodesComponent
      isPending={isRequestPending(state.promocodes)}
      isError={isRequestError(state.promocodes)}
      isSuccess={isRequestSuccess(state.promocodes)}
      errorMessage={getRequestErrorMessage(state.promocodes)}
      pageLoading={pageLoading}
      promocodes={getRequestData(state.promocodes, [])}
      initialValue={promocodeFormGetInitialValue()}
      validation={promocodeFormValidation}
      onSubmitForm={promocodeFormSendData}
      fieldName={PROMOCODE_FORM_FIELD_NAME}
    />
  );
}
