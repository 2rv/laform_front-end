import styled from 'styled-components';
import React, { useState } from 'react';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../lib/theme';
import { TextSecondary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
import { CardActions } from '../../../lib/element/card/card-actions';
import { ProductPriceComponent } from './product-price.component';
import { BlockSelect } from '../../block-select';
import { TextBlock } from '../../block-text';
import { ButtonBasic } from 'src/lib/element/button';

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
    sizes,
    colors,
    count,
  } = props;

  const [size, setSize] = useState({ price: 0 });
  const [color, setColor] = useState({ price: 0 });
  const [currentCount, setCount] = useState(1);

  const increment = () => {
    if (currentCount >= count) return;
    setCount(currentCount + 1);
  };
  const diincrement = () => {
    if (currentCount <= 1) return;
    setCount(currentCount - 1);
  };

  return (
    <Container>
      <HeaderCase>
        <Title tid={name} />
        {Boolean(modifier) && <Modifier alt tid={modifier} />}
        {discount !== 0 && <Modifier tid="Акция" />}
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
      {(sizes || colors) && <Divider />}
      {Boolean(sizes.length > 0) && (
        <BlockSelect
          name="Размер"
          isTooltip
          selectName="selectSize"
          selectOptions={sizes}
          getValues={setSize}
        />
      )}
      {Boolean(colors.length > 0) && (
        <BlockSelect
          name="Цвет"
          selectName="selectColor"
          selectOptions={colors}
          getValues={setColor}
        />
      )}
      <Divider />
      <FooterCase>
        <Case>
          <ProductPriceComponent
            price={size?.price + color?.price}
            discount={discount}
            count={currentCount}
          />
          <ActionCase>
            <Button tid="+" onClick={increment} />
            <Count tid={currentCount} />
            <Button tid="-" onClick={diincrement} />
          </ActionCase>
        </Case>

        <CardActions />
      </FooterCase>
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
