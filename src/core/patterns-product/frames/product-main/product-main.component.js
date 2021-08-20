import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { BlockSelect } from '../../../block-select';
import { TitlePrimary } from '../../../../lib/element/title';
import { Divider } from '../../../../lib/element/divider';
import { TextBlock } from '../../../block-text';
import { CardActions } from '../../../../lib/element/card/card-actions';
import { ProductPriceComponent } from './product-price.component';

export function ProductMainComponent(props) {
  const {
    title,
    shortDescription,
    fullDescription,
    bestSeller,
    price,
    discount,
    like,
    select,
    selectOptions,
    initialValueForSelectOptions,
    setValueSelectOption,
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
      <BlockSelect
        selectOptions={selectOptions}
        initialValue={initialValueForSelectOptions}
        getValues={setValueSelectOption}
      />
      <Divider />
      <FooterCase>
        <ProductPriceComponent price={price} discount={discount} />
        <CardActions width={190} type={2} like={like} select={select} />
      </FooterCase>
    </Container>
  );
}

const FooterCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${spacing(3)};
  }
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
