import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { AboutOrderFormContainer } from './frames';
import { TableList } from '../block-table-list';

export function OrderNumberComponent(props) {
  const {
    infoData,
    headersTable,
    itemsTable,
    paymentOptions,
    dileveryOptions,
    statusOptions,
    onSubmit,
    initialValue,
    validate,
  } = props;

  const { orderId, discountPrice, discount, diliveryPrice, price } = infoData;

  return (
    <SectionLayout>
      <div>
        <TitlePrimary tid="ORDER_NUMBER.TABLE.TITLE" />
        &nbsp;
        <BoldTitle tid={orderId} />
      </div>
      <TableList items={itemsTable} headers={headersTable} />
      <AboutOrderFormContainer
        discountPrice={discountPrice}
        discount={discount}
        diliveryPrice={diliveryPrice}
        price={price}
        paymentOptions={paymentOptions}
        dileveryOptions={dileveryOptions}
        statusOptions={statusOptions}
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
