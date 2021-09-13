import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../../lib/theme';
import { TextCurrency, TextSecondary } from '../../../lib/element/text';
import { SectionLayout } from '../../../lib/element/layout';

export function AboutOrderPrice(props) {
  const {
    discountPrice = 0,
    discount = false,
    diliveryPrice = 0,
    price = 0,
  } = props;
  return (
    <Container>
      <SectionLayout type="TEXT">
        <Text tid="Цена со скидкой" />
        <div>
          <Price price={discountPrice} />
          &nbsp;
          <TextLight tid={'руб.'} />
          &nbsp;
          {discount && <TextColored tid={`-${discount}%`} />}
        </div>
      </SectionLayout>
      <SectionLayout type="TEXT">
        <Text tid="Цена за доставку" />
        <div>
          <Price price={diliveryPrice} />
          &nbsp;
          <TextLight tid={'руб.'} />
        </div>
      </SectionLayout>
      <VerticalDivider />
      <SectionLayout type="TEXT">
        <Text tid="Итоговая цена заказа" />
        <div>
          <TitlePrice price={price} />
          &nbsp;
          <TextLight tid={'руб.'} />
        </div>
      </SectionLayout>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(6)};
`;
const VerticalDivider = styled.div`
  display: grid;
  width: 3px;
  background-color: ${THEME_COLOR.GRAY};
`;
const Text = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Price = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const TitlePrice = styled(TextCurrency)`
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
const TextLight = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const TextColored = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
