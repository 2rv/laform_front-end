import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary as Text } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';

export function ProductPurchasedPriceComponent(props) {
  const { price = 0, discount = null, dilivery = 0 } = props;
  const valueDiscount = Math.round(price * (discount / 100));
  const priceWithDiscount = Math.round(price + valueDiscount);
  const totalPrice = Math.round(valueDiscount + dilivery + price);
  return (
    <Container>
      <Content>
        <Column>
          <TextSecondary tid="Цена со скидкой" />
          <Pair>
            <TextPrimary tid={priceWithDiscount} />
            <Valute tid="руб." />
            {discount && <Discount tid={`-${discount}%`} />}
          </Pair>
        </Column>
        <Column>
          <TextSecondary tid="Цена за доставку" />
          <Pair>
            <TextPrimary tid={dilivery} />
            <Valute tid="руб." />
          </Pair>
        </Column>
        <VerticalDivider />
        <Column>
          <TextSecondary tid="Итоговая цена заказа" />
          <Pair>
            <TotalPrice tid={totalPrice} />
            <Valute tid="руб." />
          </Pair>
        </Column>
      </Content>
      <Divider />
    </Container>
  );
}
const TotalPrice = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
`;
const Pair = styled.div`
  margin-top: auto;
  display: flex;
  gap: ${spacing(1)};
  align-items: baseline;
`;
const VerticalDivider = styled.div`
  border-left: 3px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;
const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;
const Column = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
const TextPrimary = styled(Text)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const TextSecondary = styled(Text)`
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
`;
const Valute = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Discount = styled(Text)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px 3px 1fr;
  gap: ${spacing(3)};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;
