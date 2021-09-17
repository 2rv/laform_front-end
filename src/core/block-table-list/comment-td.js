import styled from 'styled-components';
import { TextBlock } from '../block-text';

export function CommentTd(props) {
  const { comment = null } = props;
  if (!comment) return null;
  return (
    <Td>
      <TextBlock text={comment} />
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
`;
