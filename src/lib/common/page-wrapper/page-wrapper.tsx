import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { PageWrapperPropsType } from './type.page-wrapper';
import { FooterContainer } from 'src/core/footer';
import { Header } from 'src/core/header';
import { SectionLayout } from 'src/lib/element/layout';
import { spacing } from 'src/lib/theme';
import { SidebarMenu } from 'src/core/header-menu-sidebar';
import { initializeBasketStore } from 'src/core/basket/basket.action';
import { useDispatch } from 'react-redux';
import { ScrollToTopButton } from '../scroll-to-top';

export function PageWrapper(props: PageWrapperPropsType) {
  const { children } = props;
  const dispatch = useDispatch();
  const [sidebarIsOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sidebarIsOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      dispatch(initializeBasketStore());
    }
  }, []);

  return (
    <Container>
      <Header setSidebarOpen={setSidebarOpen} sidebarIsOpen={sidebarIsOpen} />
      <Relative>
        <SidebarMenu setOpen={setSidebarOpen} isOpen={sidebarIsOpen} />
        <Content type="LARGE">
          <MainCase>
            <Main>{children}</Main>
          </MainCase>
          <FooterContainer />
        </Content>
      </Relative>
      <ScrollToTopButton />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Relative = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;
const Content = styled(SectionLayout)`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: ${spacing(12)};
  @media screen and (max-width: 1070px) {
    gap: ${spacing(12)};
    margin-top: ${spacing(6)};
  }
  @media screen and (max-width: 720px) {
    gap: ${spacing(6)};
    margin-top: ${spacing(3)};
  }
`;
const MainCase = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 ${spacing(3)};
`;
const Main = styled.div`
  width: 100%;
  max-width: 1140px;
  align-self: center;
`;
