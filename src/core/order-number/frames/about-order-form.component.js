import styled from 'styled-components';
import { SectionLayout, FieldLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
import { FieldSelect } from '../../../lib/element/field';
import { ButtonSecondary } from '../../../lib/element/button';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import { TextSecondary } from '../../../lib/element/text';
import { AboutOrderPrice } from './about-order-price';
import { AboutOrderFields } from './about-order-fields.component';

export function AboutOrderFormComponent(props) {
  const {
    orderNumberDetails,

    fieldFullName,
    fieldCurrentCity,
    fieldConvenientDeliveryMethod,
    fieldConvenientPaymentMethod,
    fieldContactPhoneNumber,
    fieldOrderNote,
    fieldPromoCode,
    statusSelectName,

    paymentOptions,
    dileveryOptions,

    values,
    handleSubmit,
    handleChange,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout type="SMALL">
        <Title tid="ORDER_NUMBER.FORM.TITLE" />
        <AboutOrderFields
          fieldFullName={fieldFullName}
          fieldCurrentCity={fieldCurrentCity}
          fieldConvenientDeliveryMethod={fieldConvenientDeliveryMethod}
          fieldConvenientPaymentMethod={fieldConvenientPaymentMethod}
          fieldContactPhoneNumber={fieldContactPhoneNumber}
          fieldOrderNote={fieldOrderNote}
          fieldPromoCode={fieldPromoCode}
          paymentOptions={paymentOptions}
          dileveryOptions={dileveryOptions}
          values={values}
          handleChange={handleChange}
          orderNumberDetails={orderNumberDetails}
        />
        <Divider />
        <AboutOrderPrice
          discountPrice={orderNumberDetails?.discountPrice}
          discount={orderNumberDetails?.discount}
          diliveryPrice={orderNumberDetails?.deliveryPrice}
          price={orderNumberDetails?.totalPrice}
        />
        <Title tid="ORDER_NUMBER.FORM.TITLE" />
        <SectionLayout type="TEXT_SMALL">
          <SelectTitle tid="ORDER_NUMBER.FORM.ORDER_STATUS" />
          <FieldLayout type="double" adaptive>
            <FieldSelect
              disabled={true}
              options={[{ id: 0, tid: orderNumberDetails?.orderStatus }]}
              name={statusSelectName}
              value={values[statusSelectName]}
              onChange={handleChange}
            />
            <ButtonSecondary type="submit" tid="ORDER_NUMBER.FORM.SAVE_DATA" />
          </FieldLayout>
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
