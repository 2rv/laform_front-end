import { OrderNumberTableItemComponent } from './order-number-table-item.component';

import { ORDER_NUMBER_TABLE_COLUMNS } from '../../order-number.constant';

import { TextSecondary } from 'src/lib/element/text';
import { Table, TableRow, TableHeader } from 'src/lib/element/table';

export function OrderNumberTableComponent({ orderNumberList, orderNumberDetails }) {
  return (
    <Table>
      <thead>
        <TableRow columns={ORDER_NUMBER_TABLE_COLUMNS}>
          <TableHeader>
            <TextSecondary tid="ORDER_NUMBER.TABLE.HEADER.ORDER_ITEMS" />
          </TableHeader>
          <TableHeader>
            <TextSecondary tid="ORDER_NUMBER.TABLE.HEADER.PARAMETERS" />
          </TableHeader>
          <TableHeader>
            <TextSecondary tid="ORDER_NUMBER.TABLE.HEADER.TOTAL_PRICE" />
          </TableHeader>
        </TableRow>
      </thead>

      <tbody>
        {orderNumberList.map((orderNumber) => (
          <OrderNumberTableItemComponent key={orderNumber.id} {...orderNumber} orderNumberDetails={orderNumberDetails} />
        ))}
      </tbody>
    </Table>
  );
}
