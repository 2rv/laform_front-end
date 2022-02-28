import { Formik } from 'formik';
import styled from 'styled-components';
import { SectionLayout, FieldLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { Divider } from 'src/lib/element/divider';
import { ButtonSecondary } from 'src/lib/element/button';
import { THEME_SIZE } from 'src/lib/theme';
import { BasicField, FieldSelect, TextareaField } from 'src/lib/element/field';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { DELIVERY_TYPE, PURCHASE_STATUS_SELECT } from 'src/lib/basic-types';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { OrderPrice } from './order.price';
import { ORDER_FIELD_NAME, OrderFormProps } from './order.type';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';

export function OrderForm(props: OrderFormProps) {
  const {
    onSubmit,
    initialValues,
    validate,
    state: { order, updatePending, updateSuccess, updateError },
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        const { handleSubmit, handleChange, handleBlur, values } = formik;
        return (
          <form onSubmit={handleSubmit}>
            <SectionLayout>
              <SectionLayout type="SMALL">
                <Title tid="ORDER.FORM.TITLE" />
                <SectionLayout type="TEXT">
                  <FieldLayout type="double" adaptive>
                    <BasicField
                      titleTid="ORDER.FORM.FULL_NAME_TITLE"
                      placeholderTid="ORDER.FORM.FULL_NAME_PLACEHOLDER"
                      name={ORDER_FIELD_NAME.FULL_NAME}
                      value={values[ORDER_FIELD_NAME.FULL_NAME]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={true}
                    />
                    <BasicField
                      titleTid="ORDER.FORM.EMAIL_TITLE"
                      placeholderTid="ORDER.FORM.EMAIL_PLACEHOLDER"
                      name={ORDER_FIELD_NAME.EMAIL}
                      value={values[ORDER_FIELD_NAME.EMAIL]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={true}
                    />
                    <BasicField
                      titleTid="ORDER.FORM.ADRESS_TITLE"
                      placeholderTid="ORDER.FORM.ADRESS_PLACEHOLDER"
                      name={ORDER_FIELD_NAME.ADRESS}
                      value={values[ORDER_FIELD_NAME.ADRESS]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={true}
                    />
                    <BasicField
                      titleTid="ORDER.FORM.PHONE_NUMBER_TITLE"
                      placeholderTid="ORDER.FORM.PHONE_NUMBER_PLACEHOLDER"
                      name={ORDER_FIELD_NAME.PHONE_NUMBER}
                      value={values[ORDER_FIELD_NAME.PHONE_NUMBER]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={true}
                    />
                    <BasicField
                      titleTid="ORDER.FORM.PROMO_CODE_TITLE"
                      placeholderTid="ORDER.FORM.PROMO_CODE_PLACEHOLDER"
                      name={ORDER_FIELD_NAME.PROMO_CODE}
                      value={values[ORDER_FIELD_NAME.PROMO_CODE]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={true}
                    />
                  </FieldLayout>
                  <TextareaField
                    titleTid="ORDER.FORM.COMMENT_TITLE"
                    placeholderTid="ORDER.FORM.COMMENT_PLACEHOLDER"
                    name={ORDER_FIELD_NAME.COMMENT}
                    value={values[ORDER_FIELD_NAME.COMMENT]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={true}
                  />
                </SectionLayout>

                {typeof order?.deliveryType === 'number' && (
                  <FieldLayout>
                    <Secondary tid="Тип доставки" />
                    {order.deliveryType === DELIVERY_TYPE.POST_OFFICE && (
                      <Primary tid="Почта России" />
                    )}
                    {order.deliveryType === DELIVERY_TYPE.PICKUP && (
                      <Primary tid="Самовывоз" />
                    )}
                    {order.deliveryType === DELIVERY_TYPE.SDEK && (
                      <Primary tid="Служба доставки СДЭК" />
                    )}
                  </FieldLayout>
                )}

                {order?.sdekPointAddress && (
                  <FieldLayout>
                    <Secondary tid="ORDER.FORM.PICKUP_POINT_ADDRESS" />
                    <Primary tid={order.sdekPointAddress} />
                  </FieldLayout>
                )}

                {order?.sdekTariffName && (
                  <FieldLayout>
                    <Secondary tid="ORDER.FORM.SELECTED_TARIFF" />
                    <Primary tid={order.sdekTariffName} />
                  </FieldLayout>
                )}

                <OrderPrice
                  discount={values[ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT]}
                  price={values[ORDER_FIELD_NAME.PRICE]}
                  deliveryPrice={values[ORDER_FIELD_NAME.SHIPPING_PRICE]}
                />
              </SectionLayout>

              <Divider />

              <SectionLayout type="SMALL">
                <Title tid="ORDER.FORM.DATA" />
                <FieldLayout type="double" adaptive>
                  <FieldSelect
                    titleTid="ORDER.FORM.ORDER_STATUS"
                    options={PURCHASE_STATUS_SELECT}
                    name={ORDER_FIELD_NAME.ORDER_STATUS}
                    value={values[ORDER_FIELD_NAME.ORDER_STATUS]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button
                    type="submit"
                    tid="ORDER.FORM.SAVE"
                    disabled={updatePending}
                  />
                </FieldLayout>
                {updatePending && <CenteredSpinner />}
                {updateSuccess && <SuccessAlert tid="ORDER.FORM.SUCCESS" />}
                {updateError && <ErrorAlert tid={updateError} />}
              </SectionLayout>
            </SectionLayout>
          </form>
        );
      }}
    </Formik>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const Button = styled(ButtonSecondary)`
  margin-top: 19px;
`;
const Primary = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Secondary = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
