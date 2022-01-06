import styled from 'styled-components';
import { TextPrimary } from 'src/lib/element/text';
import { TableHeaderProps } from '../table.type';

export function TableHeader(props: TableHeaderProps) {
  const { children } = props;
  return (
    <Td>
      <Case>
        <TextPrimary tid={children} />
      </Case>
    </Td>
  );
}
const Td = styled.td`
  vertical-align: middle;
  padding-right: 30px;
`;
const Case = styled.div`
  display: flex;
  min-width: fit-content;
`;
