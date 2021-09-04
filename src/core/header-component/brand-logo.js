import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ReactComponent as LogoIcon } from '../../asset/svg/logo.svg';
import { TextPrimary } from '../../lib/element/text';
import { setLinkRedirect } from 'src/main/navigation';

export function BrandLogo() {
  return (
    <Container onClick={setLinkRedirect('/')}>
      <LogoIcon />
      <div>
        <Text tid="HEADER_LOGO.HEADING_TEXT" />
        &nbsp;
        <BrandText tid="HEADER_LOGO.BRAND_TEXT" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(6)};
  align-items: center;
  cursor: pointer;
  user-select: none;
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
