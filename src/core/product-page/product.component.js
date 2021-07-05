import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { ButtonBasic, ButtonPrimary } from '../../lib/element/button';
import { BasicCardList } from '../../lib/element/card-list';

import {
  ProductImageComponent,
  ProductDescriptionComponent,
  ProductCommentComponent,
  ProductBreadHistory,
  ProductInfoComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function ProductComponent(props) {
  const { productData, purchasedProductData, actions } = props;
  const {
    name,
    bestSeller = false,
    price,
    discount,
    liked = false,
    inBacket = false,
    descriptionItem: { short, full, materials },
    optionItem,
    imageItem,
    recomendItem,
    commentItem,
    some = false,
    purchased = false,
    dilivery,
    delivered,
    deliveredItem,
  } = purchasedProductData;
  return (
    <Container>
      <PaddingLayout>
        <IndentLayout type="MEDIUM">
          <Main>
            <ProductBreadHistory />
            <MainContent>
              <ProductImageComponent images={imageItem} />
              <ProductInfoComponent
                name={name}
                bestSeller={bestSeller}
                price={price}
                discount={discount}
                actions={actions}
                liked={liked}
                inBacket={inBacket}
                short={short}
                full={full}
                optionItem={optionItem}
                some={some}
                dilivery={dilivery}
                purchased={purchased}
                delivered={delivered}
                deliveredItem={deliveredItem}
              />
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
            <BasicCardList items={recomendItem} actions={actions} />
          </IndentLayout>
          <IndentLayout>
            <ProductCommentComponent items={commentItem} />
          </IndentLayout>
        </IndentLayout>
      </PaddingLayout>
    </Container>
  );
}
// ProductImageComponent Там переключалки кнопки не те что в дизайне но они норм
// Divider Удобнее чем гемароится с border
// ProductPriceComponent Никак иначе TextField не позволяют тыкать двоеточие
// ProductSelectContainer определяет сколько полей параметров нужно создать
// ProductSelectContainer текст 14px нужно 16 и цвет #8F8D8E переделыввать select компоненту?
// ActionsContainer Добавить кнопку +/- 1 для количества товаров хз зачем
// Доделать читать дальше кнопки и как они должны выводить данные модалкой или вниз опускаться по высоте
// Сделано 2 модификатора можно удалить если надо но они норм
// В витрине с рекомендациями должны быть 3 разных типа товаров?
// Добавить в комментарии Formik что бы обрабатывать вводимые сообщения
// Хлебные крошки параметры size 16px weigth default если активная medium цвет #8F8D8E но там их  2 разных возможно
// Вынести слова в lang

const MaterialsContainer = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 555px);
  grid-template-rows: 555px;
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
