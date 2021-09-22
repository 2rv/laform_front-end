import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { BasicField } from '../../lib/element/field';
import { Spinner } from '../../lib/element/spinner';
import { TextSecondary } from '../../lib/element/text';
import { TableList } from '../block-table-list';

import { Pagination } from './frame/pagination'; // пагинация может производится не по кнопке а по скроллу я это уточню у ильи

export function OrdersComponent(props) {
  const {
    pageLoading,
    isPending,
    headersTable,
    products,
    totalPages,
    setCurrentPage,
    currentPage,
    onChange,
    inputValue,
  } = props;

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="ORDERS.TITLE" />
        <BasicField
          placeholderTid="ORDERS.SEARCH_BY_NUMBER"
          value={inputValue}
          onChange={onChange}
        />
        {isPending ? (
          <Spinner />
        ) : Boolean(products?.length > 0) ? (
          <>
            <TableList items={products} headers={headersTable} />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <TextSecondary tid="ORDERS.LIST_IS_EMPTY" />
        )}
      </SectionLayout>
    </>
  );
}
