import { Formik } from 'formik';

import { PROMOCODE_FIELD_KEY } from './promocode-form.type';
import { PromocodeFormComponent } from './promocode-form.component';

export function PromocodeFormContainer(props) {
  const {
    fieldName,
    initialValue,
    validation,
    onSubmitForm,
    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;

  const PROMOCODE_NAME = fieldName[PROMOCODE_FIELD_KEY.PROMOCODE];
  const DISCOUNT_NAME = fieldName[PROMOCODE_FIELD_KEY.DISCOUNT];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <PromocodeFormComponent
          fieldPromocode={PROMOCODE_NAME}
          fieldDiscount={DISCOUNT_NAME}
          isPending={isPending}
          isSuccess={isSuccess}
          isError={isError}
          errorMessage={errorMessage}
          {...formProps}
        />
      )}
    </Formik>
  );
}
