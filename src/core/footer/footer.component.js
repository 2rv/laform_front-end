import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { FooterLinkList, FooterSocialLink } from './frames';
import { NotificationContainer } from '../notification';
import { TextSecondary } from 'src/lib/element/text';
import { DownloadLinks } from '../header-component';

export function FooterComponent(props) {
  const { laFormeLinkItems, faqLinkItems, contactLinkItems } = props;
  return (
    <Container>
      <Content>
        <ContentCase>
          <ListCase>
            <FooterLinkList data={laFormeLinkItems} />
            <FooterLinkList data={faqLinkItems} />
            <FooterLinkList data={contactLinkItems} />
          </ListCase>
          <NotificationContainer />
        </ContentCase>
        <CopyrightCase>
          <div>
            <Copyright tid="FOOTER.COPYRIGHT.BRAND" />
            &nbsp;
            <CopyrightMessage tid="FOOTER.COPYRIGHT.ALL_RIGHTS_RESERVED" />
          </div>
          <FooterSocialLink />
        </CopyrightCase>
        <DownloadLinks />
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
const ListCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    flex-direction: column;
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
