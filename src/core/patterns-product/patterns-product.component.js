import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { CardListBlock } from '../../lib/element/card-list';
import { BlockComment } from '../block-comment';
import { ProductMainComponent } from './frames';
import { ProductImages, ProductMaterials } from '../block-product-components';
import { LoaderPrimary } from 'src/lib/element/loader';
import { TabBlocks } from 'src/lib/element/tab-blocks';

export function PatternsProductComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    productData,
  } = props;

  if (!productData) return <LoaderPrimary />;

  return (
    <SectionLayout type="MEDIUM">
      {isPending && <LoaderPrimary />}
      <SectionLayout>
        <Content>
          <ProductImages items={productData.images} />
          <ProductMainComponent {...productData} />
        </Content>
      </SectionLayout>
      <TabBlocks tabItems={['Материалы', 'Рекомендации', 'Отзывы']}>
        <ProductMaterials
          data={productData.materials}
          oldData={productData.materialOld}
          pending={isPending}
          titleTid="PATTERNS.MATERIALS"
        />
        <CardListBlock
          pending={isPending}
          items={productData.recommendations}
          title="PATTERNS.RECOMMENDATIONS"
        />
        <BlockComment type={productData.type} id={productData.id} />
      </TabBlocks>
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
