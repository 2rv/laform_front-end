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
    onClick = () => {},
    cursorPointer = false,
  } = props;
  return (
    <Table>
      {headers && (
        <thead>
          <Tr>
            {headers.map((item, index) => (
              <HeaderTd text={item} key={index} />
            ))}
          </Tr>
          <Tr><DividerTd /></Tr>
        </thead>
      )}
      {Boolean(items.length > 0) && (
        <tbody>
          {items.map((data, i) => (
            <React.Fragment key={i}>
              <TableItem
                type={type}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
                data={data}
                count={count}
                onClick={onClick}
                cursorPointer={cursorPointer}
              >
                {children}
              </TableItem>
              <Tr><DividerTd /></Tr>
            </React.Fragment>
          ))}
        </tbody>
      )}
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
