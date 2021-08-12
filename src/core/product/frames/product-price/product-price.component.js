import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';

export function ProductPriceComponent({
  priceWord,
  symbol,
  price,
  valute,
  discount,
}) {
  return (
    <Container>
      <Pair>
        <PriceWord tid={priceWord} />
        <PriceSymbol children={symbol} />
      </Pair>
      <Price tid={price} />
      <Pair>
        <Valute tid={valute} />
        <PriceSymbol children={'.'} />
      </Pair>
      {discount && <Discount tid={`-${discount}%`} />}
    </Container>
  );
}

const PriceWord = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const PriceSymbol = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Price = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const Valute = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Discount = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Container = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(1)};
`;
const Pair = styled.div`
  display: flex;
  align-items: baseline;
`;
