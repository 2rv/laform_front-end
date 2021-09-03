import styled from 'styled-components';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
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
          <Bold tid={price} />
          &nbsp;
          <Light tid="руб." />
        </div>
      </Column>
      <TextSecondary tid="-" />
      <Column>
        <TextSecondary tid="Скидка" />
        <div>
          <Bold tid={priceWithDiscount} />
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
          <Bold tid={totalPrice} />
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
const Bold = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Light = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Colored = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;
