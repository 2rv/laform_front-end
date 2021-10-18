import styled, { css } from 'styled-components';
import { TextSecondary, TextCurrency } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

interface props {
  isLast?: boolean;
  totalPrice?: number;
}
export function TablePrice(props: props) {
  const { isLast, totalPrice } = props;
  if (typeof totalPrice !== 'number') return null;
  return (
    <Td last={isLast}>
      <Case>
        <Price price={totalPrice} />
        &nbsp;
        <Valute tid="PRODUCT_PRICE.CURRENCY" />
      </Case>
    </Td>
  );
}

const Td = styled.td<any>`
  vertical-align: middle;
  width: auto;
  min-width: 150px;
  ${(p) =>
    p.last &&
    css`
      padding-right: ${spacing(2)};
    `}
  @media screen and (max-width: 875px) {
    margin-left: 90px;
  }
`;
const Case = styled.div`
  line-height: 1.5;
`;
const Price = styled(TextCurrency)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Valute = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
