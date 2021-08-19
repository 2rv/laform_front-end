import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import {
  AdvantageListContainer,
  CatalogListComponent,
  InformationListContainer,
  AdvantageInfoComponent,
} from './frames';
import { SliderContainer } from '../../core/slider';
import {
  ARTICLES_ROUTE_PATH,
  MASTER_CLASSES_ROUTE_PATH,
  SEWING_GOODS_ROUTE_PATH,
} from './home.constant';
import { HelpInfoBlock } from '../block-help-info';
import { CardListBlock } from 'src/lib/element/card-list';

export function HomeComponent(props) {
  const {
    articlesListItems,
    masterClassesListItems,
    sewingGoodsListItems,
    catalogListItems,
  } = props;
  return (
    <SectionLayout type="MEDIUM">
      <SliderContainer />
      <CatalogListComponent items={catalogListItems} />
      <CardListBlock
        title={'HOME.POPULAR_GOODS_TITLE'}
        path={SEWING_GOODS_ROUTE_PATH}
        items={sewingGoodsListItems}
      />
      <CardListBlock
        title={'HOME.POPULAR_MASTER_CLASSES_TITLE'}
        path={MASTER_CLASSES_ROUTE_PATH}
        items={masterClassesListItems}
      />
      <CardListBlock
        title={'HOME.POPULAR_ARTICLES_TITLE'}
        path={ARTICLES_ROUTE_PATH}
        items={articlesListItems}
      />
      <HelpInfoBlock viewAll />
      <AdvantageInfoComponent />
    </SectionLayout>
  );
}
