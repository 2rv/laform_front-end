import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { Divider } from '../../lib/element/divider';

export function DividerTd(props) {
  const {} = props;
  return (
    <Td colSpan="6">
      <DividerTable />
    </Td>
  );
}
const Td = styled.td`
  vertical-align: middle;
`;
const DividerTable = styled(Divider)`
  margin: ${spacing(2)} 0;
`;
