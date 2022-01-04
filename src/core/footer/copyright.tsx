import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';

export function Copyright() {
  return (
    <Container>
      <Title tid="FOOTER.COPYRIGHT.BRAND" />
      &nbsp;
      <Text tid="FOOTER.COPYRIGHT.ALL_RIGHTS_RESERVED" />
    </Container>
  );
}

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Container = styled.div`
  line-height: 1.5;
  @media screen and (max-width: 720px) {
    order: 1;
  }
`;
