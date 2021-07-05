import styled from 'styled-components';

import { TableItemComponent } from './table-item.component';

import { MY_PURCHASES_TABLE_COLUMNS } from '../../my-purchases.constant';

import { TextSecondary } from 'src/lib/element/text';
import { Table, TableRow, TableHeader } from 'src/lib/element/table';

export function TableComponent({ purchasesList }) {
  return (
    <Table>
      <thead>
        <TableRow columns={MY_PURCHASES_TABLE_COLUMNS}>
          <TableHeader>
            <TextSecondary tid="PURCHASE.SEЕWING_GOODS.DESIGNATION" />
          </TableHeader>
          <TableHeader>
            <TextSecondary tid="PURCHASE.SEЕWING_GOODS.DETAILS.TITLE" />
          </TableHeader>
          <TableHeader>
            <TextSecondary tid="PURCHASE.SEЕWING_GOODS.PRODUCT_PRICE" />
          </TableHeader>
          <TableHeader>
            <TextSecondary tid="PURCHASE.SEЕWING_GOODS.CONDITION.TITLE" />
          </TableHeader>
        </TableRow>
      </thead>

      <tbody>
        {purchasesList.map((purchase) => (
          <TableItemComponent key={purchase.id} {...purchase} />
        ))}
      </tbody>
    </Table>
  );
}
