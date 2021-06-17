import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { SettingsFormChangeDeliveryInfoContainer } from './frames/settings-form-change-delivery-info';
import {
  SETTINGS_CHANGE_DELIVERY_INFO_STORE_NAME,
  SETTINGS_CHANGE_DELIVERY_INFO_DELIVERY_TYPE_OPTIONS,
} from './settings-change-delivery-info.constant';
import {
  SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME,
  SETTINGS_CHANGE_DELIVERY_INFO_FORM_FIELD_NAME,
} from './settings-change-delivery-info.type';
import {
  settingsChangeDeliveryInfoLoadData,
  settingsChangeDeliveryInfoFormUploadData,
} from './settings-change-delivery-info.action';
import { settingsChangeDeliveryInfoFormValidation } from './settings-change-delivery-info.validation';
import {
  convertSettingsChangeDeliveryInfoFormData,
  performSettingsChangeDeliveryInfoFormData,
} from './settings-change-delivery-info.convert';

export function SettingsChangeDeliveryInfoContainer() {
  const dispatch = useDispatch();
  const { changeDeliveryInfo, formChangeDeliveryInfo } = useSelector(
    (state) => ({
      changeDeliveryInfo:
        state[SETTINGS_CHANGE_DELIVERY_INFO_STORE_NAME].changeDeliveryInfo,
      formChangeDeliveryInfo:
        state[SETTINGS_CHANGE_DELIVERY_INFO_STORE_NAME].formChangeDeliveryInfo,
    }),
  );

  const settingsChangeDeliveryInfoFormSendData = (values) => {
    const data = convertSettingsChangeDeliveryInfoFormData(values);
    console.log(data);

    dispatch(settingsChangeDeliveryInfoFormUploadData(data));
  };

  const settingsChangeDeliveryInfoFormGetInitialValue = () => {
    const rawData = getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME.FULLNAME]: '',
        [SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME.PHONE]: '',
        [SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME.LOCATION]: '',
        [SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME.DELIVERY_TYPE]:
          SETTINGS_CHANGE_DELIVERY_INFO_DELIVERY_TYPE_OPTIONS[0].id,
      };
    }

    return performSettingsChangeDeliveryInfoFormData(rawData);
  };

  useEffect(() => dispatch(settingsChangeDeliveryInfoLoadData()), []);

  return (
    <SettingsFormChangeDeliveryInfoContainer
      deliveryTypeOptions={SETTINGS_CHANGE_DELIVERY_INFO_DELIVERY_TYPE_OPTIONS}
      dataPending={isRequestPending(changeDeliveryInfo)}
      formPending={isRequestPending(formChangeDeliveryInfo)}
      formSuccess={isRequestSuccess(formChangeDeliveryInfo)}
      formError={isRequestError(formChangeDeliveryInfo)}
      errorMessage={getRequestErrorMessage(formChangeDeliveryInfo)}
      initialValue={settingsChangeDeliveryInfoFormGetInitialValue()}
      validation={settingsChangeDeliveryInfoFormValidation}
      onSubmitForm={settingsChangeDeliveryInfoFormSendData}
      fieldName={SETTINGS_CHANGE_DELIVERY_INFO_FORM_FIELD_NAME}
    />
  );
}
