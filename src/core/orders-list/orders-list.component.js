import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { TableList } from '../block-table-list';
import { Pagination } from './frame/pagination';
import { Spinner } from 'src/lib/element/spinner';
import { TextSecondary } from 'src/lib/element/text';
import { redirect } from 'src/main/navigation';

export function OrdersListComponent(props) {
  const {
    pageLoading,
    isPending,
    headersTable,
    products,
    totalPages,
    setCurrentPage,
    currentPage,
  } = props;

  const redirectToPurchasePage = (productName, productId) => {
    redirect(`${productName}/${productId}`);
  };

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Список заказов" />
        {isPending ? (
          <Spinner />
        ) : (
          Boolean(products.length > 0) ? (
            <>
              <TableList items={products} headers={headersTable} onClick={redirectToPurchasePage} cursorPointer={true} />
              <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
          ) : (
            <TextSecondary tid="Нет купленных продуктов" />
          )
        )}
      </SectionLayout>
    </>
  );
}
