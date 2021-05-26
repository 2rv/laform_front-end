import styled from 'styled-components';

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
      <FooterMenu items={FOOTER_MENU_ITEMS} />
      <EmailSubscribe {...props} />
      <FooterCopyright />
      <FooterSocialList items={FOOTER_SOCIAL_LINKS} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, [row] auto);
  padding: ${spacing(12)} ${spacing(30)};
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
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
