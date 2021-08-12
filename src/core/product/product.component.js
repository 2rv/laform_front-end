import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { ButtonBasic, ButtonPrimary } from '../../lib/element/button';
import { BasicCardList } from '../../lib/element/card-list';
import { ReactComponent as LikeIcon } from 'src/asset/svg/favorite-icon.svg';
import {
  ProductImageComponent,
  ProductPriceComponent,
  ProductSelectContainer,
  ProductDescriptionComponent,
  ProductCommentComponent,
} from './frames';
import {
  TEST_PRODUCT_OPTIONS_KEY,
  TEST_PRODUCT_TITLE_BY_KEY,
} from './product.constant';
import { TitlePrimary } from '../../lib/element/title';

export function ProductComponent(props) {
  const {
    name,
    bestSeller,
    description: { short, full, materials },
    price,
    inBacket = false,
    discount,
    liked,
    images,
    actions = ['OTHER.PURCHASED', 'OTHER.BUY'],
    options,
    itemsRecomend,
    comments,
  } = props;

  const productGetInitialValue = () => {
    return {
      [TEST_PRODUCT_OPTIONS_KEY.SIZE]:
        options[TEST_PRODUCT_OPTIONS_KEY.SIZE][0].id,
      [TEST_PRODUCT_OPTIONS_KEY.COLOR]:
        options[TEST_PRODUCT_OPTIONS_KEY.COLOR][0].id,
    };
  };

  return (
    <SectionLayout type="MEDIUM">
      <Main>
        <TextSecondary>Главная / Выкройки / Пальто 0105 ЦК-рукав</TextSecondary>
        <MainContent>
          <ProductImageComponent images={images} />
          <MainInfo>
            <TitleCase>
              <Title tid={name} />
              {bestSeller && <Modifier alt={true} tid={'Хит!'} />}
              {discount && <Modifier tid={'Скидка!'} />}
            </TitleCase>
            <TextSecondary tid={short} />
            <Divider />
            <ProductDescriptionComponent text={full} />
            <Divider />
            <ProductSelectContainer
              initialValue={productGetInitialValue()}
              options={options}
              optionsKeys={Object.values(TEST_PRODUCT_OPTIONS_KEY)}
              optionsTitles={TEST_PRODUCT_TITLE_BY_KEY}
            />
            <Divider />
            <FooterCase>
              <ProductPriceComponent
                priceWord={'Цена'}
                symbol={':'}
                price={price}
                valute={'руб'}
                discount={discount}
              />
              <ActionCase>
                <Button
                  act={inBacket}
                  tid={inBacket ? actions[0] : actions[1]}
                />
                <LikeButton like={liked} icon={LikeIcon} />
              </ActionCase>
            </FooterCase>
          </MainInfo>
        </MainContent>
      </Main>
      {materials && (
        <SectionLayout type="TEXT">
          <TitlePrimary tid={'Материалы'} />
          <ProductDescriptionComponent lines={3} text={materials} />
        </SectionLayout>
      )}
      <SectionLayout>
        <TitlePrimary tid={'Рекомендации'} />
        <BasicCardList
          items={itemsRecomend}
          actions={['OTHER.SELECTED', 'OTHER.SELECT']}
        />
      </SectionLayout>
      <SectionLayout>
        <ProductCommentComponent items={comments} />
      </SectionLayout>
    </SectionLayout>
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
const ActionCase = styled.div`
  gap: ${spacing(2)};
  display: flex;
`;

const LikeButton = styled(ButtonBasic)`
  fill: ${({ like }) => (like ? '#ffffff' : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${({ like }) =>
    like ? THEME_COLOR.SECONDARY : THEME_COLOR.GRAY};
`;
const Button = styled(ButtonPrimary)`
  width: 165px;
  padding: ${spacing(3)};
  ${({ act }) => act && `background-color: ${THEME_COLOR.SECONDARY}`}
`;
const Modifier = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  color: ${({ alt }) => (alt ? THEME_COLOR.PRIMARY_DARK : THEME_COLOR.PRIMARY)};
`;
const Title = styled(TitlePrimary)`
  font-size: 28px;
`;
const MainInfo = styled.div`
  width: 555px;
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
`;
const MainContent = styled.div`
  display: flex;
  gap: ${spacing(6)};
`;
const Main = styled.div`
  display: grid;
  gap: ${spacing(6)};
`;
const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;
