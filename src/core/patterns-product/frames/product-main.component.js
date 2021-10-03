import styled from 'styled-components';
import { useState } from 'react';
import { spacing } from '../../../lib/theme';
import { Divider } from '../../../lib/element/divider';
import {
  ProducName,
  ProductActions,
  ProductSelect,
  ProductPrice,
  ProductVendorCode,
  ProductDescription,
  ProductCategories,
} from '../../block-product-components';
import { ComplexityDots } from 'src/lib/element/card';

export function ProductMainComponent(props) {
  const {
    id,
    type,
    modifier,
    discount,
    name,
    description,
    categories,
    images,
    sizes,
    materials,
    complexity,
    cart,
    filePdf,
    like,
    addToCart,
  } = props;

  const [size, setSize] = useState({ id: undefined, price: null });
  const handleAddToCart = (values) => addToCart({ id, type, size: size.id });

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
      <ProductDescription text={description} />
      {Boolean(sizes?.length > 1) && <Divider />}
      <ProductSelect
        name="PRODUCT_PRICE.SIZE"
        selectOptions={sizes}
        handleChange={setSize}
        isTooltip
      />
      <Divider />
      <FooterCase>
        <ProductPrice price={size?.price} discount={discount} />
        <ProductActions
          id={id}
          type={type}
          like={like}
          size={size}
          onCart={handleAddToCart}
        />
      </FooterCase>
      <ProductVendorCode vendorCode={size.vendorCode} />
    </Container>
  );
}

const FooterCase = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;
const Container = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;
