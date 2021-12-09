import styled from 'styled-components';
import { spacing } from '../../../lib/theme';
import { Divider } from '../../../lib/element/divider';
import {
  ProducName,
  ProductDescription,
  ProductCategories,
} from 'src/core/block-product-components';
import { ProductSelect } from 'src/lib/common/block-select-options';

export function ProductMainComponent(props) {
  const {
    id,
    type,
    name,
    modifier,
    price,
    discount,
    count,
    length,
    vendorCode,
    categories,
    description,
    options,
    sizes,
    colors,
    like,
  } = props;

  return (
    <Container>
      <ProducName name={name} modifier={modifier} discount={discount} />
      <ProductCategories categories={categories} />
      <Divider />
      <ProductDescription description={description} />
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
        options={options}
        colors={colors}
        length={length}
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
