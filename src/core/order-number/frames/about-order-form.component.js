import styled from 'styled-components';
import { SectionLayout, FieldLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
import { ButtonSecondary } from '../../../lib/element/button';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import { TextSecondary } from '../../../lib/element/text';
import {
  BasicField,
  FieldSelect,
  TextareaField,
} from '../../../lib/element/field';
import { ABOUT_ORDER_FIELD_NAME } from '../order-number.type';
import { AboutOrderPrice } from './about-order-price';
import { SuccessAlert } from 'src/lib/element/alert';

export function AboutOrderFormComponent(props) {
  const {
    values,
    handleSubmit,
    handleChange,
    statusOrderSelect,
    errors,
    touched,
    handleBlur,
    deliveryTypeOptions,
    isOrderNumberChangePending,
    isOrderNumberChangeSuccess,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <SectionLayout type="SMALL">
          <Title tid="Информация о заказе" />
          <SectionLayout type="TEXT">
            <FieldLayout type="double" adaptive>
              <BasicField
                titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.FULL_NAME"
                placeholderTid="ФИО покупателя"
                name={ABOUT_ORDER_FIELD_NAME.FULL_NAME}
                value={values[ABOUT_ORDER_FIELD_NAME.FULL_NAME]}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
              />
              <BasicField
                titleTid="Почта"
                placeholderTid="Почта покупателя"
                name={ABOUT_ORDER_FIELD_NAME.EMAIL}
                value={values[ABOUT_ORDER_FIELD_NAME.EMAIL]}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
              />
              <BasicField
                titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CURRENT_CITY"
                placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.MOSKVA"
                name={ABOUT_ORDER_FIELD_NAME.CITY}
                value={values[ABOUT_ORDER_FIELD_NAME.CITY]}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
              />
              <BasicField
                titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CONTACT_NUMBER"
                placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.CONTACT_NUMBER"
                name={ABOUT_ORDER_FIELD_NAME.PHONE_NUMBER}
                value={values[ABOUT_ORDER_FIELD_NAME.PHONE_NUMBER]}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
              />
              <BasicField
                titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.PROMO_CODE"
                placeholderTid="Нету промокода"
                name={ABOUT_ORDER_FIELD_NAME.PROMO_CODE}
                value={values[ABOUT_ORDER_FIELD_NAME.PROMO_CODE]}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
              />
              <FieldSelect
                titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.DELIVERY_METHOD"
                options={deliveryTypeOptions}
                name={ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD}
                value={values[ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD]}
                onChange={handleChange}
                disabled={true}
                textValue
              />
            </FieldLayout>
            <TextareaField
              titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.ORDER_NOTE"
              placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.ORDER_NOTE"
              name={ABOUT_ORDER_FIELD_NAME.COMMENT}
              value={values[ABOUT_ORDER_FIELD_NAME.COMMENT]}
              onBlur={handleBlur}
              disabled={true}
            />
          </SectionLayout>
          <AboutOrderPrice
            discount={values[ABOUT_ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT]}
            price={values[ABOUT_ORDER_FIELD_NAME.PRICE]}
            deliveryMethod={values[ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD]}
            deliveryTypeOptions={deliveryTypeOptions}
          />
        </SectionLayout>

        <Divider />

        <SectionLayout type="SMALL">
          <Title tid="ORDER_NUMBER.FORM.DATA" />
          <FieldLayout type="double" adaptive>
            <FieldSelect
              titleTid="ORDER_NUMBER.FORM.ORDER_STATUS"
              options={statusOrderSelect}
              name={ABOUT_ORDER_FIELD_NAME.ORDER_STATUS}
              value={values[ABOUT_ORDER_FIELD_NAME.ORDER_STATUS]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button
              type="submit"
              tid="ORDER_NUMBER.FORM.SAVE_DATA"
              disabled={isOrderNumberChangePending}
            />
          </FieldLayout>
          {isOrderNumberChangeSuccess && (
            <SuccessAlert tid="ORDER_NUMBER.FORM.ORDER_STATUS_CHANGE_SUCCESS_MESSAGE" />
          )}
        </SectionLayout>
      </SectionLayout>
    </form>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const SelectTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Button = styled(ButtonSecondary)`
  margin-top: 19px;
`;
{
  /* 
<FieldSelect
titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.PAYMENT_METHOD"
options={[{ id: 0, tid: orderNumberDetails?.typeOfPayment }]}
name={fieldConvenientPaymentMethod}
value={values[fieldConvenientPaymentMethod]}
onChange={handleChange}
/>
<FieldSelect
titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.DELIVERY_METHOD"
options={[{ id: 0, tid: orderNumberDetails?.typeOfDelivery }]}
name={ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD}
value={values[ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD]}
onChange={handleChange}
/>  */
}
