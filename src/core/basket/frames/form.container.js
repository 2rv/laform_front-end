import { Formik } from 'formik';
import { SectionLayout, FieldLayout } from '../../../lib/element/layout';
import { ButtonPrimary } from '../../../lib/element/button';
import { FormComponent } from './form.component';
import { CartPrice } from './cart.price';
import { ORDER_FIELD_NAME } from '../basket.type';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { useEffect } from 'react';
import { CartAlert } from './cart.alert';
import { TitlePrimary } from 'src/lib/element/title';
import { Divider } from 'src/lib/element/divider';

export function FormContainer(props) {
  const {
    //--------------
    isAuth,
    emailConfirmed,
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
    //--------------
    userInfoError,
    userInfoErrorMessage,
    userInfoSuccess,
    userInfoPending,
    //--------------
    orderError,
    orderErrorMessage,
    orderSuccess,
    orderPending,
    //--------------
    promoCodeError,
    promoCodeErrorMessage,
    promoCodeSuccess,
    promoCodePending,
    handleConfirmPromoCode,
    //--------------
    handleSendEmailCode,
    sendEmailCodeError,
    sendEmailCodeErrorMessage,
    sendEmailCodeSuccess,
    sendEmailCodePending,
    //--------------
    handleConfirmEmailCode,
    confirmEmailCodeError,
    confirmEmailCodeErrorMessage,
    confirmEmailCodeSuccess,
    confirmEmailCodePending,
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
          //   const diliveryId = formProps.values[ORDER_FIELD_NAME.DELIVERY_METHOD];
          //   const method = diliveryOptions.find((p) => p.id === diliveryId);
          //   formProps.setFieldValue( ORDER_FIELD_NAME.DELIVERY_PRICE, method?.price || 0,);
        }, [price, formProps.values]);
        useEffect(() => {
          formProps.setFieldValue(ORDER_FIELD_NAME.PROMO_CODE, '');
          formProps.setFieldValue(ORDER_FIELD_NAME.PROMO_DISCOUNT, 0);
        }, [promoCodeError]);

        const isPending =
          pageLoading ||
          userInfoPending ||
          orderPending ||
          promoCodePending ||
          sendEmailCodePending ||
          confirmEmailCodePending;
        return (
          <form onSubmit={formProps.handleSubmit}>
            <SectionLayout>
              <TitlePrimary tid="Оформление заказа" />
              <FormComponent
                isAuth={isAuth}
                diliveryOptions={diliveryOptions}
                paymentMethodOptions={paymentMethodOptions}
                handleConfirmPromoCode={handleConfirmPromoCode}
                promoCodePending={promoCodePending}
                emailConfirmed={emailConfirmed}
                isPending={isPending}
                handleSendEmailCode={handleSendEmailCode}
                handleConfirmEmailCode={handleConfirmEmailCode}
                sendEmailCodePending={sendEmailCodePending}
                confirmEmailCodePending={confirmEmailCodePending}
                {...formProps}
              />
              <Divider />
              <SectionLayout type="SMALL">
                <CartPrice values={formProps.values} />
                <FieldLayout type="double" adaptive>
                  {emailConfirmed && (
                    <ButtonPrimary
                      tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
                      disabled={isPending}
                      type="submit"
                    />
                  )}
                </FieldLayout>
                <CartAlert
                  discount={formProps.values[ORDER_FIELD_NAME.PROMO_DISCOUNT]}
                  userInfoError={userInfoError}
                  userInfoErrorMessage={userInfoErrorMessage}
                  userInfoSuccess={userInfoSuccess}
                  orderError={orderError}
                  orderErrorMessage={orderErrorMessage}
                  orderSuccess={orderSuccess}
                  promoCodeError={promoCodeError}
                  promoCodeErrorMessage={promoCodeErrorMessage}
                  promoCodeSuccess={promoCodeSuccess}
                  sendEmailCodeError={sendEmailCodeError}
                  sendEmailCodeErrorMessage={sendEmailCodeErrorMessage}
                  sendEmailCodeSuccess={sendEmailCodeSuccess}
                  confirmEmailCodeError={confirmEmailCodeError}
                  confirmEmailCodeErrorMessage={confirmEmailCodeErrorMessage}
                  confirmEmailCodeSuccess={confirmEmailCodeSuccess}
                />
              </SectionLayout>
              {isPending && <LoaderPrimary />}
            </SectionLayout>
          </form>
        );
      }}
    </Formik>
  );
}
