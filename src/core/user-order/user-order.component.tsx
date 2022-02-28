import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { Table } from 'src/lib/common/block-table';
import { UserOrderComponentProps } from './user-order.type';
import { SectionLayout, FieldLayout } from 'src/lib/element/layout';
import { BasicField, TextareaField } from 'src/lib/element/field';
import { UserOrderPrice } from './user-order.price';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { DELIVERY_TYPE, PURCHASE_STATUS } from 'src/lib/basic-types';
import { ButtonPrimary } from 'src/lib/element/button';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';

const headersTable = [
  'ORDER.TABLE_HEADER.ORDER_ITEMS',
  'ORDER.TABLE_HEADER.PARAMETERS',
  'ORDER.TABLE_HEADER.QUANTITY',
  'ORDER.TABLE_HEADER.TOTAL_PRICE',
];

export function UserOrderComponent(props: UserOrderComponentProps) {
  const {
    state: { pending, order, products },
    handlePayment,
  } = props;
  if (!order) return <CenteredSpinner />;
  const {
    address,
    email,
    fullName,
    orderNumber,
    orderStatus,
    phone,
    price,
    shippingPrice,
    promoCode,
    comment,
    promoCodeDiscount,
    deliveryType,
    sdekPointAddress,
    sdekTariffName,
  } = order;
  return (
    <SectionLayout>
      <LineCase>
        <div>
          <TitlePrimary tid="ORDER.USER_ORDER_TITLE" />
          &nbsp;
          <BoldTitle tid={orderNumber || ''} />
        </div>
      </LineCase>

      {pending && <CenteredSpinner />}
      <Table items={products} headers={headersTable} />

      <SectionLayout type="SMALL">
        <Title tid="ORDER.FORM.TITLE" />
        <SectionLayout type="TEXT">
          <FieldLayout type="double" adaptive>
            <BasicField
              titleTid="ORDER.FORM.FULL_NAME_TITLE"
              placeholderTid="ORDER.FORM.FULL_NAME_PLACEHOLDER"
              value={fullName}
              disabled={true}
            />
            <BasicField
              titleTid="ORDER.FORM.EMAIL_TITLE"
              placeholderTid="ORDER.FORM.EMAIL_PLACEHOLDER"
              value={email}
              disabled={true}
            />
            <BasicField
              titleTid="ORDER.FORM.ADRESS_TITLE"
              placeholderTid="ORDER.FORM.ADRESS_PLACEHOLDER"
              value={address}
              disabled={true}
            />
            <BasicField
              titleTid="ORDER.FORM.PHONE_NUMBER_TITLE"
              placeholderTid="ORDER.FORM.PHONE_NUMBER_PLACEHOLDER"
              value={phone}
              disabled={true}
            />
            <BasicField
              titleTid="ORDER.FORM.PROMO_CODE_TITLE"
              placeholderTid="ORDER.FORM.PROMO_CODE_PLACEHOLDER"
              value={promoCode}
              disabled={true}
            />
          </FieldLayout>
          <TextareaField
            titleTid="ORDER.FORM.COMMENT_TITLE"
            placeholderTid="ORDER.FORM.COMMENT_PLACEHOLDER"
            value={comment}
            disabled={true}
          />

          {typeof deliveryType === 'number' && (
            <SectionLayout type="TEXT_SMALL">
              <Secondary tid="Тип доставки" />
              {deliveryType === DELIVERY_TYPE.POST_OFFICE && (
                <Primary tid="Почта России" />
              )}
              {deliveryType === DELIVERY_TYPE.PICKUP && (
                <Primary tid="Самовывоз" />
              )}
              {deliveryType === DELIVERY_TYPE.SDEK && (
                <Primary tid="Служба доставки СДЭК" />
              )}
            </SectionLayout>
          )}

          {sdekPointAddress && (
            <SectionLayout type="TEXT_SMALL">
              <Secondary tid="ORDER.FORM.PICKUP_POINT_ADDRESS" />
              <Primary tid={sdekPointAddress} />
            </SectionLayout>
          )}

          {sdekTariffName && (
            <SectionLayout type="TEXT_SMALL">
              <Secondary tid="ORDER.FORM.SELECTED_TARIFF" />
              <Primary tid={sdekTariffName} />
            </SectionLayout>
          )}

          {typeof orderStatus === 'number' && (
            <SectionLayout type="TEXT_SMALL">
              <Secondary tid="ORDER.FORM.ORDER_STATUS" />
              <Primary tid={PURCHASE_STATUS[orderStatus]} />
            </SectionLayout>
          )}
        </SectionLayout>

        <LineCase>
          <UserOrderPrice
            price={price}
            discount={promoCodeDiscount}
            deliveryPrice={shippingPrice}
          />
          {(PURCHASE_STATUS['Сформирован'] === orderStatus ||
            PURCHASE_STATUS['Ожидает оплаты'] === orderStatus) && (
            <ButtonPrimary onClick={handlePayment} tid="Оплатить" />
          )}
        </LineCase>
      </SectionLayout>
    </SectionLayout>
  );
}
const BoldTitle = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const LineCase = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: auto 1fr;
  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;
const Primary = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Secondary = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
