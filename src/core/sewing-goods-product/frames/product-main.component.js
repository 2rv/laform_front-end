import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../lib/theme';
import { TextSecondary, TextPrimary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
import { ButtonBasic } from 'src/lib/element/button';
import {
  ProductActions,
  ProductSelect,
  ProductCategories,
  ProductDescription,
  ProductPrice,
  ProductVendorCode,
  ProducName,
  ProducCounter,
} from 'src/core/block-product-components';

export function ProductMainComponent(props) {
  const {
    id,
    type,
    modifier,
    discount,
    name,
    categories,
    description,
    images,
    cart,
    sizes,
    colors,
    like,
    addToCart,
  } = props;

  const [size, setSize] = useState({ id: undefined, price: null });
  const [color, setColor] = useState({ id: undefined, price: null });
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const dicrement = () => setCount(count - 1);

  const handleAddToCart = () =>
    addToCart({
      id: id,
      type: type,
      count: count,
      size: size.id,
      color: color.id,
    });

  return (
    <Container>
      <ProducName name={name} modifier={modifier} discount={discount} />
      <ProductCategories categories={categories} />
      <Divider />
      <ProductDescription text={description} />
      {(sizes?.length > 1 || colors?.length > 1) && <Divider />}
      <ProductSelect
        name="PRODUCT_PRICE.SIZE"
        selectOptions={sizes}
        handleChange={setSize}
        isTooltip
      />
      <ProductSelect
        name="PRODUCT_PRICE.COLOR"
        selectOptions={colors}
        handleChange={setColor}
      />
      <Divider />
      <FooterCase>
        <Case>
          <ProductPrice price={size?.price} discount={discount} count={count} />
          <ProducCounter
            count={count}
            increment={increment}
            dicrement={dicrement}
          />
        </Case>
        <ProductActions
          id={id}
          type={type}
          like={like}
          size={size}
          color={color}
          onCart={handleAddToCart}
        />
      </FooterCase>
      <ProductVendorCode vendorCode={size.vendorCode} />
    </Container>
  );
}

const Case = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${spacing(3)};
`;
const FooterCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;
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
