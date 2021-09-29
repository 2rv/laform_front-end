import styled from 'styled-components';
import { TextSecondary } from '../../lib/element/text';

export function ProductCategories(props) {
  const { categories } = props;
  if (!categories || categories.length === 0) return null;
  return (
    <Text tid={categories.map((category) => category.textRu).join(', ')} />
  );
}
const Text = styled(TextSecondary)`
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
