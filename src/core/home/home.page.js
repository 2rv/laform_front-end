import { IndentLayout } from '../../lib/element/layout';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';
import { useState, useEffect } from 'react';

import { HomeContainer } from './home.container';

export function HomePage() {
  const [width, setwidth] = useState(null);
  const handleWindowSizeChange = () => {
    setwidth(window.innerWidth);
  };
  useEffect(() => {
    setwidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);
  const isMobile = width && width < 600;

  return (
    <ContentFooterLayout type="large">
      <ContentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer isMobile={isMobile} />
          <HeaderContainer isMobile={isMobile} />
        </IndentLayout>
        <HomeContainer />
      </ContentLayout>
      <FooterContainer />
    </ContentFooterLayout>
  );
}

const ContentFooterLayout = styled(IndentLayout)`
  @media screen and (max-width: 600px) {
    grid-row-gap: ${spacing(12)};
  }
`;

const ContentLayout = styled(IndentLayout)`
  @media screen and (max-width: 600px) {
    grid-row-gap: ${spacing(3)};
  }
`;
