import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { AboutOrderFormContainer } from './frames';
import { Spinner } from 'src/lib/element/spinner';
import { Table } from 'src/lib/common/block-table';
import { ABOUT_ORDER_FIELD_NAME } from './order-number.type';

export function OrderNumberComponent(props) {
  const {
    onSubmit,
    initialValue,
    validate,
    isPending,
    deliveryTypeOptions,
    isOrderNumberChangePending,
    isOrderNumberChangeSuccess,

    headersTable,
    purchaseProducts,
    changeItem,
    deleteItem,
  } = props;

  return isPending ? (
    <Spinner />
  ) : (
    <SectionLayout>
      <div>
        <TitlePrimary tid="ORDER_NUMBER.TABLE.TITLE" />
        &nbsp;
        <BoldTitle tid={initialValue[ABOUT_ORDER_FIELD_NAME.ORDER_NUMBER]} />
      </div>
      <Table
        changeItem={changeItem}
        deleteItem={deleteItem}
        items={purchaseProducts}
        headers={headersTable}
      />
      <AboutOrderFormContainer
        onSubmit={onSubmit}
        initialValue={initialValue}
        validate={validate}
        deliveryTypeOptions={deliveryTypeOptions}
        isOrderNumberChangePending={isOrderNumberChangePending}
        isOrderNumberChangeSuccess={isOrderNumberChangeSuccess}
      />
    </SectionLayout>
  );
}

const BoldTitle = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
