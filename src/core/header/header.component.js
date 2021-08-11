import styled, { css } from 'styled-components';
import React from 'react';
import { spacing, THEME_COLOR } from '../../lib/theme';

import {
  HeaderActionContainer,
  HeaderMenuComponent,
  HeaderMenuMobileComponent,
} from './frames';

export function HeaderComponent(props) {
  const { items, activePath, logged, user, isMobile } = props;

  return (
    <Container isMobile={isMobile}>
      {isMobile ? null : ( // <HeaderMenuMobileComponent />
        <React.Fragment>
          <HeaderMenuComponent items={items} activePath={activePath} />
          <HeaderActionContainer logged={logged} user={user} />
        </React.Fragment>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(5)};
  justify-content: space-between;
  ${(p) =>
    p.isMobile &&
    css`
      align-items: center;
    `}
`;
