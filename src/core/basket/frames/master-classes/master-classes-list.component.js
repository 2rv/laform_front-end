import styled from 'styled-components';

import { MasterClassesListItemComponent } from './master-classes-list-item.component';

import { MASTER_CLASSES_TABLE_COLUMNS } from '../../basket.constant';

import { TextSecondary } from 'src/lib/element/text';
import { Table, TableRow, TableHeader } from 'src/lib/element/table';

export function MasterClassesListComponent({ masterClassesList }) {
  return (
    <Table>
      <thead>
        <TableRow columns={MASTER_CLASSES_TABLE_COLUMNS}>
          <TableHeader>
            <TextSecondary tid="BASKET.TABLE.HEADER.MASTER_CLASSES" />
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
        {masterClassesList.map((masterClass) => (
          <MasterClassesListItemComponent key={masterClass.id} {...masterClass} />
        ))}
      </tbody>
    </Table>
  );
}
