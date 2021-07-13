import styled from 'styled-components';

import { SeewingGoodsListItemComponent } from './seewing-goods-list-item.component';

import { SEEWING_GOODS_TABLE_COLUMNS } from '../../basket.constant';

import { TextSecondary } from 'src/lib/element/text';
import { Table, TableRow, TableHeader } from 'src/lib/element/table';

export function SeewingGoodsListComponent({ seewingGoodsList }) {
  return (
    <Table>
      <thead>
        <TableRow columns={SEEWING_GOODS_TABLE_COLUMNS}>
          <TableHeader>
            <TextSecondary tid="BASKET.TABLE.HEADER.SEEWING_GOODS" />
          </TableHeader>
          <TableHeader>
            <TextSecondary tid="BASKET.TABLE.HEADER.PARAMETERS" />
          </TableHeader>
          <TableHeader>
            <TextSecondary tid="BASKET.TABLE.HEADER.COUNT" />
          </TableHeader>
          <TableHeader>
            <TextSecondary tid="BASKET.TABLE.HEADER.TOTAL_PRICE" />
          </TableHeader>
          <TableHeader>
            {/* Edit Button */}
          </TableHeader>
          <TableHeader>
            {/* Remove Button */}
          </TableHeader>
        </TableRow>
      </thead>

      <tbody>
        {seewingGoodsList.map((seewingGoods) => (
          <SeewingGoodsListItemComponent key={seewingGoods.id} {...seewingGoods} />
        ))}
      </tbody>
    </Table>
  );
}
