import styled from 'styled-components';
import { ContentLayout } from '../../lib/element/layout';

import { spacing, THEME_COLOR } from '../../lib/theme';

import { FOOTER_MENU_ITEMS, FOOTER_SOCIAL_LINKS } from './footer.constant';

import {
  EmailSubscribeContainer,
  FooterCopyrightComponent,
  FooterMenuComponent,
  FooterSocialListComponent,
} from './frames';

export function FooterComponent(props) {
  return (
    <Container>
      <ContentLayout>
        <Content>
          <FooterMenu items={FOOTER_MENU_ITEMS} />
          <EmailSubscribe {...props} />
          <FooterCopyright />
          <FooterSocialList items={FOOTER_SOCIAL_LINKS} />
        </Content>
      </ContentLayout>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;

const Content = styled(ContentLayout)`
  display: grid;
  grid-gap: ${spacing(12)};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, [row] auto);
  padding: ${spacing(12)} ${spacing(6)};
  @media screen and (max-width: 1259px) {
    padding: ${spacing(6)} ${spacing(6)};
    grid-gap: ${spacing(6)};
  }
`;

const FooterMenu = styled(FooterMenuComponent)`
  grid-column: 1 / 4;
  grid-row: 1;

  display: flex;
  justify-content: space-between;
`;

const EmailSubscribe = styled(EmailSubscribeContainer)`
  grid-column: 4;
  grid-row: 1;

  margin-left: auto;
`;

const FooterCopyright = styled(FooterCopyrightComponent)`
  grid-column: 1 / 3;
  grid-row: 2;
`;

const FooterSocialList = styled(FooterSocialListComponent)`
  grid-column: 4;
  grid-row: 2;

  margin-left: auto;
`;
