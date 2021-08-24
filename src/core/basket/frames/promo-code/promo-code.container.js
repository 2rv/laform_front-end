import { Formik } from 'formik';
import { PROMO_CODE_FIELD_KEY } from './promo-code.type';
import { PromoCodeComponent } from './promo-code.component';

export function PromoCodeContainer(props) {
  const {
    discount,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    isUserInfoLoadPending,
    fieldName,
    promoCodeInitialValue,
    onSubmitPromoCode,
    validationPromoCode,
    isPromoCodePending,
    isPromoCodeError,
    isPromoCodeSuccess,
    promoCodeErrorMessage,
  } = props;
  const PROMO_CODE_NAME = fieldName[PROMO_CODE_FIELD_KEY.PROMO_CODE];
  return (
    <Formik
      initialValues={promoCodeInitialValue}
      validate={validationPromoCode}
      onSubmit={onSubmitPromoCode}
    >
      {(formProps) => (
        <PromoCodeComponent
          discount={discount}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          isUserInfoLoadPending={isUserInfoLoadPending}
          {...formProps}
          pageLoading={pageLoading}
          fieldPromoCode={PROMO_CODE_NAME}
          isPromoCodePending={isPromoCodePending}
          isPromoCodeError={isPromoCodeError}
          isPromoCodeSuccess={isPromoCodeSuccess}
          promoCodeErrorMessage={promoCodeErrorMessage}
        />
      )}
    </Formik>
  );
}
