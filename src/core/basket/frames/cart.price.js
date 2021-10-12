import { TextSecondary, TextCurrency } from '../../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import styled from 'styled-components';
import { ORDER_FIELD_NAME } from '../basket.type';

export function CartPrice(props) {
  const { values, deliveryOptions } = props;

  const price = values[ORDER_FIELD_NAME.PRICE];
  const promoDiscount = values[ORDER_FIELD_NAME.PROMO_DISCOUNT];
  const deliveryMethod = values[ORDER_FIELD_NAME.DELIVERY_METHOD];
  const deliveryPrice = Boolean(deliveryOptions.length > 0) ? deliveryOptions.find((method) => method.tid === deliveryMethod)?.price : 0;

  const discountPrice = price - (price / 100) * promoDiscount;
  const totalPrice = Number(discountPrice) + Number(deliveryPrice) + Number(price);

  return (
    <Container>
      <Content>
        <TextLight
          tid={
            promoDiscount
              ? 'BASKET.FORM.FOOTER.DISCOUNT_PRICE'
              : 'BASKET.FORM.FOOTER.PRICE'
          }
        />
        <div>
          <Price price={discountPrice} />
          &nbsp;
          <TextLight tid="OTHER.VALUTE" />
          &nbsp;
          {promoDiscount !== 0 && <TextDiscount tid={`-${promoDiscount}%`} />}
        </div>
      </Content>
      <Content>
        <TextLight tid="BASKET.FORM.FOOTER.SHIPPING_PRICE" />
        <div>
          <Price price={deliveryPrice} />
          &nbsp;
          <TextLight tid="OTHER.VALUTE" />
        </div>
      </Content>
      <VerticalDivider />
      <Content>
        <TextLight tid="BASKET.FORM.FOOTER.TOTAL_ORDER_PRICE" />
        <div>
          <TitlePrice price={totalPrice} />
          &nbsp;
          <TextLight tid="OTHER.VALUTE" />
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: ${spacing(6)};
  @media screen and (max-width: 400px) {
    gap: ${spacing(3)};
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextLight = styled(TextSecondary)`
  line-height: 1.5;
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const TextBold = styled(TextSecondary)`
  line-height: 1.5;
  font-size: ${(props) => props.fontSize ?? THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const TextDiscount = styled(TextSecondary)`
  line-height: 1.5;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;
const Price = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const TitlePrice = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const VerticalDivider = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  width: 3px;
  height: 100%;
  background-color: ${THEME_COLOR.GRAY};
`;
