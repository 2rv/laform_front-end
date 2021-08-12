import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
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
    <SectionLayout type="MEDIUM">
      <SliderContainer />
      <CatalogListContainer />
      <PopularGoodsContainer />
      <PopularMasterClassesContainer />
      <HomeArticlesContainer />
      <InformationListContainer />
      <AdvantageListContainer />
    </SectionLayout>
  );
}
