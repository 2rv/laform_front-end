import styled from 'styled-components';
import { useEffect } from 'react';
import { THEME_SIZE } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { Divider } from 'src/lib/element/divider';
import { TextareaField } from 'src/lib/element/field';
import { ButtonPrimary } from 'src/lib/element/button';
import { LoaderPrimary } from 'src/lib/element/loader';
import { CartEmail } from './cart.email';
import { CartPrice } from './cart.price';
import { CartAlert } from './cart.alert';
import { CartPromoCode } from './cart.promocode';
import { BasketFormComponentProps, ORDER_FIELD_NAME } from '../basket.type';
import { BlockSdekPoints } from 'src/lib/common/block-sdek-points';
import { BlockSdekTariffList } from 'src/lib/common/block-sdek-tarifflist';
import { BlockUserInfo, USER_INFO_FIELD_NAME } from '../../settings-user-info';

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

  const getFieldError = (name: ORDER_FIELD_NAME) => {
    return errors[name] && touched[name] && errors[name];
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
          <BlockSdekPoints
            data={values[USER_INFO_FIELD_NAME.FULL_ADDRESS]}
            value={values[ORDER_FIELD_NAME.SDEK_POINT]}
            name={ORDER_FIELD_NAME.SDEK_POINT}
            onChange={setFieldValue}
            error={getFieldError(ORDER_FIELD_NAME.SDEK_POINT)}
          />

          <Divider />

          <BlockSdekTariffList
            data={values[ORDER_FIELD_NAME.SDEK_POINT]}
            basketCount={basketCount}
            value={values[ORDER_FIELD_NAME.SDEK_TARIFF]}
            name={ORDER_FIELD_NAME.SDEK_TARIFF}
            onChange={setFieldValue}
            error={getFieldError(ORDER_FIELD_NAME.SDEK_TARIFF)}
          />

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
      />

      <Divider />
      <FieldLayout type="double" adaptive>
        {values[ORDER_FIELD_NAME.EMAIL_CONFIRMED] && (
          <Button
            tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
            disabled={isPending}
            type="submit"
          />
        )}
      </FieldLayout>

      <CartAlert
        emailConfirmedError={getFieldError(ORDER_FIELD_NAME.EMAIL_CONFIRMED)}
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
