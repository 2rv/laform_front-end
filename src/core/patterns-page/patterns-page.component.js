import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { ProductMainComponent } from './frames';
import { ProductImages, ProductMaterials } from '../block-product-components';
import { LoaderPrimary } from 'src/lib/element/loader';
import { CenteredSpinner } from 'src/lib/element/spinner';

export function PatternsPageComponent(props) {
  const {
    pageLoading,
    pending,
    error,
    errorMessage,
    productData,
    mailPending,
    mailSuccess,
  } = props;

  if (pending) {
    return (
      <Container>
        <CenteredSpinner />;
      </Container>
    );
  }
  return (
    <SectionLayout type="MEDIUM">
      {pageLoading && <LoaderPrimary />}
      <Content>
        <ProductImages items={productData.images} />
        <ProductMainComponent
          {...productData}
          mailPending={mailPending}
          mailSuccess={mailSuccess}
        />
      </Content>
      <ProductMaterials
        data={productData.materials}
        oldData={productData.materialOld}
        pending={pending}
        titleTid="PATTERNS.MATERIALS"
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
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
