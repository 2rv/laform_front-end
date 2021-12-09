import styled from 'styled-components';
import { spacing } from '../../../lib/theme';
import { Divider } from '../../../lib/element/divider';
import {
  ProducName,
  ProductDescription,
  ProductCategories,
} from 'src/core/block-product-components';
import { ProductSelect } from 'src/lib/common/block-select-options';
import { ComplexityDots } from 'src/lib/element/card';

export function ProductMainComponent(props) {
  const {
    id,
    type,
    modifier,
    name,
    description,
    descriptionOld,
    complexity,
    vendorCode,
    price,
    discount,
    count,
    categories,
    sizes = [],
    like,
  } = props;

  return (
    <Container>
      <ProducName name={name} modifier={modifier} discount={discount} />
      <ProductCategories categories={categories} />
      <Divider />
      <ComplexityDots
        complexity={complexity}
        title="PATTERNS.CREATE.FORM.COMPLEXITY"
      />
      <Divider />
      <ProductDescription text={description} textOld={descriptionOld} />
      <Divider />
      <ProductSelect
        id={id}
        type={type}
        like={like}
        vendorCode={vendorCode}
        price={price}
        discount={discount}
        count={count}
        sizes={sizes}
      />
    </Container>
  );
}
const Container = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;
