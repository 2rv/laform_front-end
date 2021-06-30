import styled from 'styled-components';

import { TextSecondary } from '../../../../lib/element/text';
import { THEME_SIZE } from '../../../../lib/theme';

export function FooterCopyrightComponent() {
  return (
    <Container>
      <BolderText tid="FOOTER.COPYRIGHT.BRAND" />
      &nbsp;
      <TextSecondary tid="FOOTER.COPYRIGHT.ALL_RIGHTS_RESERVED" />
    </Container>
  );
}

const BolderText = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Container = styled.div`
  width: max-content;
`;
