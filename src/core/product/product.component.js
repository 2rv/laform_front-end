import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { ProductCommentComponent, ProductMainContainer } from './frames';
import { GalleryBlock } from '../block-gallery';
import { TEST_PRODUCT_OPTIONS_KEY } from './product.constant';
import { TitlePrimary } from '../../lib/element/title';
import { CardListBlock } from '../../lib/element/card-list';
import { TextBlock } from '../block-text';
import { BlockComments } from '../block-comments/comments-block';

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
    options,
    listItems,
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
      <SectionLayout>
        <TextSecondary>Главная / Выкройки / Пальто 0105 ЦК-рукав</TextSecondary>
        <Content>
          <GalleryBlock items={images} />
          <ProductMainContainer
            title={name}
            shrotDescription={short}
            fullDescription={full}
            bestSeller={bestSeller}
            price={price}
            discount={discount}
            options={options}
            initialValue={productGetInitialValue()}
          />
        </Content>
      </SectionLayout>
      {materials && (
        <SectionLayout type="TEXT">
          <TitlePrimary tid={'Материалы'} />
          <TextBlock text={materials} />
        </SectionLayout>
      )}
      <CardListBlock
        title="Рекомендации"
        cardType="sewing-goods"
        items={listItems}
      />
      <BlockComments items={comments} />
    </SectionLayout>
  );
}
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(6)};
`;
