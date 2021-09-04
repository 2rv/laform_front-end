import styled, { css } from 'styled-components';
import React from 'react';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { HeaderLogoComponent } from './header-logo.component';
import { HeaderMenuComponent } from './header-menu.component';
import { MobileNavMenu } from '../header-component';

export function HeaderComponent(props) {
  const {
    activePath,
    isAuth,
    userName,
    currentLang,
    navMenuItems,
    modalMenuItems,
    isMobile,
    isTablet,
    setSidebarOpen,
    sidebarIsOpen,
  } = props;
  return (
    <Container>
      <HeaderLogoCase>
        <HeaderLogoComponent
          activePath={activePath}
          isAuth={isAuth}
          currentLang={currentLang}
          isMobile={isMobile}
        />
      </HeaderLogoCase>
      <HeaderMenuCase>
        <HeaderMenuComponent
          setSidebarOpen={setSidebarOpen}
          sidebarIsOpen={sidebarIsOpen}
          activePath={activePath}
          isAuth={isAuth}
          userName={userName}
          currentLang={currentLang}
          navMenuItems={navMenuItems}
          modalMenuItems={modalMenuItems}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      </HeaderMenuCase>
      <MobileNavMenu activePath={activePath} />
    </Container>
  );
}

// мобильное 120px 70px + 50px
// обычное 180px  80px + 100px

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderLogoCase = styled.div`
  display: flex;
  height: 100px;
  padding: ${spacing(3)};
  justify-content: center;
  @media screen and (max-width: 720px) {
    height: 50px;
  }
`;
const HeaderMenuCase = styled.div`
  display: flex;
  height: 80px;
  padding: ${spacing(3)};
  justify-content: center;
  background-color: ${THEME_COLOR.GRAY};
  @media screen and (max-width: 720px) {
    height: 70px;
  }
`;
