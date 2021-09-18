import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../lib/theme';
import { TextCurrency, TextSecondary } from '../../../lib/element/text';
import { SectionLayout } from '../../../lib/element/layout';

export function AboutOrderPrice(props) {
  const {
    discountPrice = 0,
    discount = false,
    diliveryPrice = 0,
    price = 0,
  } = props;
  return (
    <Container>
      <SectionLayout type="TEXT">
        <Text tid="PRODUCT_PRICE.DISCOUNT_PRICE" />
        <div>
          <Price price={discountPrice} />
          &nbsp;
          <TextLight tid={'PRODUCT_PRICE.CURRENCY'} />
          &nbsp;
          {discount && <TextColored tid={`-${discount}%`} />}
        </div>
      </SectionLayout>
      <SectionLayout type="TEXT">
        <Text tid="PRODUCT_PRICE.DELIVERY_PRICE" />
        <div>
          <Price price={diliveryPrice} />
          &nbsp;
          <TextLight tid={'PRODUCT_PRICE.CURRENCY'} />
        </div>
      </SectionLayout>
      <VerticalDivider />
      <SectionLayout type="TEXT">
        <Text tid="PRODUCT_PRICE.TOTAL_ORDER_PRICE" />
        <div>
          <TitlePrice price={price} />
          &nbsp;
          <TextLight tid={'PRODUCT_PRICE.CURRENCY'} />
        </div>
      </SectionLayout>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(6)};
`;
const VerticalDivider = styled.div`
  display: grid;
  width: 3px;
  background-color: ${THEME_COLOR.GRAY};
`;
const Text = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Price = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const TitlePrice = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
const TextLight = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const TextColored = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
