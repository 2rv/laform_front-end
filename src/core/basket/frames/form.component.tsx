import styled from 'styled-components';
import { useEffect } from 'react';
import { THEME_SIZE } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { Divider } from 'src/lib/element/divider';
import { FieldSelect, TextareaField } from 'src/lib/element/field';
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

  const getFieldError = (name: ORDER_FIELD_NAME | USER_INFO_FIELD_NAME) => {
    if (errors[name] && touched[name]) {
      return errors[name] + '';
    }
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
              options={[
                { id: 0, tid: 'Служба доставки СДЭК' },
                { id: 1, tid: 'Почта России - 400 руб.' },
                { id: 2, tid: 'Самовывоз - бесплатно (Санкт-Петербург)' },
              ]}
            />
          </FieldLayout>
          {+values[ORDER_FIELD_NAME.DELIVERY_TYPE] === 0 && (
            <FieldLayout type="double" adaptive>
              <BlockSdekPoints
                data={values[USER_INFO_FIELD_NAME.FULL_ADDRESS]}
                value={values[ORDER_FIELD_NAME.SDEK_POINT]}
                name={ORDER_FIELD_NAME.SDEK_POINT}
                onChange={setFieldValue}
                error={getFieldError(ORDER_FIELD_NAME.SDEK_POINT)}
              />

              <BlockSdekTariffList
                data={values[ORDER_FIELD_NAME.SDEK_POINT]}
                basketCount={basketCount}
                value={values[ORDER_FIELD_NAME.SDEK_TARIFF]}
                name={ORDER_FIELD_NAME.SDEK_TARIFF}
                onChange={setFieldValue}
                error={getFieldError(ORDER_FIELD_NAME.SDEK_TARIFF)}
              />
            </FieldLayout>
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

// const data = result.concat([
// 	{
// 	  label: 'Самовывоз',
// 	  delivery_mode: -1,
// 	  delivery_sum: 0,
// 	  total_sum: 0,
// 	  period_max: -1,
// 	  period_min: -1,
// 	  tariff_code: -1,
// 	  tariff_description: 'Забирайте сами',
// 	  tariff_name: 'Самовывоз',
// 	  notSdek: true,
// 	},
// 	{
// 	  label: 'Почта россии',
// 	  delivery_mode: -1,
// 	  delivery_sum: 400,
// 	  total_sum: 400,
// 	  period_max: -1,
// 	  period_min: -1,
// 	  tariff_code: -2,
// 	  tariff_description: 'Товары будут отправлены через почту россии',
// 	  tariff_name: 'Почта россии',
// 	  notSdek: true,
// 	},
//   ]);
