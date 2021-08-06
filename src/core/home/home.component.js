import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import {
  AdvantageListContainer,
  CatalogListContainer,
  InformationListContainer,
  PopularGoodsContainer,
  PopularMasterClassesContainer,
} from './frames';
import { SliderContainer } from '../../core/slider';
import { HomeArticlesContainer } from '../../core/home-articles';

export function HomeComponent(props) {
  return (
    <Container>
      <Content>
        <ContentSectionLayout type="medium">
          <SliderContainer />
          <CatalogListContainer />
          {/* <PopularGoodsContainer /> */}
          {/* <PopularMasterClassesContainer /> */}
          <HomeArticlesContainer />
          <InformationListContainer />
          <AdvantageListContainer />
        </ContentSectionLayout>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
  @media screen and (max-width: 600px) {
    padding: 0 ${spacing(3)};
  }
`;

const ContentSectionLayout = styled(IndentLayout)`
  @media screen and (max-width: 600px) {
    grid-row-gap: ${spacing(6)};
  }
`;
