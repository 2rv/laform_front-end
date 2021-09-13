import styled from 'styled-components';
import { TextSecondary, TextCurrency } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';

export function ProductPrice(props) {
  const { price, discount } = props;

  const priceWithDiscount = ((price / 100) * discount).toFixed(2);
  const totalPrice = (price - priceWithDiscount).toFixed(2);

  return (
    <Container>
      <Column>
        <TextSecondary tid="Цена" />
        <div>
          <Bold price={price} />
          &nbsp;
          <Light tid="руб." />
        </div>
      </Column>
      <TextSecondary tid="-" />
      <Column>
        <TextSecondary tid="Скидка" />
        <div>
          <Bold price={priceWithDiscount} />
          &nbsp;
          <Light tid="руб." />
          &nbsp;
          <Colored tid={`${discount}%`} />
        </div>
      </Column>
      <TextSecondary tid="=" />
      <Column>
        <TextSecondary tid="Цена со скидкой" />
        <div>
          <Bold price={totalPrice} />
          &nbsp;
          <Light tid="руб." />
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
