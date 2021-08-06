import styled, { css } from 'styled-components';
import React from 'react';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { ContentLayout } from '../../lib/element/layout';

import {
  HeaderActionContainer,
  HeaderMenuComponent,
  HeaderMenuMobileComponent,
} from './frames';

export function HeaderComponent(props) {
  const { items, activePath, logged, user, isMobile } = props;

  return (
    <Container isMobile={isMobile}>
      <Content>
        {isMobile ? null : ( // <HeaderMenuMobileComponent />
          <React.Fragment>
            <HeaderMenuComponent items={items} activePath={activePath} />
            <HeaderActionContainer logged={logged} user={user} />
          </React.Fragment>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  ${(p) =>
    p.isMobile &&
    css`
      align-items: center;
    `}
`;

const Content = styled(ContentLayout)`
  display: flex;
  justify-content: space-between;
  padding: ${spacing(5)};
`;
