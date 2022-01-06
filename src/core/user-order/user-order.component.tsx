import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { Table } from 'src/lib/common/block-table';
import { UserOrderComponentProps } from './user-order.type';
import { SectionLayout, FieldLayout } from 'src/lib/element/layout';
import { BasicField, TextareaField } from 'src/lib/element/field';
import { UserOrderPrice } from './user-order.price';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { PURCHASE_STATUS } from 'src/lib/basic-types';

const headersTable = [
  'ORDER_NUMBER.TABLE.HEADER.ORDER_ITEMS',
  'ORDER_NUMBER.TABLE.HEADER.PARAMETERS',
  'ORDER_NUMBER.TABLE.HEADER.TOTAL_PRICE',
];

export function UserOrderComponent(props: UserOrderComponentProps) {
  const {
    state: { pending, order, products },
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
  } = order;
  return (
    <SectionLayout>
      <div>
        <TitlePrimary tid="ORDER_NUMBER.TABLE.MY_PURCHASE" />
        &nbsp;
        <BoldTitle tid={orderNumber || ''} />
      </div>
      {pending && <CenteredSpinner />}
      <Table items={products} headers={headersTable} />

      <SectionLayout type="SMALL">
        <Title tid="ORDER_NUMBER.FORM.TITLE" />
        <SectionLayout type="TEXT">
          <FieldLayout type="double" adaptive>
            <BasicField
              titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.FULL_NAME"
              placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.FULL_NAME"
              value={fullName}
              disabled={true}
            />
            <BasicField
              titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.EMAIL"
              placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.EMAIL"
              value={email}
              disabled={true}
            />
            <BasicField
              titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CURRENT_CITY"
              placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.MOSKVA"
              value={address}
              disabled={true}
            />
            <BasicField
              titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.CONTACT_NUMBER"
              placeholderTid="ORDER_NUMBER.FORM.FIELDS.PLACEHOLDER.CONTACT_NUMBER"
              value={phone}
              disabled={true}
            />
            <BasicField
              titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.PROMO_CODE"
              placeholderTid="Промокод отсутствует"
              value={promoCode}
              disabled={true}
            />
          </FieldLayout>
          <TextareaField
            titleTid="ORDER_NUMBER.FORM.FIELDS.TITLE.ORDER_NOTE"
            placeholderTid="Примечания отсутствуют"
            value={comment}
            disabled={true}
          />
        </SectionLayout>
        <LineCase>
          <UserOrderPrice
            price={price}
            discount={promoCodeDiscount}
            deliveryPrice={shippingPrice}
          />
          <Case>
            <TitlePrimary tid="Состояние -" />
            &nbsp;
            <Status tid={PURCHASE_STATUS[orderStatus]} />
          </Case>
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
const Case = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 880px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Status = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;
