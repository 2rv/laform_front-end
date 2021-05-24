import styled from 'styled-components';

import { spacing, THEME_COLOR } from '../../lib/theme';

import { HeaderActionContainer, HeaderMenuComponent } from './frames';

export function HeaderComponent(props) {
  const { items, activePath, logged, user } = props;

  return (
    <Container>
      <HeaderMenuComponent items={items} activePath={activePath} />
      <HeaderAction logged={logged} user={user} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: ${spacing(16)};
  padding: 0 ${spacing(30)};
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;

const HeaderAction = styled(HeaderActionContainer)`
  margin-left: auto;
`;
