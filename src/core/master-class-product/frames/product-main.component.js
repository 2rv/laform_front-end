import styled from 'styled-components';
import { useState } from 'react';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../lib/theme';
import { TextSecondary, TextPrimary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
import {
  ProductActions,
  ProductCategories,
  ProductDescription,
  ProductPrice,
  ProductVendorCode,
  ProductSelect,
} from 'src/core/block-product-components';

export function ProductMainComponent(props) {
  const {
    id,
    name,
    description,
    modifier,
    discount,
    type,
    comment,
    images,
    categories,
    programs,
    cart,
    like,
    addToCart,
  } = props;

  const [program, setProgram] = useState(
    programs?.length > 0
      ? programs[0]
      : { id: 0, tid: 0, price: 0, vendorCode: 0 },
  );

  const handleAddToCart = (values) =>
    addToCart({ id, type, program: program.id });

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
      {programs?.length > 1 && <Divider />}
      <ProductSelect
        name="Программа"
        selectOptions={programs}
        handleChange={setProgram}
      />
      <Divider />
      <FooterCase>
        <ProductPrice price={program?.price} discount={discount} />
        <ProductActions
          id={id}
          type={type}
          cart={cart}
          like={like}
          onSetCart={handleAddToCart}
        />
      </FooterCase>
      <ProductVendorCode vendorCode={program.vendorCode} />
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
