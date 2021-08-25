import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';
import { Form } from 'formik';
import { BasicField } from 'src/lib/element/field';
import { ButtonBasic } from '../../../../lib/element/button';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { SectionLayout } from '../../../../lib/element/layout';
import { FORMALIZATION_ORDERING_FIELD_NAME } from '../../basket.type';

export function PromoCodeComponent(props) {
  const {
    discount,

    isPending,
    isError,
    isSuccess,
    pageLoading,
    isPromoCodePending,
    isPromoCodeError,
    isPromoCodeSuccess,
    promoCodeErrorMessage,
    isUserInfoLoadPending,
    fieldPromoCode,

    values,
    isValid,
    isSubmitting,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return (
      !isValid ||
      isSubmitting ||
      isSuccess ||
      pageLoading ||
      isUserInfoLoadPending ||
      isPending ||
      isPromoCodePending ||
      isPromoCodeSuccess ||
      !values[FORMALIZATION_ORDERING_FIELD_NAME.PROMO_CODE]
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SectionLayout type="SMALL">
        <FieldContainer>
          <BasicField
            titleTid="BASKET.FORM.FIELDS.TITLES.PROMO_CODE"
            placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.PROMO_CODE"
            name={fieldPromoCode}
            value={values[fieldPromoCode]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError(fieldPromoCode)}
          />
          <ButtonBasic
            tid="BASKET.FORM.ACTIVATE"
            type="submit"
            disabled={isSubmitDisabled()}
          />
        </FieldContainer>
        {isPromoCodeSuccess && (
          <SuccessAlert
            tid="BASKET.FORM.PROMO_CODE_SUCCESS"
            tvalue={{ discount: discount }}
          />
        )}
        {(isPromoCodeError || promoCodeErrorMessage) && (
          <ErrorAlert tid={promoCodeErrorMessage} />
        )}
      </SectionLayout>
    </Form>
  );
}

const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
`;
