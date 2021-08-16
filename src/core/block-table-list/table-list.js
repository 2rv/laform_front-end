import styled from 'styled-components';
import { TextPrimary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { Divider } from '../../lib/element/divider';
import { TableItem } from './table-item';
import React from 'react';

export function TableList(props) {
  const { headers, items, children } = props;
  //headers [name, name, name, name]
  // items { name, price, image, params, otherParams, status }
  // children передаёт любые блоки элементы кнопки в конец таблицы
  // элементы сами задают ширину колонки
  return (
    <table>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col />
      {headers && (
        <>
          <tr>
            {headers.map((item, index) => {
              if (index === 0 || index === headers.lenght - 1) {
                return (
                  <Td>
                    <TextPrimary tid={item} />
                  </Td>
                );
              } else {
                return (
                  <Td>
                    <GapTextPrimary>
                      <TextPrimary tid={item} />
                    </GapTextPrimary>
                  </Td>
                );
              }
            })}
          </tr>
          <Td colSpan="6">
            <DividerTable />
          </Td>
        </>
      )}

      {items.map((data, i) => (
        <React.Fragment key={i}>
          <TableItem data={data}>{children}</TableItem>
          <Td colSpan="6">
            <DividerTable />
          </Td>
        </React.Fragment>
      ))}
    </table>
  );
}

const DividerTable = styled(Divider)`
  margin: ${spacing(2)} 0;
`;
const Td = styled.td`
  vertical-align: middle;
`;
const GapTextPrimary = styled(TextPrimary)`
  margin: 0 30px;
`;
