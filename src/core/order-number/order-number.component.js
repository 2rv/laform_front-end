import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { AboutOrderFormContainer } from './frames';
import { TableList } from '../block-table-list';
import { Spinner } from 'src/lib/element/spinner';

export function OrderNumberComponent(props) {
  const {
    headersTable,
    onSubmit,
    initialValue,
    validate,
    isPending,
    orderNumberTitle,
    purchaseProducts,
    statusOrderSelect,
  } = props;

  return isPending ? (
    <Spinner />
  ) : (
    <SectionLayout>
      <div>
        <TitlePrimary tid="ORDER_NUMBER.TABLE.TITLE" />
        &nbsp;
        <BoldTitle tid={orderNumberTitle} />
      </div>
      <TableList items={purchaseProducts} headers={headersTable} />
      <AboutOrderFormContainer
        onSubmit={onSubmit}
        initialValue={initialValue}
        validate={validate}
        statusOrderSelect={statusOrderSelect}
      />
    </SectionLayout>
  );
}

const BoldTitle = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
