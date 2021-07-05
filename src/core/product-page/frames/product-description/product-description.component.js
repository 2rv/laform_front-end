import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from '../../../../lib/element/button';
export function ProductDescriptionComponent({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
      <TextButton tid={'Читать дальше'} />
    </Container>
  );
}
const TextButton = styled(ButtonBasic)`
  margin-left: auto;
  padding: 0 0 0 0;
  border-radius: 0;
  background-color: inherit;
  line-height: ${THEME_SIZE.FONT.LARGE};
`;
const Text = styled.p`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  color: ${THEME_COLOR.SECONDARY};
  line-height: ${THEME_SIZE.FONT.LARGE};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
