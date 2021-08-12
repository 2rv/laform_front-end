import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from '../../../../lib/element/button';
export function ProductDescriptionComponent({ text, lines = 6 }) {
  return (
    <Container>
      <Text l={lines}>{text}</Text>
      <TextButton tid={'Читать дальше'} />
    </Container>
  );
}
const TextButton = styled(ButtonBasic)`
  margin-left: auto;
  margin-right: ${spacing(2)};
  padding: 0 0 0 0;
  border-radius: 0;
  background-color: inherit;
  line-height: ${THEME_SIZE.FONT.LARGE};
`;
const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${({ l }) => l};
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  width: 100%;
  color: ${THEME_COLOR.SECONDARY};
  line-height: ${THEME_SIZE.FONT.LARGE};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
`;