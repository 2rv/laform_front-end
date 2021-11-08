import styled from 'styled-components';
import { TextSecondary, TextCurrency } from '../../element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { CreatePriceProps } from './type';

export function CreatePriceBlock(props: CreatePriceProps) {
  const { price = 0, discount = 0 } = props.priceAndDiscount;
  const priceWithDiscount: number = Number(
    ((price / 100) * discount).toFixed(2),
  );
  const totalPrice: number = Number((price - priceWithDiscount).toFixed(2));

  return (
    <Container>
      <Column>
        <TextSecondary tid="PRODUCT_PRICE.PRICE" />
        <div>
          <Bold price={price} />
          &nbsp;
          <Light tid="PRODUCT_PRICE.CURRENCY" />
        </div>
      </Column>
      <TextSecondary tid="-" />
      <Column>
        <TextSecondary tid="PRODUCT_PRICE.DISCOUNT" />
        <div>
          <Bold price={priceWithDiscount} />
          &nbsp;
          <Light tid="PRODUCT_PRICE.CURRENCY" />
          &nbsp;
          <Colored tid={`${discount}%`} />
        </div>
      </Column>
      <TextSecondary tid="=" />
      <Column>
        <TextSecondary tid="PRODUCT_PRICE.DISCOUNT_PRICE" />
        <div>
          <Bold price={totalPrice} />
          &nbsp;
          <Light tid="PRODUCT_PRICE.CURRENCY" />
        </div>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(2)};
  margin-top: 18px;
  height: 46px;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(2)};
  justify-content: space-between;
`;
const Bold = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Light = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Colored = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;
