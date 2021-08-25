import React from 'react';
import { TableItem } from './table-item';
import { DividerTd } from './divider-td';
import { HeaderTd } from './header-td';
import styled from 'styled-components';

export function TableList(props) {
  const {
    headers,
    items = [],
    children,
    incrementCount,
    decrementCount,
    count,
    type,
  } = props;
  return (
    <Table>
      {headers && (
        <Tr>
          {headers.map((item, index) => (
            <HeaderTd text={item} key={index} />
          ))}
        </Tr>
      )}
      <Tr>{headers && <DividerTd />}</Tr>
      {items.map((data, i) => (
        <React.Fragment key={i}>
          <TableItem
            type={type}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            data={data}
            count={count}
          >
            {children}
          </TableItem>
          <DividerTd />
        </React.Fragment>
      ))}
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
