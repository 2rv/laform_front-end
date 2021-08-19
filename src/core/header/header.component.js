import styled, { css } from 'styled-components';
import React from 'react';
import { spacing, THEME_COLOR } from '../../lib/theme';

import {
  HeaderActionContainer,
  HeaderMenuComponent,
  HeaderMenuMobileComponent,
} from './frames';

export function HeaderComponent(props) {
  const {
    items,
    activePath,
    logged,
    user,
    role,
    width,
    setSidebarOpen,
    sidebarIsOpen,
  } = props;
  return (
    <Container>
      {width < 950 ? (
        <HeaderMenuMobileComponent
          setSidebarOpen={setSidebarOpen}
          sidebarIsOpen={sidebarIsOpen}
        />
      ) : (
        <React.Fragment>
          <HeaderMenuComponent items={items} activePath={activePath} />
          <HeaderActionContainer logged={logged} user={user} role={role} />
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
