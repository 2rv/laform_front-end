import styled from 'styled-components';
import { spacing, THEME_COLOR } from 'src/lib/theme';
import { Notification } from './notification';
import { NavLinks } from './nav-links';
import { SocialLinks } from './social-links';
import { BlockPhone } from './phone';
import { Copyright } from './copyright';
import { useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';

export function Footer() {
  useSelector((s: any) => s[LANG_STORE_NAME]);
  return (
    <Container>
      <Content>
        <Line>
          <NavLinks />
          <Notification />
        </Line>
        <BlockPhone />
        <Case>
          <Copyright />
          <SocialLinks />
        </Case>
      </Content>
    </Container>
  );
}

const Line = styled.div`
  display: flex;
  gap: ${spacing(3)};
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;
const Case = styled.div`
  display: flex;
  gap: ${spacing(3)};
  justify-content: space-between;
  @media screen and (max-width: 1070px) {
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
