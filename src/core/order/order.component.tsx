import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';
import { SectionLayout } from 'src/lib/element/layout';
import { THEME_SIZE } from 'src/lib/theme';
import { Table } from 'src/lib/common/block-table';
import { OrderComponentProps } from './order.type';
import { OrderForm } from './order.form';
import { CenteredSpinner } from 'src/lib/element/spinner';

const headersTable = [
  'ORDER.TABLE_HEADER.ORDER_ITEMS',
  'ORDER.TABLE_HEADER.PARAMETERS',
  'ORDER.TABLE_HEADER.QUANTITY',
  'ORDER.TABLE_HEADER.TOTAL_PRICE',
];

export function OrderComponent(props: OrderComponentProps) {
  const { initialValues, onSubmit, state, changeItem, deleteItem } = props;

  return (
    <SectionLayout>
      <div>
        <TitlePrimary tid="ORDER_TITLE" />
        &nbsp;
        <BoldTitle tid={state.order?.orderNumber || ''} />
      </div>
      {state.getPending && <CenteredSpinner />}
      <Table
        changeItem={changeItem}
        deleteItem={deleteItem}
        items={state.products}
        headers={headersTable}
      />
      <OrderForm
        state={state}
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
    </SectionLayout>
  );
}

const BoldTitle = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
