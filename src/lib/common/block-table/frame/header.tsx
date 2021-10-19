import styled from 'styled-components';
import { TextPrimary } from 'src/lib/element/text';

interface props {
  text: string;
}

export function TableHeader(props: props) {
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
  padding-right: 30px;
`;
const Case = styled.div`
  display: flex;
  min-width: fit-content;
`;
