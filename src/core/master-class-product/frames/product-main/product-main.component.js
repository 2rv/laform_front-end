import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { BlockSelect } from '../../../block-select';
import { TitlePrimary } from '../../../../lib/element/title';
import { Divider } from '../../../../lib/element/divider';
import { TextBlock } from '../../../block-text';
import { CardActions } from '../../../../lib/element/card/card-actions';
import { ProductPriceComponent } from './product-price.component';
import React, { useState } from 'react';

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
    categories = [],
    programs = false,
  } = props;

  const [program, setProgram] = useState();

  return (
    <Container>
      <HeaderCase>
        <Title tid={name} />
        {modifier && <Modifier alt tid={modifier} />}
        {discount !== 0 && <Modifier tid="Акция" />}
      </HeaderCase>
      <div>
        {categories.map((category, key) => (
          <React.Fragment key={key}>
            <LigthText tid={category + ','} />
            &nbsp;
          </React.Fragment>
        ))}
      </div>
      <Divider />
      <TextBlock text={description} />
      <Divider />
      {programs && (
        <BlockSelect
          name="Программа"
          selectName="selectedProgram"
          selectOptions={programs}
          getValues={setProgram}
        />
      )}
      <Divider />
      <FooterCase>
        <ProductPriceComponent price={program?.price} discount={discount} />
        <CardActions />
      </FooterCase>
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
  color: ${({ alt }) => (alt ? THEME_COLOR.PRIMARY_DARK : THEME_COLOR.PRIMARY)};
`;
const Title = styled(TitlePrimary)`
  font-size: 1.5;
`;
const LigthText = styled(TextSecondary)`
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
