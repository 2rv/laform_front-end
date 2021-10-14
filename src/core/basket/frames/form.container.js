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
    isAuth,
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
    setPurchaseTotalPrice,
    checkPromoCode,
    //--------------
    userInfoErrorMessage,
    userInfoError,
    userInfoPending,
    userInfoSuccess,
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
    //--------------
    sendEmailCodePending,
    sendEmailCodeSuccess,
    //--------------
    emailConfirmedState,
    confirmEmailForOrderErrorMessage,
    confirmEmailForOrderError,
    confirmEmailForOrderPending,
    confirmEmailForOrderSuccess,
  } = props;
  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmit}
      enableReinitialize={true}
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
        useEffect(() => {
          formProps.setFieldValue(ORDER_FIELD_NAME.PRICE, price);
        }, [price, formProps.values]);
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
                sendEmailCodePending={sendEmailCodePending}
                sendEmailCodeSuccess={sendEmailCodeSuccess}
                emailConfirmedState={emailConfirmedState}
                confirmEmailForOrderErrorMessage={confirmEmailForOrderErrorMessage}
                confirmEmailForOrderError={confirmEmailForOrderError}
                confirmEmailForOrderPending={confirmEmailForOrderPending}
                confirmEmailForOrderSuccess={confirmEmailForOrderSuccess}
                isAuth={isAuth}
                {...formProps}
              />
              <SectionLayout type="SMALL">
                <CartPrice
                  values={formProps.values}
                  deliveryOptions={diliveryOptions}
                  setPurchaseTotalPrice={setPurchaseTotalPrice}
                />
                <FieldLayout type="double" adaptive>
                  {(isAuth || emailConfirmedState === true) && (
                    <ButtonPrimary
                      tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
                      disabled={pageLoading || orderPending || promoCodePending}
                      type="submit"
                    />
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
                  {orderSuccess && (
                    <SuccessAlert tid="BASKET.FORM.FORM_SEND_SUCCESS" />
                  )}

                  {(orderError ||
                    userInfoError ||
                    promoCodeErrorMessage ||
                    userInfoErrorMessage ||
                    promoCodeError) && (
                    <ErrorAlert
                      tid={
                        promoCodeErrorMessage ||
                        promoCodeErrorMessage ||
                        userInfoErrorMessage
                      }
                    />
                  )}
                </FieldLayout>
              </SectionLayout>
              {(orderPending ||
                pageLoading ||
                promoCodePending ||
                userInfoPending) && <LoaderPrimary />}
            </SectionLayout>
          </form>
        );
      }}
    </Formik>
  );
}
