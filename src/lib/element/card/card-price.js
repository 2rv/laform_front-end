import { TextPrimary, TextSecondary } from '../text';
import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from '../../theme';

export function CardPrice(props) {
  const { min = null, max = null, discount = null, valute = null } = props;
  return (
    <div>
      {discount ? (
        <>
          <Text>{discount}</Text>
          &nbsp;
          <ThroughText>{min}</ThroughText>
        </>
      ) : (
        <>
          <Text>{min}</Text>
          {max && <Text>{` - ${max}`}</Text>}
        </>
      )}
      &nbsp;
      <LightText tid="OTHER.VALUTE" />
    </div>
  );
}
const LightText = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
const ThroughText = styled(TextSecondary)`
  text-decoration: line-through;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
