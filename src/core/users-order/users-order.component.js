import { useState } from 'react';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { BasicField } from '../../lib/element/field';
import { TableList } from '../block-table-list';
import { Pagination } from './frame/pagination';

export function UsersOrderComponent(props) {
  const {
    pageLoading,
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
        <TitlePrimary tid="Список заказов" />
        <BasicField placeholderTid="Искать по номеру" value={inputValue} onChange={onChange} />
        <TableList items={products} headers={headersTable} />
        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </SectionLayout>
    </>
  );
}
