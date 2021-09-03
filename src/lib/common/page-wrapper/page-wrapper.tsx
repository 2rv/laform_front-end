import React, { useEffect, useState } from 'react';
import { PageWrapperPropsType } from './type.page-wrapper';
import { FooterContainer } from '../../../core/footer';
import { HeaderContainer } from '../../../core/header';
import { HeaderLogoContainer } from '../../../core/header-logo';
import {
  PageLayout,
  SectionLayout,
  ContentLayout,
} from 'src/lib/element/layout';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { SidebarMenu } from '../../../core/sidebar-menu';

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
    <Container type="LARGE" isOpen={sidebarIsOpen}>
      <Main type="MEDIUM">
        <SectionLayout type="SMALL">
          <Paddings>
            <Content horizontal="center">
              <PageLayout>
                <HeaderLogoContainer isMobile={width < 720} />
              </PageLayout>
            </Content>
          </Paddings>
          <Wrapper>
            <HeaderContainer
              setSidebarOpen={setSidebarOpen}
              sidebarIsOpen={sidebarIsOpen}
              isTablet={width < 720}
              isMobile={width < 720}
            />
          </Wrapper>
        </SectionLayout>
        <SidebarMenu setOpen={setSidebarOpen} isOpen={sidebarIsOpen} />
        <Paddings>
          <Content horizontal="center">
            <PageLayout>{children}</PageLayout>
          </Content>
        </Paddings>
      </Main>
      <Wrapper>
        <FooterContainer />
      </Wrapper>
    </Container>
  );
}
const Wrapper = (props: PageWrapperPropsType) => {
  const { children } = props;
  return (
    <Background>
      <Paddings>
        <Content horizontal="center">
          <PageLayout>{children}</PageLayout>
        </Content>
      </Paddings>
    </Background>
  );
};
const Container = styled(SectionLayout)`
  padding-top: ${THEME_SIZE.INDENT.MEDIUM};
  display: flex;
  height: 100vh;
  overflow: ${(p: { isOpen: boolean }) => (p.isOpen ? 'hidden' : 'auto')};
  flex-flow: column;
  @media screen and (max-width: 1070px) {
    gap: ${spacing(12)};
  }
  @media screen and (max-width: 720px) {
    gap: ${spacing(6)};
  }
`;
const Content = styled(ContentLayout)`
  flex: 1;
`;
const Main = styled(SectionLayout)`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    gap: ${spacing(3)};
  }
`;
const Background = styled.div`
  background-color: ${THEME_COLOR.GRAY};
  display: grid;
  width: 100%;
`;
const Paddings = styled.div`
  width: 100%;
  padding: 0 15px;
`;
