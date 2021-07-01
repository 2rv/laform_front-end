import styled from 'styled-components';

import { TableRowComponent } from './table-row.component';

import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function TableComponent({ purchasesList }) {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableTH>
            <TextSecondary tid="PURCHASE.SEЕWING_GOODS.DESIGNATION" />
          </TableTH>
          <TableTH>
            <TextSecondary tid="PURCHASE.SEЕWING_GOODS.DETAILS.TITLE" />
          </TableTH>
          <TableTH>
            <TextSecondary tid="PURCHASE.SEЕWING_GOODS.PRODUCT_PRICE" />
          </TableTH>
          <TableTH>
            <TextSecondary tid="PURCHASE.SEЕWING_GOODS.CONDITION.TITLE" />
          </TableTH>
        </TableRow>
      </thead>

      <tbody>
        {purchasesList.map((purchase) => (
          <TableRowComponent {...purchase} />
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  border-bottom: 3px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;

const TableTH = styled.th`
  padding-bottom: ${spacing(2)};

  span {
    font-size: ${THEME_SIZE.FONT.DEFAULT};
    color: ${THEME_COLOR.SECONDARY_DARK};
  }

  &:not(:last-child) {
    text-align: start;
  }

  &:last-child {
    text-align: end;
  }
`;
