import { TextPrimary, TextSecondary } from '../text';
import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function Price({
  min = null,
  max = null,
  discount = null,
  valute = null,
}) {
  return (
    <Container>
      <Text>{discount && discount}&nbsp;</Text>
      {discount && <Discount tid={min} />}
      <Text>
        {!discount && min}
        {max && ` - ${max}`}
      </Text>
      &nbsp;
      <TextPrimary tid={valute} />
    </Container>
  );
}

const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
const Discount = styled(TextSecondary)`
  text-decoration: line-through;
  color: black;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
