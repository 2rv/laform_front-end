import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { SliderContainer } from '../../core/slider';
import { CatalogListComponent, AdvantageInfoComponent } from './frames';
import {
  ARTICLES_ROUTE_PATH,
  MASTER_CLASSES_ROUTE_PATH,
  SEWING_GOODS_ROUTE_PATH,
} from './home.constant';
import { HelpInfoBlock } from '../block-help-info';
import { CardListBlock } from '../../lib/element/card-list';

import { ProductCartSkeleton } from '../../lib/element/skeleton';

export function HomeComponent(props) {
  const {
    catalogListItems,
    pageLoading,
    //------------
    masterClassIsPending,
    masterClassIsSuccess,
    masterClassIsError,
    masterClassErrorMessage,
    masterClassListItems,
    //------------
    sewingGoodsIsPending,
    sewingGoodsIsSuccess,
    sewingGoodsIsError,
    sewingGoodsErrorMessage,
    sewingGoodsListItems,
    //------------
    articleIsPending,
    articleIsSuccess,
    articleIsError,
    articleErrorMessage,
    articleListItems,
  } = props;
  return (
    <SectionLayout type="MEDIUM">
      <SliderContainer />
      <CatalogListComponent items={catalogListItems} />
      {sewingGoodsIsPending ? (
        <ProductCartSkeleton quantity={3} />
      ) : (
        Boolean(sewingGoodsListItems.length > 0) && (
          <CardListBlock
            title="HOME.POPULAR_GOODS_TITLE"
            path={SEWING_GOODS_ROUTE_PATH}
            items={sewingGoodsListItems}
          />
        )
      )}
      {masterClassIsPending ? (
        <ProductCartSkeleton quantity={3} />
      ) : (
        Boolean(masterClassListItems.length > 0) && (
          <CardListBlock
            title="HOME.POPULAR_MASTER_CLASSES_TITLE"
            path={MASTER_CLASSES_ROUTE_PATH}
            items={masterClassListItems}
          />
        )
      )}
      {articleIsPending ? (
        <ProductCartSkeleton quantity={3} />
      ) : (
        Boolean(articleListItems.length > 0) && (
          <CardListBlock
            title="HOME.POPULAR_ARTICLES_TITLE"
            path={ARTICLES_ROUTE_PATH}
            items={articleListItems}
          />
        )
      )}
      <HelpInfoBlock viewAll />
      <AdvantageInfoComponent />
    </SectionLayout>
  );
}
