import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ReactEditor } from '../block-react-editor';
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
  } = props;
  if (!productData) return <LoaderPrimary />;

  return (
    <SectionLayout type="MEDIUM">
      <Content>
        <ProductImages items={productData.images} />
        <ProductMainComponent {...productData} />
      </Content>
      <SectionLayout type="TEXT">
        <TitlePrimary tid="PATTERNS.CREATE.FORM.COMPLEXITY" />
        <ReactEditor data={productData.materials} enableReInitialize readOnly />
      </SectionLayout>
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
