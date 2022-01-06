import React from 'react';
import styled from 'styled-components';
import { TableItem } from './table-item';
import { TableHeader, TableDivider } from './frame';
import { TableListProps } from './table.type';

export function TableList(props: TableListProps) {
  const { headers = [], items, changeItem, deleteItem } = props;
  if (!Boolean(items) || !Boolean(items.length)) return null;

  return (
    <Table>
      {Boolean(headers.length > 0) && (
        <thead>
          <Tr>
            {headers.map((text, key) => (
              <TableHeader children={text} key={key} />
            ))}
          </Tr>
          <TableDivider />
        </thead>
      )}
      <tbody>
        {items.map((data, key) => (
          <React.Fragment key={data.id + key}>
            <TableItem
              data={data}
              changeItem={changeItem}
              deleteItem={deleteItem}
            />
            <TableDivider />
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
}
const Table = styled.table`
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
  }
`;
const Tr = styled.tr`
  @media screen and (max-width: 875px) {
    display: none;
  }
`;
