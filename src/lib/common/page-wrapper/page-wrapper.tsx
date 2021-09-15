import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { PageWrapperPropsType } from './type.page-wrapper';
import { FooterContainer } from '../../../core/footer';
import { Header } from '../../../core/header';
import { SectionLayout } from 'src/lib/element/layout';
import { spacing, THEME_COLOR } from 'src/lib/theme';
import { SidebarMenu } from '../../../core/header-menu-sidebar';
import { IconButton } from 'src/lib/element/button';
import { ReactComponent as ArrowUp } from 'src/asset/svg/arrow-up.svg';
import { initializeBasketStore } from '../../../core/basket/basket.action';
import { useDispatch } from 'react-redux';

export function PageWrapper(props: PageWrapperPropsType) {
  const { children } = props;
  const dispatch = useDispatch();
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const [width, setwidth] = useState(1280);
  const containerRef = useRef<any>(null);
  //   const [scroll, setScroll] = useState(0);

  const handleWindowSizeChange = () => {
    if (typeof window !== 'undefined') {
      setwidth(window.innerWidth);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setwidth(window.innerWidth);
      dispatch(initializeBasketStore());
      window.addEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  //   const handleScroll = (e) => setScroll(e.target.scrollTop);
  // onScroll={handleScroll}
  const scrollToTop = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Container ref={containerRef} isOpen={sidebarIsOpen}>
      <Header
        width={width}
        setSidebarOpen={setSidebarOpen}
        sidebarIsOpen={sidebarIsOpen}
      />
      <Relative>
        {width < 1071 && (
          <SidebarMenu setOpen={setSidebarOpen} isOpen={sidebarIsOpen} />
        )}
        <Content type={'LARGE'}>
          <MainCase>
            <Main>{children}</Main>
          </MainCase>
          <FooterContainer />
        </Content>
      </Relative>
      <ScrollToTopButton onClick={scrollToTop}>
        <ArrowUp />
      </ScrollToTopButton>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  overflow: ${(p: { isOpen: boolean }) => (p.isOpen ? 'hidden' : 'auto')};
`;
const Relative = styled.div`
  display: flex;
  position: relative;
  flex: 1;
`;
const Content = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  flex: 1;
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
const ScrollToTopButton = styled(IconButton)`
  background: ${THEME_COLOR.SECONDARY_DARK};
  z-index: 999;
  position: fixed;
  right: 30px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media screen and (max-width: 720px) {
    right: 10px;
    bottom: 60px;
  }
`;
