import styled from 'styled-components';

import { spacing, THEME_COLOR } from '../../lib/theme';
import { ContentLayout } from '../../lib/element/layout';

import { HeaderActionContainer, HeaderMenuComponent } from './frames';

export function HeaderComponent(props) {
  const { items, activePath, logged, user } = props;

  return (
    <Container>
      <Content>
        <HeaderMenuComponent items={items} activePath={activePath} />
        <HeaderActionContainer logged={logged} user={user} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;

const Content = styled(ContentLayout)`
  display: flex;
  padding: 0 ${spacing(6)};
  justify-content: space-between;
`;
