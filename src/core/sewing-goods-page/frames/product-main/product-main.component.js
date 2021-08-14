import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { Divider } from '../../../../lib/element/divider';
import { TextBlock } from '../../../block-text';
import { ProductPriceComponent } from './product-price.component';
import { ProductOptionInfo } from './product-option-info.component';
import { ProductDiliveryInfo } from './product-dilivery-info.component';
export function ProductMainComponent(props) {
  const {
    title,
    shortDescription,
    fullDescription,
    bestSeller,
    price,
    discount,
    discountPrice,
    diliveryPrice,
    optionInfo,
    adress,
    paymentMethod,
    status,
  } = props;

  return (
    <Container>
      <TitleCase>
        <Title tid={title} />
        {bestSeller && <Modifier alt tid={'Хит!'} />}
        {discount && <Modifier tid={'Скидка!'} />}
      </TitleCase>
      <TextSecondary tid={shortDescription} />
      <Divider />
      <TextBlock text={fullDescription} />
      <Divider />
      <ProductOptionInfo optionInfo={optionInfo} />
      <Divider />
      <ProductPriceComponent
        discountPrice={discountPrice}
        diliveryPrice={diliveryPrice}
        price={price}
        discount={discount}
      />
      <Divider />
      <ProductDiliveryInfo
        adress={adress}
        paymentMethod={paymentMethod}
        status={status}
      />
    </Container>
  );
}

const TitleCase = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(3)};
`;
const Modifier = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  color: ${({ alt }) => (alt ? THEME_COLOR.PRIMARY_DARK : THEME_COLOR.PRIMARY)};
`;
const Title = styled(TitlePrimary)`
  font-size: 28px;
`;
const Container = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
`;
