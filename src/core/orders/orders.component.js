import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { Spinner } from '../../lib/element/spinner';
import { TextSecondary } from '../../lib/element/text';
import { TableList } from '../block-table-list';

export function OrdersComponent(props) {
  const { pageLoading, isPending, headersTable, products } = props;

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="ORDERS.TITLE" />
        {isPending ? (
          <Spinner />
        ) : Boolean(products?.length > 0) ? (
          <TableList items={products} headers={headersTable} />
        ) : (
          <TextSecondary tid="ORDERS.LIST_IS_EMPTY" />
        )}
      </SectionLayout>
    </>
  );
}
