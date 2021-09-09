import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { CardListBlock } from '../../lib/element/card-list';
import { BlockComment } from '../block-comment';
import { GalleryBlock } from '../block-gallery';
import { EditorRenderer } from '../block-editor-renderer';
import { ProductMainComponent } from './frames';

export function PatternsProductComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    //------------
    productInfo,
  } = props;

  const {
    id,
    type,
    name,
    description,
    modifier,
    discount,
    categories = [],
    images,
    sizes = [],
    materials,
    price,
    complexity,
  } = productInfo;

  return (
    <SectionLayout type="MEDIUM">
      <SectionLayout>
        <TextSecondary>{`Главная / Выкройки / Электронные / ${name}`}</TextSecondary>
        <Content>
          <GalleryBlock items={images} />
          <ProductMainComponent
            id={id}
            type={type}
            name={name}
            description={description}
            modifier={modifier}
            discount={discount}
            categories={categories}
            images={images}
            sizes={sizes}
            materials={materials}
            price={price}
            complexity={complexity}
          />
        </Content>
      </SectionLayout>
      <SectionLayout type="TEXT_SMALL">
        <Title tid="Материалы" />
        <EditorRenderer data={materials} />
      </SectionLayout>
      {/* <CardListBlock title="Рекомендации" cardType="sewing-goods" items={[]} /> */}
      <BlockComment type={type} id={id} />
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
