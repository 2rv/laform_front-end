import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { TextSecondary, TextCurrency } from '../../lib/element/text';

export function ProductPrice(props) {
  const { price = 0, discount = 0, count = 1 } = props;
  const discountPrice = (price - price * (discount / 100)) * count;
  return (
    <Container>
      <TextSecondary tid="PRODUCT_PRICE.PRICE" />
      &nbsp;
      <Price price={discountPrice} />
      &nbsp;
      <TextLight tid="PRODUCT_PRICE.CURRENCY" />
      &nbsp;
      {discount !== 0 && <TextColored tid={`-${discount}%`} />}
    </Container>
  );
}
const Container = styled.div`
  height: fit-content;
  width: max-content;
`;
const Price = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  color: ${THEME_COLOR.SECONDARY_DARK};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
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
