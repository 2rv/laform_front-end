import styled from 'styled-components';
import { TextPrimary } from '../../lib/element/text';

export function HeaderTd(props) {
  const { text } = props;
  return (
    <Td>
      <Case>
        <TextPrimary tid={text} />
      </Case>
    </Td>
  );
}
const Td = styled.td`
  vertical-align: middle;
`;
const Case = styled.div`
  display: flex;
  min-width: fit-content;
`;
