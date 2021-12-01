import styled from 'styled-components';
import { useEffect } from 'react';
import { THEME_SIZE } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { BlockFindAdress } from 'src/lib/common/block-find-adress';
import { TitlePrimary } from 'src/lib/element/title';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { Divider } from 'src/lib/element/divider';
import {
  BasicField,
  TextareaField,
  FieldCheckbox,
} from 'src/lib/element/field';
import { ButtonPrimary } from 'src/lib/element/button';
import { LoaderPrimary } from 'src/lib/element/loader';
import { CartEmail } from './cart.email';
import { CartPrice } from './cart.price';
import { CartAlert } from './cart.alert';
import { CartPromoCode } from './cart.promocode';
import { BasketFormComponentProps, ORDER_FIELD_NAME } from '../basket.type';
import { BlockSdekPoints } from 'src/lib/common/block-sdek-points';
import { BlockSdekTariffList } from 'src/lib/common/block-sdek-tarifflist';

export function FormComponent(props: BasketFormComponentProps) {
  const {
    isAuth,
    isPending,
    basketPrice,
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

  const { country, city, street, house, postal_code } =
    values[ORDER_FIELD_NAME.ADRESS];

  return (
    <SectionLayout type="SMALL">
      {isPending && <LoaderPrimary />}
      <TitlePrimary tid="Оформление заказа" />

      <Title tid="BASKET.FORM.FIELDS.TITLES.CONTACT_DETAILS" />
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.FULL_NAME"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.FULL_NAME"
          name={ORDER_FIELD_NAME.FULL_NAME}
          value={values[ORDER_FIELD_NAME.FULL_NAME]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.FULL_NAME)}
        />
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.CONTACT_PHONE_NUMBER"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.CONTACT_PHONE_NUMBER"
          name={ORDER_FIELD_NAME.PHONE}
          value={values[ORDER_FIELD_NAME.PHONE]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.PHONE)}
        />
      </FieldLayout>

      <CartEmail isAuth={isAuth} formik={formik} />

      <Divider />

      <Title tid="BASKET.FORM.FIELDS.TITLES.DELIVERY_DATA" />
      <Text tid="Не нашли свой адресс? - введите его в примечаниях к заказу. (Стоит продумать)" />
      <BlockFindAdress
        onChange={setFieldValue}
        name={ORDER_FIELD_NAME.ADRESS}
      />

      <div>
        <Title tid="Полный адрес -" />
        <TextPrimary
          tid={`
				${Boolean(country) ? country + ', ' : ''}
				${Boolean(city) ? city + ', ' : ''}
				${Boolean(street) ? street + ', ' : ''}
				${Boolean(house) ? house + ', ' : ''}
				${Boolean(postal_code) ? postal_code + '.' : '.'}
			`}
        />
      </div>

      <Divider />

      <BlockSdekPoints
        data={values[ORDER_FIELD_NAME.ADRESS]}
        value={values[ORDER_FIELD_NAME.SDEK_POINT]}
        name={ORDER_FIELD_NAME.SDEK_POINT}
        onChange={setFieldValue}
      />

      <Divider />

      <BlockSdekTariffList
        data={values[ORDER_FIELD_NAME.SDEK_POINT]}
        value={values[ORDER_FIELD_NAME.SDEK_TARIFF]}
        name={ORDER_FIELD_NAME.SDEK_TARIFF}
        onChange={setFieldValue}
      />

      <Divider />

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
        {isAuth && (
          <FieldCheckbox
            titleTid="BASKET.FORM.FIELDS.TITLES.SAVE_DATA"
            labelTid="BASKET.FORM.FIELDS.TITLES.SAVE_DATA"
            name={ORDER_FIELD_NAME.SAVE_USER_INFO}
            checked={values[ORDER_FIELD_NAME.SAVE_USER_INFO]}
            onClick={() => {
              setFieldValue(
                ORDER_FIELD_NAME.SAVE_USER_INFO,
                !values[ORDER_FIELD_NAME.SAVE_USER_INFO],
              );
            }}
          />
        )}
      </FieldLayout>

      <CartAlert
        emailConfirmedError={!!getFieldError(ORDER_FIELD_NAME.EMAIL_CONFIRMED)}
        {...alertProps}
      />
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
`;
const Button = styled(ButtonPrimary)`
  margin-top: 19px;
`;
