import styled, { css } from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { TextButton } from '../../lib/element/button';
import { useState } from 'react';

export function TextBlock(props) {
  const [more, setMore] = useState(true);
  const { height, text } = props;
  return (
    <Container height={height}>
      <Text more={more}>{text}</Text>
      <Button
        onClick={() => setMore(!more)}
        tid={more ? 'Читать дальше' : 'Закрыть'}
      />
    </Container>
  );
}
const Button = styled(TextButton)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  width: fit-content;
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
  width: 100%;
  transition: 0.7s;
  line-height: 1.5;
`;

const Text = styled(TextSecondary)`
  display: -webkit-box;
  ${(p) =>
    p.more &&
    css`
      -webkit-line-clamp: 3;
    `}
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
