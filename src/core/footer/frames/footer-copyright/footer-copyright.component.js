import styled from 'styled-components';

import { TextSecondary } from '../../../../lib/element/text';
import { THEME_SIZE } from '../../../../lib/theme';

export function FooterCopyrightComponent() {
  return (
    <Container>
      <Copyright tid="FOOTER.COPYRIGHT.BRAND" />
      &nbsp;
      <CopyrightMessage tid="FOOTER.COPYRIGHT.ALL_RIGHTS_RESERVED" />
    </Container>
  );
}

const CopyrightMessage = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Copyright = styled(CopyrightMessage)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const Container = styled.div`
  width: max-content;
`;
