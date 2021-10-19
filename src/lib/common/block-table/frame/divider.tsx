import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { Divider } from 'src/lib/element/divider';

export function TableDivider() {
  return (
    <Tr>
      <Td colSpan={6}>
        <DividerTable />
      </Td>
    </Tr>
  );
}
const Td = styled.td`
  vertical-align: middle;
`;
const DividerTable = styled(Divider)`
  margin: ${spacing(2)} 0;
`;

const Tr = styled.tr`
  @media screen and (max-width: 875px) {
    display: none;
  }
`;
