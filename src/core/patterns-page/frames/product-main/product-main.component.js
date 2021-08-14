import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { Divider } from '../../../../lib/element/divider';
import { TextBlock } from '../../../block-text';
import { ProductPriceComponent } from './product-price.component';
import { ProductOptionInfo } from './product-option-info.component';
import { ProductAction } from './product-action.component';

export function ProductMainComponent(props) {
  const {
    title,
    shortDescription,
    fullDescription,
    price,
    discount,
    discountPrice,
    diliveryPrice,
    optionInfo,
  } = props;

  return (
    <Container>
      <Title tid={title} />
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
      <ProductAction />
    </Container>
  );
}

const Title = styled(TitlePrimary)`
  font-size: 28px;
`;
const Container = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
`;
