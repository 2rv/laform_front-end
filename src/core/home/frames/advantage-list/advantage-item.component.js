import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary } from '../../../../lib/element/text';

export function AdvantageItemComponent(props) {
  const { count, title } = props;

  return (
    <Container>
      <CountText tid={count} />
      <TitleText tid={title} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(8)};
  padding: ${spacing(5)} ${spacing(6)};
  justify-items: center;
  align-items: center;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const CountText = styled(TextPrimary)`
  color: ${THEME_COLOR.PRIMARY};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.EXTRA_BOLD};
`;

const TitleText = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5em;
`;
