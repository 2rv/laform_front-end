import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { CardListBlock } from '../../lib/element/card-list';
import { BlockComment } from '../block-comment';
import { GalleryBlock } from '../block-gallery';
import { ProductMainComponent } from './frames';

export function SewingGoodsProductComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    //------------
    productInfo,
    addToCart,
  } = props;

  if (!productInfo) return null;

  const {
    id,
    type,
    modifier,
    discount = 0,
    name,
    categories = [],
    description,
    images,
    cart,
    sizes = [],
    colors = [],
    count = 0,
  } = productInfo;

  return (
    <SectionLayout type="MEDIUM">
      <SectionLayout>
        {/* <TextSecondary>{`Главная / Товары для шитья / ${name}`}</TextSecondary> */}
        <Content>
          <GalleryBlock items={images} />
          <ProductMainComponent
            id={id}
            type={type}
            modifier={modifier}
            discount={discount}
            name={name}
            cart={cart}
            categories={categories}
            description={description}
            images={images}
            sizes={sizes}
            colors={colors}
            count={count}
            addToCart={addToCart}
          />
        </Content>
      </SectionLayout>
      <BlockComment type={type} id={id} />
    </SectionLayout>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
