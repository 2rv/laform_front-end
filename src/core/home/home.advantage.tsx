import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary } from 'src/lib/element/text';

export function HomeAdvantage() {
  return (
    <Container>
      <Content>
        <CountText tid="HOME.ADVANTAGE_LIST.PATTERNS.COUNT" />
        <TitleText tid="HOME.ADVANTAGE_LIST.PATTERNS.TITLE" />
      </Content>
      <Content>
        <CountText tid="HOME.ADVANTAGE_LIST.YEARS.COUNT" />
        <TitleText tid="HOME.ADVANTAGE_LIST.YEARS.TITLE" />
      </Content>
      <Content>
        <CountText tid="HOME.ADVANTAGE_LIST.CLIENTS.COUNT" />
        <TitleText tid="HOME.ADVANTAGE_LIST.CLIENTS.TITLE" />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(6)};
  padding: ${spacing(6)} ${spacing(3)};
  align-items: center;
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const CountText = styled(TextPrimary)`
  color: ${THEME_COLOR.PRIMARY};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.EXTRA_BOLD};
`;
const TitleText = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
