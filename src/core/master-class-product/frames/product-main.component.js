import styled from 'styled-components';
import React, { useState } from 'react';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../lib/theme';
import { TextSecondary, TextPrimary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
import { CardActions } from '../../../lib/element/card/card-actions';
import { ProductPriceComponent } from './product-price.component';
import { BlockSelect } from '../../block-select';
import { TextBlock } from '../../block-text';

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
    addToCart,
    cart,
  } = props;
  const [program, setProgram] = useState(
    programs?.length > 0
      ? programs[0]
      : { id: 0, tid: 0, price: 0, vendorCode: 0 },
  );

  const handleAddToCart = (_, __, inCart) => {
    addToCart(inCart, {
      id,
      type,
      program: program.id,
    });
  };

  return (
    <Container>
      <HeaderCase>
        <Title tid={name} />
        {Boolean(modifier) && <Modifier alt tid={modifier} />}
        {discount !== 0 && <Modifier tid="PRODUCT_PRICE.STOCK" />}
      </HeaderCase>
      <div>
        {categories.map((category, key) => (
          <React.Fragment key={key}>
            <LigthText
              tid={categories.length > 1 ? category + ',' : category}
            />
            &nbsp;
          </React.Fragment>
        ))}
      </div>
      <Divider />
      <TextBlock text={description} />
      {programs && (
        <>
          <Divider />
          <BlockSelect
            name="Программа"
            selectOptions={programs}
            handleChange={setProgram}
          />
        </>
      )}
      <Divider />
      <FooterCase>
        <ProductPriceComponent price={program?.price} discount={discount} />
        <CardActions cart={cart} onSetCart={handleAddToCart} />
      </FooterCase>
      <LineCase>
        <TextPrimary tid="Артикул - " />
        <LigthText>{program.vendorCode}</LigthText>
      </LineCase>
    </Container>
  );
}
const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
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
const LigthText = styled(TextSecondary)`
  ::first-letter {
    text-transform: uppercase;
  }
  @media screen and (max-width: 720px) {
    order: -1;
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
