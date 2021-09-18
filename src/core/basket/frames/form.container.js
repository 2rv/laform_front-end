import { Formik } from 'formik';
import { SectionLayout, FieldLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary } from '../../../lib/element/button';
import { FormComponent } from './form.component';
import { CartPrice } from './cart.price';
import { ORDER_FIELD_NAME } from '../basket.type';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';

export function FormContainer(props) {
  const {
    onSubmit,
    initialValues,
    validation,
    pageLoading,
    isPending,
    isError,
    errorMessage,
    isSuccess,
    diliveryOptions,
    paymentMethodOptions,
    checkPromoCode,
    promoCodeErrorMessage,
    promoCodeError,
    promoCodePending,
    promoCodeSuccess,
  } = props;
  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formProps) => {
        return (
          <form onSubmit={formProps.handleSubmit}>
            <SectionLayout>
              <TitlePrimary tid="BASKET.FORM.TITLE" />
              <FormComponent
                diliveryOptions={diliveryOptions}
                paymentMethodOptions={paymentMethodOptions}
                checkPromoCode={checkPromoCode}
                promoCodePending={promoCodePending}
                promoCodeSuccess={promoCodeSuccess}
                {...formProps}
              />
              <SectionLayout type="SMALL">
                <CartPrice values={formProps.values} />
                <FieldLayout type="double" adaptive>
                  <ButtonPrimary
                    tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
                    disabled={pageLoading || isPending}
                    type="submit"
                  />
                </FieldLayout>
              </SectionLayout>
              {isSuccess && (
                <SuccessAlert tid="BASKET.FORM.FORM_SEND_SUCCESS" />
              )}
              {promoCodeSuccess && (
                <SuccessAlert
                  tid="BASKET.FORM.PROMO_CODE_SUCCESS"
                  tvalue={{
                    discount: formProps.values[ORDER_FIELD_NAME.PROMO_DISCOUNT],
                  }}
                />
              )}
              {(isError ||
                errorMessage ||
                promoCodeErrorMessage ||
                promoCodeError) && (
                <ErrorAlert tid={errorMessage || promoCodeErrorMessage} />
              )}
              {(isPending || pageLoading || promoCodePending) && (
                <LoaderPrimary />
              )}
            </SectionLayout>
          </form>
        );
      }}
    </Formik>
  );
}
