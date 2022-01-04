import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { Notification } from './notification';
import { NavLinks } from './nav-links';
import { SocialLinks } from './social-links';
import { DownloadLinks } from './download-link';
import { BlockPhone } from './phone';

export function Footer() {
  return (
    <Container>
      <Content>
        <ContentCase>
          <NavLinks />
          <Notification />
        </ContentCase>
        <CopyrightCase>
          <div>
            <Copyright tid="FOOTER.COPYRIGHT.BRAND" />
            &nbsp;
            <CopyrightMessage tid="FOOTER.COPYRIGHT.ALL_RIGHTS_RESERVED" />
          </div>
          <SocialLinks />
        </CopyrightCase>
        <DownloadLinks />
        <BlockPhone />
      </Content>
    </Container>
  );
}

const CopyrightMessage = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
`;
const Copyright = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const ContentCase = styled.div`
  display: grid;
  gap: ${spacing(6)};
  grid-template-columns: 1fr auto;
  @media screen and (max-width: 720px) {
    display: contents;
  }
  input {
    background: ${THEME_COLOR.WHITE};
  }
`;
const CopyrightCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;
const Content = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: ${spacing(12)} 0;
  gap: ${spacing(6)};
`;
const Container = styled.div`
  background-color: ${THEME_COLOR.GRAY};
  display: flex;
  justify-content: center;
  padding: 0 ${spacing(3)};
`;
