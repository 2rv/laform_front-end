import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import {
  BasicField,
  FieldCheckbox,
  FieldSelect,
  TextareaField,
} from 'src/lib/element/field';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ORDER_FIELD_NAME } from '../basket.type';
import { ButtonSecondary } from 'src/lib/element/button';
import { BlockFindAdress } from 'src/lib/common/block-find-adress';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { CartEmail } from './cart.email';
import { Divider } from 'src/lib/element/divider';

export function FormComponent(props) {
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    //-------
    isAuth,
    diliveryOptions,
    paymentMethodOptions,
    handleConfirmPromoCode,
    promoCodePending,
    emailConfirmed,
    isPending,
    handleSendEmailCode,
    handleConfirmEmailCode,
    sendEmailCodePending,
    confirmEmailCodePending,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };
  return (
    <SectionLayout type="SMALL">
      <Title tid="BASKET.FORM.FIELDS.TITLES.CONTACT_DETAILS" />
      <CartEmail
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        handleBlur={handleBlur}
        emailConfirmed={emailConfirmed}
        isPending={isPending}
        handleSendEmailCode={handleSendEmailCode}
        handleConfirmEmailCode={handleConfirmEmailCode}
        sendEmailCodePending={sendEmailCodePending}
        confirmEmailCodePending={confirmEmailCodePending}
      />
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

      <Divider />

      <Title tid="BASKET.FORM.FIELDS.TITLES.DELIVERY_DATA" />
      <Text tid="Не нашли свой адресс? - введите его в примечаниях к заказу. (Стоит продумать)" />
      <BlockFindAdress values={values} setFieldValue={setFieldValue} />

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
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="BASKET.FORM.FIELDS.TITLES.PROMO_CODE"
          placeholderTid="BASKET.FORM.FIELDS.PLACEHOLDER.PROMO_CODE"
          name={ORDER_FIELD_NAME.PROMO_CODE}
          value={values[ORDER_FIELD_NAME.PROMO_CODE]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(ORDER_FIELD_NAME.PROMO_CODE)}
        />
        <Button
          tid="BASKET.FORM.ACTIVATE"
          disabled={promoCodePending}
          onClick={() =>
            handleConfirmPromoCode(values[ORDER_FIELD_NAME.PROMO_CODE])
          }
        />
        {isAuth && (
          <FieldCheckbox
            titleTid="BASKET.FORM.FIELDS.TITLES.SAVE_DATA"
            labelTid="BASKET.FORM.FIELDS.TITLES.SAVE_DATA"
            name={ORDER_FIELD_NAME.SAVE_USER_INFO}
            value={values[ORDER_FIELD_NAME.SAVE_USER_INFO]}
            onBlur={handleBlur}
            checked={values[ORDER_FIELD_NAME.SAVE_USER_INFO]}
            onClick={(e) =>
              setFieldValue(
                ORDER_FIELD_NAME.SAVE_USER_INFO,
                !values[ORDER_FIELD_NAME.SAVE_USER_INFO],
              )
            }
          />
        )}
      </FieldLayout>
    </SectionLayout>
  );
}
const Button = styled(ButtonSecondary)`
  margin-top: 19px;
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
`;
