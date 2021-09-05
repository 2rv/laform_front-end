import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { PageWrapperPropsType } from './type.page-wrapper';
import { FooterContainer } from '../../../core/footer';
import { Header } from '../../../core/header';
import { SectionLayout } from 'src/lib/element/layout';
import { spacing } from 'src/lib/theme';
import { SidebarMenu } from '../../../core/header-menu-sidebar';

export function PageWrapper(props: PageWrapperPropsType) {
  const { children } = props;
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const [width, setwidth] = useState(1280);
  const handleWindowSizeChange = () => {
    if (typeof window !== 'undefined') {
      setwidth(window.innerWidth);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setwidth(window.innerWidth);
      window.addEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <Container isOpen={sidebarIsOpen}>
      <Header
        width={width}
        setSidebarOpen={setSidebarOpen}
        sidebarIsOpen={sidebarIsOpen}
      />
      <Main type="LARGE">
        <SidebarMenu setOpen={setSidebarOpen} isOpen={sidebarIsOpen} />
        <Content>{children}</Content>
        <FooterContainer />
      </Main>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  /* overflow: ${(p: { isOpen: boolean }) => (p.isOpen ? 'hidden' : 'auto')}; */
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 1140px;
  flex: 1;
  padding: 0 ${spacing(3)};
  margin-top: ${spacing(12)};
  @media screen and (max-width: 720px) {
    margin-top: ${spacing(3)};
  }
`;
const Main = styled(SectionLayout)`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1070px) {
    gap: ${spacing(12)};
  }
  @media screen and (max-width: 720px) {
    gap: ${spacing(6)};
    padding-bottom: 55px;
  }
`;
