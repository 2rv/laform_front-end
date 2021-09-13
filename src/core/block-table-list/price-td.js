import styled, { css } from 'styled-components';
import { TextSecondary, TextCurrency } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';

export function PriceTd(props) {
  const { isLast, countedPrice } = props;
  return (
    <Td last={isLast}>
      <Case>
        <Price price={countedPrice} />
        &nbsp;
        <Valute tid="руб." />
      </Case>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  width: 130px;
  min-width: 130px;
  ${(p) =>
    p.last &&
    css`
      padding-right: ${spacing(6)};
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
