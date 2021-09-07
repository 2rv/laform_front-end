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
    orderNumberDetails,
    isPending,
  } = props;

  return isPending ? <Spinner /> : (
    <SectionLayout>
      <div>
        <TitlePrimary tid="ORDER_NUMBER.TABLE.TITLE" />
        &nbsp;
        <BoldTitle tid={orderNumberDetails?.orderNumber ?? '777444'} />
      </div>
      <TableList items={orderNumberDetails?.purchaseProducts} headers={headersTable} />
      <AboutOrderFormContainer
        orderNumberDetails={orderNumberDetails}
        onSubmit={onSubmit}
        initialValue={initialValue}
        validate={validate}
      />
    </SectionLayout>
  );
}

const BoldTitle = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
