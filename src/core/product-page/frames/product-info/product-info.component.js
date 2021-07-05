import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { ProductDescriptionComponent } from '../product-description';
import { ProductSelectContainer } from '../product-select';
import { ProductPriceComponent } from '../product-price';
import { ProductActionsComponent } from '../product-actions';
import { ProductPurchasedOptionComponent } from '../product-purchased-option';
import { ProductPurchasedPriceComponent } from '../product-purchased-price';
import { ProductPurchasedActionsComponent } from '../product-purchased-actions';
import { ProductDeliveredOptionComponent } from '../product-delivered-option';
export function ProductInfoComponent(props) {
  const {
    name,
    bestSeller,
    price,
    discount,
    liked,
    inBacket,
    short,
    full,
    optionItem,
    actions,
    some,
    purchased,
    dilivery,
    delivered,
    deliveredItem,
  } = props;
  return (
    <Container>
      <TitleContainer>
        <ProductTitle tid={name} />
        {bestSeller && <Modifier alt tid={'Хит!'} />}
        {discount && <Modifier tid={'Скидка!'} />}
      </TitleContainer>
      <TextSecondary tid={short} />
      <Divider />
      <DecriptionContainer>
        <ProductDescriptionComponent text={full} />
      </DecriptionContainer>
      <Divider />
      {purchased ? (
        <ProductPurchasedOptionComponent optionItem={optionItem} />
      ) : (
        <ProductSelectContainer optionItem={optionItem} />
      )}
      <Divider />
      <Footer>
        {purchased ? (
          <ProductPurchasedPriceComponent
            price={price}
            discount={discount}
            dilivery={dilivery}
          />
        ) : (
          <ProductPriceComponent
            priceWord={'Цена'}
            symbol={':'}
            price={price}
            valute={'руб'}
            discount={discount}
          />
        )}
        {!purchased && (
          <ProductActionsComponent
            inBacket={inBacket}
            actions={actions}
            liked={liked}
            some={some}
          />
        )}
      </Footer>
      {purchased && !delivered && <ProductPurchasedActionsComponent />}
      {delivered && (
        <ProductDeliveredOptionComponent deliveredItem={deliveredItem} />
      )}
    </Container>
  );
}
const DecriptionContainer = styled.div`
  height: 144px;
`;
const ProductTitle = styled(TitlePrimary)`
  font-size: 28px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(3)};
`;
const Modifier = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  color: ${({ alt }) => (alt ? THEME_COLOR.PRIMARY_DARK : THEME_COLOR.PRIMARY)};
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;
const Container = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
`;
