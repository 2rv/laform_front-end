import styled from 'styled-components';

import { MasterClassesListItemComponent } from './master-classes-list-item.component';

import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function MasterClassesListComponent({ masterClassesList }) {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableTH>
            <TextSecondary tid="Мастер-классы" />
          </TableTH>
          <TableTH>
            <TextSecondary tid="Параметры" />
          </TableTH>
          <TableTH>
            <TextSecondary tid="Итоговая цена" />
          </TableTH>
          <TableTH>
            <></>
          </TableTH>
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

const Table = styled.table`
  width: 100%;
  margin: ${spacing(6)} 0;
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
