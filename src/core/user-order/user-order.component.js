import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { AboutOrderFormContainer } from './frames';
import { Spinner } from 'src/lib/element/spinner';
import { Table } from 'src/lib/common/block-table';

export function UserOrderComponent(props) {
  const {
    headersTable,
    onSubmit,
    initialValue,
    validate,
    isPending,
    userOrderTitle,
    purchaseProducts,
    statusOrderSelect,
    deliveryTypeOptions,
  } = props;

  return isPending ? (
    <Spinner />
  ) : (
    <SectionLayout>
      <div>
        <TitlePrimary tid="ORDER_NUMBER.TABLE.MY_PURCHASE" />
        &nbsp;
        <BoldTitle tid={userOrderTitle} />
      </div>
      <Table items={purchaseProducts} headers={headersTable} />
      <AboutOrderFormContainer
        onSubmit={onSubmit}
        initialValue={initialValue}
        validate={validate}
        statusOrderSelect={statusOrderSelect}
        deliveryTypeOptions={deliveryTypeOptions}
      />
    </SectionLayout>
  );
}

const BoldTitle = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;