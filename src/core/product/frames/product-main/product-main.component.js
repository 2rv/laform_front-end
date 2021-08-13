import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { ProductSelectContainer } from '../product-select';
import {
  TEST_PRODUCT_OPTIONS_KEY,
  TEST_PRODUCT_TITLE_BY_KEY,
} from '../../product.constant';
import { TitlePrimary } from '../../../../lib/element/title';
import { Divider } from '../../../../lib/element/divider';
import { TextBlock } from '../../../block-text';
import { CardActions } from '../../../../lib/element/card/card-actions';
import { ProductPriceComponent } from './product-price.component';

export function ProductMainComponent(props) {
  const {
    title,
    shrotDescription,
    fullDescription,
    bestSeller,
    price,
    discount,
    options,
    initialValue,
  } = props;

  return (
    <Container>
      <TitleCase>
        <Title tid={title} />
        {bestSeller && <Modifier alt tid={'Хит!'} />}
        {discount && <Modifier tid={'Скидка!'} />}
      </TitleCase>
      <TextSecondary tid={shrotDescription} />
      <Divider />
      <TextBlock text={fullDescription} />
      <Divider />
      <ProductSelectContainer
        initialValue={initialValue}
        options={options}
        optionsKeys={Object.values(TEST_PRODUCT_OPTIONS_KEY)}
        optionsTitles={TEST_PRODUCT_TITLE_BY_KEY}
      />
      <Divider />
      <FooterCase>
        <ProductPriceComponent price={price} discount={discount} />
        <CardActions width={190} type={2} like={false} select={false} />
      </FooterCase>
    </Container>
  );
}

const FooterCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
