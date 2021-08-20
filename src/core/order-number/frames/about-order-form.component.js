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
        <Title tid="О заказе" />
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
        <Title tid="О заказе" />
        <SectionLayout type="TEXT_SMALL">
          <SelectTitle tid="Состояние заказа" />
          <FieldLayout type="double">
            <FieldSelect
              disabled={true}
              options={[{ id: 0, tid: orderNumberDetails?.orderStatus }]}
              name={statusSelectName}
              value={values[statusSelectName]}
              onChange={handleChange}
            />
            <ButtonSecondary tid="Сохранить данные" />
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
