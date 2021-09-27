import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { CardListBlock } from '../../lib/element/card-list';
import { BlockComment } from '../block-comment';
import { GalleryBlock } from '../block-gallery';
import { ReactEditor } from '../block-react-editor';
import { ProductMainComponent } from './frames';

export function PatternsProductComponent(props) {
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

  return (
    <SectionLayout type="MEDIUM">
      <SectionLayout>
        <Content>
          <GalleryBlock items={productInfo.images} />
          <ProductMainComponent addToCart={addToCart} {...productInfo} />
        </Content>
      </SectionLayout>
      <SectionLayout type="TEXT_SMALL">
        <Title tid="PATTERNS.MATERIALS" />
        <ReactEditor data={productInfo.materials} enableReInitialize readOnly />
      </SectionLayout>
      <CardListBlock
        onSetCart={addToCart}
        title="Рекомендации"
        items={productInfo.recommendations}
      />
      <BlockComment type={productInfo.type} id={productInfo.id} />
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
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
