import styled from 'styled-components';
import { ProductDescription } from '../block-product-components';

export function CommentTd(props) {
  const { comment = null } = props;
  if (!comment) return null;
  return (
    <Td>
      <ProductDescription text={comment} />
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
`;
