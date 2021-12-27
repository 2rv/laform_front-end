import InfiniteScroll from 'react-infinite-scroll-component';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { Table } from 'src/lib/common/block-table';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { SearchBlock } from 'src/lib/common/block-search';
import { BlockDatepicker } from 'src/lib/common/block-datepicker';
import { PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { UserOrdersComponentProps } from './user-orders.type';

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

export function UserOrdersComponent(props: UserOrdersComponentProps) {
  const {
    state: { pending, orders, total },
    onPagination,
    onFilter,
  } = props;

  return (
    <SectionLayout>
      {pending && <CenteredSpinner />}

      <TitlePrimary tid="ORDERS.TITLE" />
      <SearchBlock
        findPlaceholderTid="Поиск по номеру заказа"
        statuses={statusCategories}
        handleFilter={onFilter}
        disabled={pending}
      />
      <BlockDatepicker onChange={onFilter} />
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
