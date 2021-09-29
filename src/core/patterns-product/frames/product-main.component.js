import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../lib/theme';
import { TextSecondary, TextPrimary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
import {
  ProductActions,
  ProductSelect,
  ProductPrice,
  ProductVendorCode,
  ProductDescription,
  ProductCategories,
} from '../../block-product-components';

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
    price,
    complexity,
    cart,
    filePdf,
    like,
    addToCart,
  } = props;

  const [size, setSize] = useState(
    sizes?.length > 0 ? sizes[0] : { id: 0, tid: 0, price: 0, vendorCode: 0 },
  );

  const handleAddToCart = (values) => addToCart({ id, type, size: size.id });

  return (
    <Container>
      <HeaderCase>
        <Title tid={name} />
        {Boolean(modifier) && <Modifier alt tid={modifier} />}
        {discount !== 0 && <Modifier tid="PRODUCT_PRICE.STOCK" />}
      </HeaderCase>
      <ProductCategories categories={categories} />
      <Divider />
      <LineCase>
        <Text tid="PATTERNS.CREATE.FORM.COMPLEXITY" />
        <Complexity>
          {[1, 2, 3, 4, 5].map((rate, index) => (
            <ComplexityDot key={index} act={rate <= complexity ? 1 : 0} />
          ))}
        </Complexity>
      </LineCase>
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
        <ProductPrice price={price ? price : size?.price} discount={discount} />
        <ProductActions
          id={id}
          type={type}
          cart={cart}
          like={like}
          onSetCart={handleAddToCart}
        />
      </FooterCase>
      <ProductVendorCode vendorCode={size.vendorCode} />
    </Container>
  );
}

const Text = styled(TextSecondary)`
  min-width: max-content;
`;
const Complexity = styled.div`
  display: flex;
  gap: ${spacing(2)};
  width: 100%;
  align-items: center;
`;
const ComplexityDot = styled.div`
  width: 16px;
  min-width: 16px;
  height: 16px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${(p) =>
    p.act ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
`;
const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
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
const HeaderCase = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
const Modifier = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  ::first-letter {
    text-transform: uppercase;
  }
  color: ${({ alt }) => (alt ? THEME_COLOR.PRIMARY_DARK : THEME_COLOR.PRIMARY)};
`;
const Title = styled(TitlePrimary)`
  font-size: 1.5;
  ::first-letter {
    text-transform: uppercase;
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
