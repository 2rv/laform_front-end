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
    count,
    incrementCount,
    dicrementCoun,
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
            count={count}
            incrementCount={incrementCount}
            dicrementCoun={dicrementCoun}
            data={data}
            children={children}
          />
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
