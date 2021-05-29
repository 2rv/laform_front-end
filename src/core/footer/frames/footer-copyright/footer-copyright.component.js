import styled from 'styled-components';

import { TextSecondary } from '../../../../lib/element/text';
import { THEME_SIZE } from '../../../../lib/theme';

export function FooterCopyrightComponent(props) {
  return (
    <div {...props}>
      <BolderText tid="FOOTER.COPYRIGHT.BRAND" />
      &nbsp;
      <TextSecondary tid="FOOTER.COPYRIGHT.ALL_RIGHTS_RESERVED" />
    </div>
  );
}

const BolderText = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
