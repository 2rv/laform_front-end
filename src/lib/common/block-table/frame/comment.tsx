import styled from 'styled-components';
import { ProductDescription } from 'src/core/block-product-components';

interface props {
  comment?: string;
}
export function TableComment(props: props) {
  const { comment = null } = props;
  if (!comment) return null;
  return (
    <Td>
      <ProductDescription description={comment} />
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
`;
