import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';

export function ProductPriceComponent({ price = 0, discount = 0 }) {
  const discountPrice = price - (price / 100) * discount;
  return (
    <Text>
      <Text tid="Цена" />: &nbsp;
      <Price tid={discountPrice} />
      &nbsp;
      <TextLight tid={'руб.'} />
      &nbsp;
      {discount !== 0 && <TextColored tid={`-${discount}%`} />}
    </Text>
  );
}
const Text = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Price = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
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
