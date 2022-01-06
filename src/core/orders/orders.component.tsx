import InfiniteScroll from 'react-infinite-scroll-component';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { TextSecondary } from 'src/lib/element/text';
import { Table } from 'src/lib/common/block-table';
import { OrdersComponentProps } from './orders.type';
import { SearchBlock } from 'src/lib/common/block-search';
import { PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { BlockDatepicker } from 'src/lib/common/block-datepicker';

const headersTable = [
  'ORDERS.TABLE.HEADER.ORDER',
  'ORDERS.TABLE.HEADER.DETAILS',
  'ORDERS.TABLE.HEADER.DELIVERY_DATA',
  'ORDERS.TABLE.HEADER.TOTAL',
  'ORDERS.TABLE.HEADER.STATE',
];
const statusCategories = Object.values(PURCHASE_STATUS_INFO).map(
  (item, index) => ({
    id: index,
    tid: item,
  }),
);

export function OrdersComponent(props: OrdersComponentProps) {
  const {
    state: { pending, orders, total },
    onPagination,
    onFilter,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="ORDERS.TITLE" />
      <SearchBlock
        findPlaceholderTid="Поиск по номеру заказа"
        statuses={statusCategories}
        handleFilter={onFilter}
        disabled={pending}
      />
      <BlockDatepicker onChange={onFilter} />
      {pending && <CenteredSpinner />}
      <InfiniteScroll
        loader={<></>}
        dataLength={orders.length}
        next={onPagination}
        hasMore={orders.length < total}
      >
        <Table headers={headersTable} items={orders} />
        {pending && !orders.length && (
          <TextSecondary tid="ORDERS.LIST_IS_EMPTY" />
        )}
      </InfiniteScroll>
    </SectionLayout>
  );
}
