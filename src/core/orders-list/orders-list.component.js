import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { TableList } from '../block-table-list';
import { Pagination } from './frame/pagination';

export function OrdersListComponent(props) {
  const {
    pageLoading,
    headersTable,
    products,
    totalPages,
    setCurrentPage,
    currentPage,
  } = props;

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Список заказов" />
        <TableList items={products} headers={headersTable} />
        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </SectionLayout>
    </>
  );
}
