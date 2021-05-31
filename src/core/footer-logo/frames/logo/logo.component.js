import styled from 'styled-components';

import { ReactComponent as Logo } from '../../../../asset/svg/logo.svg';

import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary } from '../../../../lib/element/text';

export function LogoComponent() {
  return (
    <Container>
      <Logo />
      <div>
        <Text tid="FOOTER_LOGO.HEADING_TEXT" />
        &nbsp;
        <BrandText tid="FOOTER_LOGO.BRAND_TEXT" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(6)};
  align-items: center;
`;

const Text = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const BrandText = styled(TextPrimary)`
  color: ${THEME_COLOR.PRIMARY};
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
