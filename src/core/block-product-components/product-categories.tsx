import styled from 'styled-components';
import { TextSecondary } from 'src/lib/element/text';
import { BasicCategoryType } from 'src/lib/basic-types';

export function ProductCategories(props: { categories: BasicCategoryType[] }) {
  const { categories } = props;

  if (!categories || categories.length === 0) return null;

  return (
    <Text
      tid={categories.map((category) => category.categoryNameRu).join(', ')}
    />
  );
}

const Text = styled(TextSecondary)`
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
