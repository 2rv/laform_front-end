import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
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
    <Container>
      <PaddingLayout>
        <IndentLayout type="MEDIUM">
          <Main>
            <TextSecondary>
              Главная / Выкройки / Пальто 0105 ЦК-рукав
            </TextSecondary>
            <MainContent>
              <ProductImageComponent images={images} />
              <MainInfo>
                <TitleContainer>
                  <ProductTitle tid={name} />
                  {bestSeller && <Modifier alt={true} tid={'Хит!'} />}
                  {discount && <Modifier tid={'Скидка!'} />}
                </TitleContainer>
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
                <FlexContainer>
                  <ProductPriceComponent
                    priceWord={'Цена'}
                    symbol={':'}
                    price={price}
                    valute={'руб'}
                    discount={discount}
                  />
                  <ActionsContainer>
                    <Button
                      act={inBacket}
                      tid={inBacket ? actions[0] : actions[1]}
                    />
                    <LikeButton like={liked} icon={LikeIcon} />
                  </ActionsContainer>
                </FlexContainer>
              </MainInfo>
            </MainContent>
          </Main>
          {materials && (
            <MaterialsContainer>
              <TitlePrimary tid={'Материалы'} />
              <ProductDescriptionComponent lines={3} text={materials} />
            </MaterialsContainer>
          )}
          <IndentLayout>
            <TitlePrimary tid={'Рекомендации'} />
            <BasicCardList
              items={itemsRecomend}
              actions={['OTHER.SELECTED', 'OTHER.SELECT']}
            />
          </IndentLayout>
          <IndentLayout>
            <ProductCommentComponent />
          </IndentLayout>
        </IndentLayout>
      </PaddingLayout>
    </Container>
  );
}
// ProductImageComponent Там переключалки кнопки не те что в дизайне но они норм
// Divider Удобнее чем гемароится с border
// ProductPriceComponent Никак иначе TextField не позволяют тыкать двоеточие и делать много строчность
// ProductSelectContainer определяет сколько полей параметров нужно создать
// ProductSelectContainer текст 14px нужно 16 и цвет #8F8D8E переделыввать select компоненту?
// ActionsContainer Добавить кнопку +/- 1 для количества товаров хз зачем
// Доделать читать дальше кнопки и как они отображаться должны
// Сделано 2 модификатора можно удалить если надо но они норм
// Добавить витрину с рекомендациями товаров (но там 3 разных карточки неудобно)
// Сделать чат с отзывами
// Хлебные крошки параметры size 16px weigth default если активная medium цвет #8F8D8E но там их  2 разных возможно
// Вынести слова в lang

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${spacing(3)};
`;
const ActionsContainer = styled.div`
  gap: ${spacing(2)};
  display: flex;
  margin-left: auto;
`;
const MaterialsContainer = styled.div`
  display: grid;
  gap: ${spacing(2)};
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
const ProductTitle = styled(TitlePrimary)`
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
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing(12)} ${spacing(6)};
`;
const PaddingLayout = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;
