import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { TextPrimary } from '../../lib/element/text';
import { setLinkRedirect } from 'src/main/navigation';

export function BrandLogo() {
  return (
    <Container onClick={setLinkRedirect('/')}>
      <img src={'/static/image/laforme-header-logo.png'} alt="Logo" />
      <div>
        <Text tid="HEADER_LOGO.HEADING_TEXT" />
        &nbsp;
        <BrandText tid="La`forme Patterns" />
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
  @media screen and (max-width: 720px) {
    display: none;
  }
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
