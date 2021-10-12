import { ButtonSecondary } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { FieldLayout } from 'src/lib/element/layout';
import { DELIVERY_PRICE_FORM_DATA_NAME } from '../delivery-price-page.constant';

export function DeliveryPricePageFormComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    isPending,
    isError,
    errorMessage,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) => isFieldError(name) && errors[name];

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting;
  };

  return (
    <form onSubmit={handleSubmit}>
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="DELIVERY_PRICE.FORM.FIELDS.LABELS.DELIVERY_TYPE"
          placeholderTid="DELIVERY_PRICE.FORM.FIELDS.PLACEHOLDERS.DELIVERY_TYPE"
          name={DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE}
          value={values[DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE]}
          error={getFieldError(DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <BasicField
          titleTid="DELIVERY_PRICE.FORM.FIELDS.LABELS.DELIVERY_TYPE_PRICE"
          placeholderTid="DELIVERY_PRICE.FORM.FIELDS.PLACEHOLDERS.DELIVERY_TYPE_PRICE"
          name={DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE_PRICE}
          value={values[DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE_PRICE]}
          error={getFieldError(DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE_PRICE)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ButtonSecondary
          type="submit"
          tid="DELIVERY_PRICE.FORM.BUTTON.TITLE"
          disabled={isSubmitDisabled()}
        />
      </FieldLayout>
    </form>
  );
}
