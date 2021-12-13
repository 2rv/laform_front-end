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
import { PURCHASE_STATUS_SELECT } from 'src/lib/basic-types';

export function AboutOrderFormComponent(props) {
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    isOrderNumberChangePending,
    isOrderNumberChangeSuccess,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <SectionLayout type="SMALL">
          <Title tid="ORDER_NUMBER.FORM.TITLE" />
          <SectionLayout type="TEXT">
            <FieldLayout type="double" adaptive>
              <BasicField
                titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.FULL_NAME"
                placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.FULL_NAME"
                name={ABOUT_ORDER_FIELD_NAME.FULL_NAME}
                value={values[ABOUT_ORDER_FIELD_NAME.FULL_NAME]}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
              />
              <BasicField
                titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.EMAIL"
                placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.EMAIL"
                name={ABOUT_ORDER_FIELD_NAME.EMAIL}
                value={values[ABOUT_ORDER_FIELD_NAME.EMAIL]}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
              />
              <BasicField
                titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CURRENT_CITY"
                placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.MOSKVA"
                name={ABOUT_ORDER_FIELD_NAME.ADRESS}
                value={values[ABOUT_ORDER_FIELD_NAME.ADRESS]}
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
                placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.ENTER_PROMO"
                name={ABOUT_ORDER_FIELD_NAME.PROMO_CODE}
                value={values[ABOUT_ORDER_FIELD_NAME.PROMO_CODE]}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={true}
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
            deliveryPrice={values[ABOUT_ORDER_FIELD_NAME.SHIPPING_PRICE]}
          />
        </SectionLayout>

        <Divider />

        <SectionLayout type="SMALL">
          <Title tid="ORDER_NUMBER.FORM.DATA" />
          <FieldLayout type="double" adaptive>
            <FieldSelect
              titleTid="ORDER_NUMBER.FORM.ORDER_STATUS"
              options={PURCHASE_STATUS_SELECT}
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
