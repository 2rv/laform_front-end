import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { CardListBlock } from '../../lib/element/card-list';
import { BlockComment } from '../block-comment';
import { GalleryBlock } from '../block-gallery';
import { ProductMainComponent } from './frames';

export function MasterClassProductComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    productInfo,
    addToCart,
  } = props;

  if (!productInfo) return null;

  const {
    id,
    name,
    description,
    modifier,
    discount,
    type,
    images,
    categories,
    cart,
    programs,
    like,
    recommendations,
  } = productInfo;

  return (
    <SectionLayout type="MEDIUM">
      <SectionLayout>
        <Content>
          <GalleryBlock items={images} />
          <ProductMainComponent
            addToCart={addToCart}
            id={id}
            name={name}
            description={description}
            modifier={modifier}
            discount={discount}
            type={type}
            cart={cart}
            images={images}
            categories={categories}
            programs={programs}
            like={like}
          />
        </Content>
      </SectionLayout>
      <CardListBlock
        onSetCart={addToCart}
        title="Рекомендации"
        items={recommendations}
      />
      <BlockComment type={type} id={id} />
    </SectionLayout>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
