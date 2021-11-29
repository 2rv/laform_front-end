import React from 'react';
import styled from 'styled-components';
import { TableItem } from './table-item';
import { TableHeader, TableDivider } from './frame';
import { TableItemType, TableProps } from './table.type';

export function TableList(props: TableProps) {
  const { headers = [], items, changeItem, deleteItem } = props;
  if (!Boolean(items) || Boolean(items.length <= 0)) return null;

  return (
    <Table>
      {Boolean(headers.length > 0) && (
        <thead>
          <Tr>
            {headers.map((item: any, index: number) => (
              <TableHeader text={item} key={index} />
            ))}
          </Tr>
          <TableDivider />
        </thead>
      )}
      <tbody>
        {items.map((data: TableItemType, i: number) => (
          <React.Fragment key={data.id + i}>
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
