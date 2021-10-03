import styled from 'styled-components';
import { useState } from 'react';
import { spacing } from '../../../lib/theme';
import { Divider } from '../../../lib/element/divider';
import {
  ProductActions,
  ProductCategories,
  ProductDescription,
  ProductPrice,
  ProductVendorCode,
  ProductSelect,
  ProducName,
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

  const [program, setProgram] = useState({ id: undefined, price: null });
  const handleAddToCart = () => addToCart({ id, type, program: program.id });

  return (
    <Container>
      <ProducName name={name} modifier={modifier} discount={discount} />
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
          like={like}
          program={program}
          onCart={handleAddToCart}
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
const Container = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;
