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

  const [size, setSize] = useState(
    sizes?.length > 0
      ? sizes[0]
      : { id: 0, tid: 0, price: 0, count: 0, vendorCode: 0 },
  );
  const [color, setColor] = useState(
    colors?.length > 0 ? colors[0] : { id: 0, tid: 0 },
  );
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const dicrement = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  const handleAddToCart = (values) =>
    addToCart({
      id,
      type,
      count: count,
      size: size.id,
      color: color.id,
    });

  return (
    <Container>
      <HeaderCase>
        <Title tid={name} />
        {Boolean(modifier) && <Modifier alt tid={modifier} />}
        {discount !== 0 && <Modifier tid="PRODUCT_PRICE.STOCK" />}
      </HeaderCase>
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
          <ActionCase>
            <Button tid="-" onClick={dicrement} />
            <Count tid={count} />
            <Button tid="+" onClick={increment} />
          </ActionCase>
        </Case>
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
const Count = styled(TextSecondary)`
  width: max-content;
  padding: ${spacing(2)};
`;
const Case = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${spacing(3)};
`;
const ActionCase = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
`;
const Button = styled(ButtonBasic)`
  color: ${THEME_COLOR.TEXT.LIGHT};
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
