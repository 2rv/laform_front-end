import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';

import { BasicField, FieldSelect } from 'src/lib/element/field';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from '../../../../lib/element/text';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonBasic,
} from '../../../../lib/element/button';
import { FieldLayout, SectionLayout } from '../../../../lib/element/layout';
import { PromoCodeContainer } from '../promo-code/promo-code.container';
import { Form } from 'formik';
import { useFormikContext } from 'formik';
import { Divider } from '../../../../lib/element/divider';

export function FormalizationOrderingComponent(props) {
  const {
    isUserLoggedIn,
    discount,
    cartPriceWithoutShipping,
    cartPrice,
    shippingPrice,

    fieldFullName,
    fieldCurrentCity,
    fieldConvenientDeliveryMethod,
    fieldConvenientPaymentMethod,
    fieldContactPhoneNumber,
    fieldOrderNote,

    isPending,
    isError,
    isSuccess,
    errorMessage,
    isUserInfoLoadPending,
    pageLoading,

    values,
    isValid,
    isSubmitting,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    fieldName,
    promoCodeInitialValue,
    onSubmitPromoCode,
    validationPromoCode,
    isPromoCodePending,
    isPromoCodeError,
    isPromoCodeSuccess,
    promoCodeErrorMessage,
  } = props;

  const { submitForm } = useFormikContext();

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
      isPending
    );
  };

  return (
    <SectionLayout type="SMALL">
      <Form onSubmit={handleSubmit}>
        <SectionLayout>
          <TitlePrimary tid="BASKET.FORM.TITLE" />
          <SectionLayout type="SMALL">
            <FieldLayout type="double" adaptive>
              <BasicField
                titleTid="BASKET.FORM.FIELDS.TITLES.FULL_NAME"
                placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.FULL_NAME"
                name={fieldFullName}
                value={values[fieldFullName]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getFieldError(fieldFullName)}
              />
              <BasicField
                titleTid="BASKET.FORM.FIELDS.TITLES.CURRENT_CITY"
                placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CURRENT_CITY"
                name={fieldCurrentCity}
                value={values[fieldCurrentCity]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getFieldError(fieldCurrentCity)}
              />
              <FieldSelect
                titleTid="BASKET.FORM.FIELDS.TITLES.CONVENIET_DELIVERY_METHOD"
                options={[
                  {
                    id: 1,
                    tid: 'BASKET.FORM.FIELDS.SELECT_OPTIONS.CONVENIET_DELIVERY_METHOD.MAIL',
                  },
                ]}
                name={fieldConvenientDeliveryMethod}
                value={values[fieldConvenientDeliveryMethod]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getFieldError(fieldConvenientDeliveryMethod)}
              />
              <BasicField
                titleTid="BASKET.FORM.FIELDS.TITLES.CONTACT_PHONE_NUMBER"
                placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CONTACT_PHONE_NUMBER"
                name={fieldContactPhoneNumber}
                value={values[fieldContactPhoneNumber]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getFieldError(fieldContactPhoneNumber)}
              />
            </FieldLayout>
            <BasicField
              titleTid="BASKET.FORM.FIELDS.TITLES.ORDER_NOTE"
              placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.ORDER_NOTE"
              name={fieldOrderNote}
              value={values[fieldOrderNote]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getFieldError(fieldOrderNote)}
            />
            <FieldLayout type="double" adaptive>
              <FieldSelect
                titleTid="BASKET.FORM.FIELDS.TITLES.CONVENIET_PAYMENT_METHOD"
                options={[
                  {
                    id: 1,
                    tid: 'BASKET.FORM.FIELDS.SELECT_OPTIONS.CONVENIET_PAYMENT_METHOD.ONLINE',
                  },
                ]}
                name={fieldConvenientPaymentMethod}
                value={values[fieldConvenientPaymentMethod]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getFieldError(fieldConvenientPaymentMethod)}
              />
            </FieldLayout>
          </SectionLayout>
        </SectionLayout>
      </Form>
      <PromoCodeContainer
        discount={discount}
        promoCodeInitialValue={promoCodeInitialValue}
        onSubmitPromoCode={onSubmitPromoCode}
        validationPromoCode={validationPromoCode}
        fieldName={fieldName}
        isPromoCodePending={isPromoCodePending}
        isPromoCodeError={isPromoCodeError}
        isPromoCodeSuccess={isPromoCodeSuccess}
        promoCodeErrorMessage={promoCodeErrorMessage}
      />
      <SectionLayout>
        {isSuccess && <SuccessAlert tid="BASKET.FORM.FORM_SEND_SUCCESS" />}
        {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
        {(isPending ||
          isUserInfoLoadPending ||
          pageLoading ||
          isPromoCodePending) && <LoaderPrimary />}
        <Divider />
        <FieldLayout type="double" adaptive>
          <div>
            <FooterInfoContainer>
              <FooterInfoContent>
                <TextPrimary
                  tid={
                    discount
                      ? 'BASKET.FORM.FOOTER.DISCOUNT_PRICE'
                      : 'BASKET.FORM.FOOTER.PRICE'
                  }
                />
                <div>
                  <TextDark>{cartPriceWithoutShipping}</TextDark>&nbsp;
                  <TextPrimary tid="OTHER.VALUTE" />
                  .&nbsp;
                  {discount && <TextDiscount>{`-${discount}%`}</TextDiscount>}
                </div>
              </FooterInfoContent>
              <FooterInfoContent>
                <TextPrimary tid="BASKET.FORM.FOOTER.SHIPPING_PRICE" />
                <div>
                  <TextDark>{shippingPrice}</TextDark>&nbsp;
                  <TextPrimary tid="OTHER.VALUTE" />.
                </div>
              </FooterInfoContent>
              <VerticalLine />
              <FooterInfoContent>
                <TextPrimary tid="BASKET.FORM.FOOTER.TOTAL_ORDER_PRICE" />
                <div>
                  <TextDark fontSize={THEME_SIZE.FONT.LARGE}>
                    {cartPrice}
                  </TextDark>
                  &nbsp;
                  <TextPrimary tid="OTHER.VALUTE" />.
                </div>
              </FooterInfoContent>
            </FooterInfoContainer>
            <FieldLayout type="double" adaptive>
              <ButtonPrimary
                tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
                onClick={submitForm}
                disabled={isSubmitDisabled()}
              />
            </FieldLayout>
          </div>
          {!isUserLoggedIn && (
            <div>
              <InfoText tid="BASKET.FORM.FOOTER.INFO" />
              <FieldLayout type="double" adaptive>
                <ButtonSecondary
                  tid="BASKET.FORM.FOOTER.SIGN_UP"
                  type="submit"
                />
                <ButtonBasic tid="BASKET.FORM.FOOTER.SIGN_IN" type="submit" />
              </FieldLayout>
            </div>
          )}
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}
const TextPrimary = styled(TextSecondary)`
  line-height: 24px;
  color: ${THEME_COLOR.TEXT.LIGHT};
`;

const TextDark = styled(TextSecondary)`
  line-height: 24px;
  font-size: ${(props) => props.fontSize ?? THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;

const TextDiscount = styled(TextSecondary)`
  line-height: 24px;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;

const InfoText = styled(TextSecondary)`
  line-height: 24px;
`;
const FooterInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FooterInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-right: ${spacing(4)};
  }
`;

const VerticalLine = styled.hr`
  margin: 0 ${spacing(5)};
  width: 5px;
  height: 51px;
  border: none;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;
