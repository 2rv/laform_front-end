import { Formik } from 'formik';
import { SectionLayout, FieldLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary } from '../../../lib/element/button';
import { FormComponent } from './form.component';
import { CartPrice } from './cart.price';
import { ORDER_FIELD_NAME } from '../basket.type';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { useEffect } from 'react';

export function FormContainer(props) {
  const {
    //--------------
    promocode,
    discount,
    price,
    //--------------
    onSubmit,
    initialValues,
    validation,
    //--------------
    pageLoading,
    //--------------
    diliveryOptions,
    paymentMethodOptions,
    checkPromoCode,
    //--------------
    orderErrorMessage,
    orderError,
    orderPending,
    orderSuccess,
    //--------------
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
    >
      {(formProps) => {
        useEffect(
          () => formProps.setFieldValue(ORDER_FIELD_NAME.PROMO_CODE, promocode),
          [promocode],
        );
        useEffect(
          () =>
            formProps.setFieldValue(ORDER_FIELD_NAME.PROMO_DISCOUNT, discount),
          [discount],
        );
        useEffect(
          () => formProps.setFieldValue(ORDER_FIELD_NAME.PRICE, price),
          [price],
        );
        useEffect(() => {
          formProps.setFieldValue(ORDER_FIELD_NAME.PROMO_CODE, '');
          formProps.setFieldValue(ORDER_FIELD_NAME.PROMO_DISCOUNT, 0);
        }, [promoCodeError]);

        return (
          <form onSubmit={formProps.handleSubmit}>
            <SectionLayout>
              <TitlePrimary tid="BASKET.FORM.TITLE" />
              <FormComponent
                diliveryOptions={diliveryOptions}
                paymentMethodOptions={paymentMethodOptions}
                checkPromoCode={checkPromoCode}
                promoCodePending={promoCodePending}
                {...formProps}
              />
              <SectionLayout type="SMALL">
                <CartPrice values={formProps.values} />
                <FieldLayout type="double" adaptive>
                  <ButtonPrimary
                    tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
                    disabled={pageLoading || orderPending || promoCodePending}
                    type="submit"
                  />
                  {orderSuccess && (
                    <SuccessAlert tid="BASKET.FORM.FORM_SEND_SUCCESS" />
                  )}
                  {promoCodeSuccess && (
                    <SuccessAlert
                      tid="BASKET.FORM.PROMO_CODE_SUCCESS"
                      tvalue={{
                        discount:
                          formProps.values[ORDER_FIELD_NAME.PROMO_DISCOUNT],
                      }}
                    />
                  )}
                  {(orderError ||
                    promoCodeErrorMessage ||
                    promoCodeErrorMessage ||
                    promoCodeError) && (
                    <ErrorAlert
                      tid={promoCodeErrorMessage || promoCodeErrorMessage}
                    />
                  )}
                </FieldLayout>
              </SectionLayout>
              {(orderPending || pageLoading || promoCodePending) && (
                <LoaderPrimary />
              )}
            </SectionLayout>
          </form>
        );
      }}
    </Formik>
  );
}
