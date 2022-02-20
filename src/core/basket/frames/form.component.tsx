import styled from 'styled-components';
import { useEffect } from 'react';
import { THEME_SIZE } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { Divider } from 'src/lib/element/divider';
import { FieldSelect, TextareaField } from 'src/lib/element/field';
import { ButtonPrimary } from 'src/lib/element/button';
import { LoaderPrimary } from 'src/lib/element/loader';
import { BlockSdekPoints } from 'src/lib/common/block-sdek-points';
import { BlockSdekTariffList } from 'src/lib/common/block-sdek-tarifflist';
import { CartEmail } from './cart.email';
import { CartPrice } from './cart.price';
import { CartAlert } from './cart.alert';
import { CartPromoCode } from './cart.promocode';
import { BasketFormComponentProps, ORDER_FIELD_NAME } from '../basket.type';
import { BlockUserInfo, USER_INFO_FIELD_NAME } from '../../settings-user-info';
import { TextPrimary } from 'src/lib/element/text';
import { DILIVERY_OPTIONS } from 'src/lib/basic-types';

export function FormComponent(props: BasketFormComponentProps) {
  const {
    isAuth,
    isPending,
    basketPrice,
    basketCount,
    formik: {
      errors,
      touched,
      values,
      handleChange,
      handleBlur,
      setFieldValue,
    },
    formik,
    ...alertProps
  } = props;

  useEffect(() => {
    setFieldValue(ORDER_FIELD_NAME.PRICE, basketPrice);
  }, [basketPrice, values]);

  const getFieldError = (
    name: ORDER_FIELD_NAME | USER_INFO_FIELD_NAME,
  ): any => {
    return (errors[name] && touched[name] && errors[name]) || '';
  };

  return (
    <SectionLayout type="SMALL">
      {isPending && <LoaderPrimary />}
      <TitlePrimary tid="Оформление заказа" />

      <BlockUserInfo onChange={setFieldValue}>
        <CartEmail isAuth={isAuth} formik={formik} />
      </BlockUserInfo>

      <Divider />

      {Boolean(basketCount) && (
        <>
          <FieldLayout type="double" adaptive>
            <FieldSelect
              titleTid="Тип доставки"
              name={ORDER_FIELD_NAME.DELIVERY_TYPE}
              value={values[ORDER_FIELD_NAME.DELIVERY_TYPE]}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultTid="Выберите метод доставки"
              options={DILIVERY_OPTIONS}
            />
          </FieldLayout>
          {+values[ORDER_FIELD_NAME.DELIVERY_TYPE] === 2 && (
            <BlockSdekPoints
              data={values[USER_INFO_FIELD_NAME.FULL_ADDRESS]}
              value={values[ORDER_FIELD_NAME.SDEK_POINT]}
              name={ORDER_FIELD_NAME.SDEK_POINT}
              onChange={setFieldValue}
              error={getFieldError(ORDER_FIELD_NAME.SDEK_POINT)}
            />
          )}
          {+values[ORDER_FIELD_NAME.DELIVERY_TYPE] === 2 && (
            <BlockSdekTariffList
              data={values[ORDER_FIELD_NAME.SDEK_POINT]}
              basketCount={basketCount}
              value={values[ORDER_FIELD_NAME.SDEK_TARIFF]}
              name={ORDER_FIELD_NAME.SDEK_TARIFF}
              onChange={setFieldValue}
              error={getFieldError(ORDER_FIELD_NAME.SDEK_TARIFF)}
            />
          )}
          {+values[ORDER_FIELD_NAME.DELIVERY_TYPE] === 1 && (
            <TextPrimary tid="Адресс самомвывоза (Нужен адресс)" />
          )}
          <Divider />
        </>
      )}

      <Title tid="BASKET.FORM.FIELDS.TITLES.ADDITIONAL" />
      <TextareaField
        titleTid="BASKET.FORM.FIELDS.TITLES.ORDER_NOTE"
        placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.ORDER_NOTE"
        name={ORDER_FIELD_NAME.DESCRIPTION}
        value={values[ORDER_FIELD_NAME.DESCRIPTION]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getFieldError(ORDER_FIELD_NAME.DESCRIPTION)}
      />

      <Divider />

      <CartPromoCode formik={formik} />

      <Divider />

      <CartPrice
        price={values[ORDER_FIELD_NAME.PRICE]}
        promoDiscount={values[ORDER_FIELD_NAME.PROMO_DISCOUNT]}
        deliveryInfo={values[ORDER_FIELD_NAME.SDEK_TARIFF]}
        deliveryType={values[ORDER_FIELD_NAME.DELIVERY_TYPE]}
      />

      <Divider />
      <FieldLayout type="double" adaptive>
        <Button
          tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
          disabled={isPending || !values[ORDER_FIELD_NAME.EMAIL_CONFIRMED]}
          type="submit"
        />
      </FieldLayout>

      <CartAlert
        selectDiliveryType={+values[ORDER_FIELD_NAME.DELIVERY_TYPE] === -1}
        emailNotConfirmed={!values[ORDER_FIELD_NAME.EMAIL_CONFIRMED]}
        emailConfirmedError={getFieldError(ORDER_FIELD_NAME.EMAIL_CONFIRMED)}
        fullNameError={getFieldError(USER_INFO_FIELD_NAME.FULL_NAME)}
        phoneError={getFieldError(USER_INFO_FIELD_NAME.PHONE)}
        postalCodeErrro={getFieldError(USER_INFO_FIELD_NAME.POSTAL_CODE)}
        {...alertProps}
      />
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Button = styled(ButtonPrimary)`
  margin-top: 19px;
`;
