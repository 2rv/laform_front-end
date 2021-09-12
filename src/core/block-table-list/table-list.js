import React from 'react';
import styled from 'styled-components';
import { TableItem } from './table-item';
import { DividerTd } from './divider-td';
import { HeaderTd } from './header-td';

export function TableList(props) {
  const {
    headers = [],
    items = [],
    children,
    countMethods,
    changeItem,
  } = props;
  return (
    <Table>
      {Boolean(headers.length > 0) && (
        <thead>
          <Tr>
            {headers.map((item, index) => (
              <HeaderTd text={item} key={index} />
            ))}
          </Tr>
          <DividerTd />
        </thead>
      )}
      {Boolean(items.length > 0) && (
        <tbody>
          {items.map((data, i) => (
            <React.Fragment key={data.id}>
              <TableItem
                changeItem={changeItem}
                countMethods={countMethods}
                data={data}
                children={children}
              />
              <DividerTd />
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
