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
    isMobile,
    isTablet,
    setSidebarOpen,
    sidebarIsOpen,
    cartItems = 0,
  } = props;
  return (
    <Container>
      {isTablet ? (
        <HeaderMenuMobileComponent
          setSidebarOpen={setSidebarOpen}
          sidebarIsOpen={sidebarIsOpen}
          cartItems={cartItems}
          user={user}
          logged={logged}
          isMobile={isMobile}
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
  gap: ${spacing(6)};
  justify-content: space-between;
`;
