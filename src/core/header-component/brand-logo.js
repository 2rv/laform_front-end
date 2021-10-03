import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { TextPrimary } from '../../lib/element/text';
import { setLinkRedirect } from 'src/main/navigation';

export function BrandLogo() {
  return (
    <Container onClick={setLinkRedirect('/')}>
      <img src={'https://i.ibb.co/VJGKXFQ/la.png'} alt="Logo" width="68" height="66" />
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
