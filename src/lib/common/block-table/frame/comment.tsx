import styled from 'styled-components';
import { ProductDescription } from 'src/core/block-product-components';
import { TableCommentProps } from '../table.type';

export function TableComment(props: TableCommentProps) {
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
