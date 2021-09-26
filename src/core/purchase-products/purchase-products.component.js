import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { TextSecondary } from '../../lib/element/text';
import { TableList } from '../block-table-list';
import { FilterTabs } from '../../lib/element/filter-tabs';

export function PurchaseProductsComponent(props) {
  const {
    pageLoading,
    isPending,
    products,
    activeTab,
    setActiveTab,
    tabItems,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="PURCHASED_PRODUCTS.TITLE" />
        {products ? (
          <>
            <FilterTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabItems={tabItems}
            />
            <TableList
              items={products.purchasedProducts}
              headers={products.headers}
            />
          </>
        ) : (
          <TextSecondary tid="PURCHASED_PRODUCTS.EMPTY" />
        )}
      </SectionLayout>
    </>
  );
}
