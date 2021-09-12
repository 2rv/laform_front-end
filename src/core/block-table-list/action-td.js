import styled from 'styled-components';
import { spacing } from '../../lib/theme';

export function ActionTd(props) {
  const { id, children } = props;
  if (!children) return null;
  return (
    <Td>
      <ActionBlock>{children(id)}</ActionBlock>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-left: ${spacing(8)};
  @media screen and (max-width: 875px) {
    padding-left: 0;
    margin-left: 90px;
  }
`;
const ActionBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing(3)};
  @media screen and (max-width: 875px) {
    justify-content: flex-start;
  }
`;
