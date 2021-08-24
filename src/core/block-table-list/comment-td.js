import styled from 'styled-components';
import { TextBlock } from '../block-text';

export function CommentTd(props) {
  const { text } = props;
  return (
    <Td>
      <TextBlock text={text} />
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
`;
