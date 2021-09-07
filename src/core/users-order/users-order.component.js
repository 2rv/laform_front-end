import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { BasicField } from '../../lib/element/field';
import { TableList } from '../block-table-list';
import { Pagination } from './frame/pagination';
import { Spinner } from 'src/lib/element/spinner';
import { TextSecondary } from 'src/lib/element/text';
import { redirect } from 'src/main/navigation';

export function UsersOrderComponent(props) {
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

  const redirectToProduct = (_, id) => {
    redirect(`order/${id}`);
  };

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Список заказов" />
        <BasicField placeholderTid="Искать по номеру" value={inputValue} onChange={onChange} />
        {isPending ? (
          <Spinner />
        ) : (
          Boolean(products?.length > 0) ? (
            <>
              <TableList items={products} headers={headersTable} onClick={redirectToProduct} cursorPointer={true} />
              <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
          ) : (
            <TextSecondary tid="Список пуст" />
          )
        )}
      </SectionLayout>
    </>
  );
}
