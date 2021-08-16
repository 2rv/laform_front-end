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
import { SectionLayout } from '../../../../lib/element/layout';

const addToCart = (category, id) => {
  localStorage.products[category].map;
};

export function FormalizationOrderingComponent(props) {
  const {
    fieldFullName,
    fieldCurrentCity,
    fieldConvenientDeliveryMethod,
    fieldConvenientPaymentMethod,
    fieldContactPhoneNumber,
    fieldOrderNote,
    fieldPromoCode,

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
      isPending
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <TitlePrimary tid="BASKET.FORM.TITLE" />
        <FieldContainer>
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
        </FieldContainer>
        <FieldContainer>
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
        </FieldContainer>
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.ORDER_NOTE"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.ORDER_NOTE"
          name={fieldOrderNote}
          value={values[fieldOrderNote]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(fieldOrderNote)}
        />
        <FieldContainer>
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
          <FieldContainer>
            <BasicField
              titleTid="BASKET.FORM.FIELDS.TITLES.PROMO_CODE"
              placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.PROMO_CODE"
              name={fieldPromoCode}
              value={values[fieldPromoCode]}
              onChange={handleChange}
            />
            <ButtonBasic tid="BASKET.FORM.ACTIVATE" />
            {isSuccess && <SuccessAlert tid="SETTINGS.CHANGE_EMAIL.SUCCESS" />}
            {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
            {(isPending || isUserInfoLoadPending || pageLoading) && (
              <LoaderPrimary />
            )}
          </FieldContainer>
        </FieldContainer>
        <Divider />
        <FooterContainer>
          <div>
            <FooterInfoContainer>
              <FooterInfoContent>
                <TextPrimary tid="BASKET.FORM.FOOTER.DISCOUNT_PRICE" />
                <div>
                  <TextDark>299</TextDark>&nbsp;
                  <TextPrimary tid="OTHER.VALUTE" />
                  .&nbsp;
                  <TextDiscount>-15%</TextDiscount>
                </div>
              </FooterInfoContent>
              <FooterInfoContent>
                <TextPrimary tid="BASKET.FORM.FOOTER.SHIPPING_PRICE" />
                <div>
                  <TextDark>299</TextDark>&nbsp;
                  <TextPrimary tid="OTHER.VALUTE" />.
                </div>
              </FooterInfoContent>
              <VerticalLine />
              <FooterInfoContent>
                <TextPrimary tid="BASKET.FORM.FOOTER.TOTAL_ORDER_PRICE" />
                <div>
                  <TextDark fontSize={THEME_SIZE.FONT.LARGE}>3,200</TextDark>
                  &nbsp;
                  <TextPrimary tid="OTHER.VALUTE" />.
                </div>
              </FooterInfoContent>
            </FooterInfoContainer>
            <ButtonsContent>
              <ButtonPrimary
                tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
                type="submit"
                disabled={isSubmitDisabled()}
              />
            </ButtonsContent>
          </div>
          <div>
            <InfoText tid="BASKET.FORM.FOOTER.INFO" />
            <ButtonsContent>
              <ButtonSecondary tid="BASKET.FORM.FOOTER.SIGN_UP" type="submit" />
              <ButtonBasic tid="BASKET.FORM.FOOTER.SIGN_IN" type="submit" />
            </ButtonsContent>
          </div>
        </FooterContainer>
      </SectionLayout>
    </form>
  );
}

const Divider = styled.hr`
  border: none;
  border-bottom: 3px solid ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: 1.5px;
  width: 100%;
  margin: 0;
`;

const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
`;

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

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(3)};
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

const ButtonsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: ${spacing(2)};
`;

const VerticalLine = styled.hr`
  margin: 0 ${spacing(5)};
  width: 5px;
  height: 51px;
  border: none;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;
