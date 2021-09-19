import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import { BasicField, FieldSelect, TextareaField } from 'src/lib/element/field';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ORDER_FIELD_NAME } from '../basket.type';
import { ButtonBasic } from 'src/lib/element/button';

export function FormComponent(props) {
  const {
    errors,
    touched,
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    pageLoading,
    isPending,
    diliveryOptions = [],
    paymentMethodOptions = [],
	
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.FULL_NAME"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.FULL_NAME"
          name={ORDER_FIELD_NAME.FULL_NAME}
          value={values[ORDER_FIELD_NAME.FULL_NAME]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.FULL_NAME)}
        />
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.CURRENT_CITY"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CURRENT_CITY"
          name={ORDER_FIELD_NAME.CITY}
          value={values[ORDER_FIELD_NAME.CITY]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.CITY)}
        />
        <FieldSelect
          titleTid="BASKET.FORM.FIELDS.TITLES.CONVENIET_DELIVERY_METHOD"
          options={diliveryOptions}
          name={ORDER_FIELD_NAME.DELIVERY_METHOD}
          value={values[ORDER_FIELD_NAME.DELIVERY_METHOD]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.DELIVERY_METHOD)}
        />
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.CONTACT_PHONE_NUMBER"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CONTACT_PHONE_NUMBER"
          name={ORDER_FIELD_NAME.PHONE}
          value={values[ORDER_FIELD_NAME.PHONE]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.PHONE)}
        />
        <FieldSelect
          titleTid="BASKET.FORM.FIELDS.TITLES.CONVENIET_PAYMENT_METHOD"
          options={paymentMethodOptions}
          name={ORDER_FIELD_NAME.PAYMENT_METHOD}
          value={values[ORDER_FIELD_NAME.PAYMENT_METHOD]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.PAYMENT_METHOD)}
        />
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="BASKET.FORM.FIELDS.TITLES.PROMO_CODE"
            placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.PROMO_CODE"
            name={ORDER_FIELD_NAME.PROMO_CODE}
            value={values[ORDER_FIELD_NAME.PROMO_CODE]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError(ORDER_FIELD_NAME.PROMO_CODE)}
          />
          <Button tid="BASKET.FORM.ACTIVATE" />
        </FieldLayout>
      </FieldLayout>
      <TextareaField
        titleTid="BASKET.FORM.FIELDS.TITLES.ORDER_NOTE"
        placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.ORDER_NOTE"
        name={ORDER_FIELD_NAME.DESCRIPTION}
        value={values[ORDER_FIELD_NAME.DESCRIPTION]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getFieldError(ORDER_FIELD_NAME.DESCRIPTION)}
      />
    </SectionLayout>
  );
}
const Button = styled(ButtonBasic)`
  margin-top: 19px;
`;