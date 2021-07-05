import styled from 'styled-components';

import { PatternsListItemComponent } from './patterns-list-item.component';

import { PATTERN_TABLE_COLUMNS } from '../../basket.constant';

import { TextSecondary } from 'src/lib/element/text';
import { Table, TableRow, TableHeader } from 'src/lib/element/table';

export function PatternsListComponent({ patternsList }) {
  return (
    <Table>
      <thead>
        <TableRow columns={PATTERN_TABLE_COLUMNS}>
          <TableHeader>
            <TextSecondary tid="BASKET.TABLE.HEADER.PATTERNS" />
          </TableHeader>
          <TableHeader>
            <TextSecondary tid="BASKET.TABLE.HEADER.PARAMETERS" />
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
        {patternsList.map((patterns) => (
          <PatternsListItemComponent key={patterns.id} {...patterns} />
        ))}
      </tbody>
    </Table>
  );
}
