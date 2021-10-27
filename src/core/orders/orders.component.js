import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { Spinner } from '../../lib/element/spinner';
import { TextSecondary } from '../../lib/element/text';
import { Table } from 'src/lib/common/block-table';
import InfiniteScroll from 'react-infinite-scroll-component';

export function OrdersComponent(props) {
  const { pageLoading, isPending, headersTable, products, fetchData, hasMore } = props;

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="ORDERS.TITLE" />
        {isPending ? (
          <Spinner />
        ) : Boolean(products?.length > 0) ? (
          <InfiniteScroll
            dataLength={products.length}
            next={fetchData}
            hasMore={hasMore}
          >
            <Table headers={headersTable} items={products} />
          </InfiniteScroll>
        ) : (
          <TextSecondary tid="ORDERS.LIST_IS_EMPTY" />
        )}
      </SectionLayout>
    </>
  );
}
