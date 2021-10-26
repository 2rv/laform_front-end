import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { TextSecondary } from '../../lib/element/text';
import { FilterTabs } from '../../lib/element/filter-tabs';
import { HintBlockComponent } from './frame/hint-block.component';
import { Table } from 'src/lib/common/block-table';
import InfiniteScroll from 'react-infinite-scroll-component';

export function PurchaseProductsComponent(props) {
  const {
    pageLoading,
    isPending,
    products,
    activeTab,
    setActiveTab,
    tabItems,
    // fetchData,
    // hasMore,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="PURCHASED_PRODUCTS.TITLE" />
        <HintBlockComponent />
        <FilterTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabItems={tabItems}
        />
        {Boolean(products.purchasedProducts?.length > 0) ? (
          // <InfiniteScroll
          //   dataLength={products.purchasedProducts?.length ?? 0}
          //   next={fetchData}
          //   hasMore={hasMore}
          // >
            <Table
              items={products.purchasedProducts}
              headers={products.headers}
            />
          // </InfiniteScroll>
        ) : (
          <TextSecondary tid="PURCHASED_PRODUCTS.EMPTY" />
        )}
      </SectionLayout>
    </>
  );
}
