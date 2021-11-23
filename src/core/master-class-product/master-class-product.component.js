import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { CardListBlock } from '../../lib/element/card-list';
import { BlockComment } from '../block-comment';
import { ProductMainComponent } from './frames';
import { ProductImages } from '../block-product-components';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';

export function MasterClassProductComponent(props) {
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
      {productData.materials && (
        <ReactEditorBlock
          titleTid="PATTERNS.MATERIALS"
          data={productData.materials}
          enableReInitialize
          readOnly
        />
      )}
      <CardListBlock
        items={productData.recommendations}
        title="MASTER_CLASSES.MASTER_CLASSES.RECOMMENDATIONS"
      />
      <BlockComment type={productData.type} id={productData.id} />
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
