import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { FooterLinkList, FooterSocialLink } from './frames';
import { NotificationContainer } from '../notification';
import { TextSecondary } from 'src/lib/element/text';

export function FooterComponent(props) {
  const { laFormeLinkItems, faqLinkItems, contactLinkItems } = props;
  return (
    <Container>
      <Content>
        <LinkCase>
          <FooterLinkList data={laFormeLinkItems} />
          <FooterLinkList data={faqLinkItems} />
          <FooterLinkList data={contactLinkItems} />
        </LinkCase>
        <NotificationContainer />
      </Content>
      <Case>
        <div>
          <Copyright tid="FOOTER.COPYRIGHT.BRAND" />
          &nbsp;
          <CopyrightMessage tid="FOOTER.COPYRIGHT.ALL_RIGHTS_RESERVED" />
        </div>
        <FooterSocialLink />
      </Case>
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
const Content = styled.div`
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
const LinkCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
const Case = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${spacing(12)} 0;
  gap: ${spacing(6)};
`;
