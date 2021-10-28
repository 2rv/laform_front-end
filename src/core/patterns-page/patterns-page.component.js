import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ReactEditorBlock } from '../../lib/common/block-react-editor';
import { ProductMainComponent } from './frames';
import { ProductImages } from '../block-product-components';
import { LoaderPrimary } from 'src/lib/element/loader';

export function PatternsPageComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    productData,
    isPdfPending,
    isPdfSuccess,
  } = props;
  if (!productData) return <LoaderPrimary />;

  return (
    <SectionLayout type="MEDIUM">
      <Content>
        <ProductImages items={productData.images} />
        <ProductMainComponent
          {...productData}
          isPdfPending={isPdfPending}
          isPdfSuccess={isPdfSuccess}
        />
      </Content>
      <ReactEditorBlock
        titleTid="PATTERNS.CREATE.FORM.COMPLEXITY"
        data={productData.materials}
        enableReInitialize
        readOnly
      />
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
