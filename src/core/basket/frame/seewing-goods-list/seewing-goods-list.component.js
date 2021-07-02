import styled from 'styled-components';

import { SeewingGoodsListItemComponent } from './seewing-goods-list-item.component';

import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function SeewingGoodsListComponent({ seewingGoodsList }) {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableTH>
            <TextSecondary tid="Товары для шитья" />
          </TableTH>
          <TableTH>
            <TextSecondary tid="Параметры" />
          </TableTH>
          <TableTH>
            <TextSecondary tid="Количество" />
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
        {seewingGoodsList.map((seewingGoods) => (
          <SeewingGoodsListItemComponent key={seewingGoods.id} {...seewingGoods} />
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
