import React from 'react';
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
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function PageWrapper(props: PageWrapperPropsType) {
  const { children } = props;

  return (
    <Container type="LARGE">
      <Main type="MEDIUM">
        <SectionLayout type="SMALL">
          <Paddings>
            <Content horizontal="center">
              <PageLayout>
                <HeaderLogoContainer />
              </PageLayout>
            </Content>
          </Paddings>
          <Wrapper>
            <HeaderContainer />
          </Wrapper>
        </SectionLayout>
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
  overflow: auto;
  flex-flow: column;
`;
const Content = styled(ContentLayout)`
  flex: 1;
`;
const Main = styled(SectionLayout)`
  flex: 1;
  display: flex;
  flex-direction: column;
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

// здесь будут штуки может для адаптива хз я

// страница HOME

// const ContentFooterLayout = styled(IndentLayout)`
//   @media screen and (max-width: 600px) {
//     grid-row-gap: ${spacing(12)};
//   }
// `;

// const ContentLayout = styled(IndentLayout)`
//   @media screen and (max-width: 600px) {
//     grid-row-gap: ${spacing(3)};
//   }
// `;

// const [width, setwidth] = useState(null);
//   const handleWindowSizeChange = () => {
//     setwidth(window.innerWidth);
//   };
//   useEffect(() => {
//     setwidth(window.innerWidth);
//     window.addEventListener('resize', handleWindowSizeChange);
//   }, []);
//   const isMobile = width && width < 600;
// <HeaderLogoContainer isMobile={isMobile} />
//           <HeaderContainer isMobile={isMobile} />
