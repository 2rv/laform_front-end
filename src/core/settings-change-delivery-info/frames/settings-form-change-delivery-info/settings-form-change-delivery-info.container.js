import { Formik } from 'formik';

import { SETTINGS_FORM_CHANGE_DELIVERY_INFO_FIELD_KEY } from './settings-form-change-delivery-info.type';
import { SettingsFormChangeDeliveryInfoComponent } from './settings-form-change-delivery-info.component';

export function SettingsFormChangeDeliveryInfoContainer(props) {
  const {
    deliveryTypeOptions,

    fieldName,
    initialValue,
    validation,
    onSubmitForm,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  const FULLNAME_NAME =
    fieldName[SETTINGS_FORM_CHANGE_DELIVERY_INFO_FIELD_KEY.FULLNAME];
  const PHONE_NAME =
    fieldName[SETTINGS_FORM_CHANGE_DELIVERY_INFO_FIELD_KEY.PHONE];
  const LOCATION_NAME =
    fieldName[SETTINGS_FORM_CHANGE_DELIVERY_INFO_FIELD_KEY.LOCATION];
  const DELIVERY_TYPE_NAME =
    fieldName[SETTINGS_FORM_CHANGE_DELIVERY_INFO_FIELD_KEY.DELIVERY_TYPE];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
      enableReinitialize={true}
    >
      {(formProps) => (
        <SettingsFormChangeDeliveryInfoComponent
          deliveryTypeOptions={deliveryTypeOptions}
          fieldFullname={FULLNAME_NAME}
          fieldPhone={PHONE_NAME}
          fieldLocation={LOCATION_NAME}
          fieldDeliveryType={DELIVERY_TYPE_NAME}
          dataPending={dataPending}
          formPending={formPending}
          formSuccess={formSuccess}
          formError={formError}
          errorMessage={errorMessage}
          {...formProps}
        />
      )}
    </Formik>
  );
}
