import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import {
  AdvantageListContainer,
  CatalogListContainer,
  InformationListContainer,
  SliderContainer,
  PopularGoodsContainer,
  PopularMasterClassesContainer,
  PopularArticlesContainer,
} from './frames';

export function HomeComponent(props) {
  const { sliderData } = props;
  return (
    <Container>
      <Content>
        <IndentLayout type="medium">
          <SliderContainer sliderData={sliderData} />
          <CatalogListContainer />
          <PopularGoodsContainer />
          <PopularMasterClassesContainer />
          <PopularArticlesContainer />
          <InformationListContainer />
          <AdvantageListContainer />
        </IndentLayout>
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
`;
