import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';
import { TextCurrenyType } from './text.type';
import { currencyFormat } from '../../common/text';

export function TextCurrency({ price, className }: TextCurrenyType) {
  return <Text className={className}>{currencyFormat(price)}</Text>;
}

const Text = styled.span`
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.SECONDARY};
`;
