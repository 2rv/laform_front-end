import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { LoaderPrimary } from 'src/lib/element/loader';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { ProductMainComponent } from './frames';
import { ProductImages } from '../block-product-components';

export function SewingGoodsPageComponent(props) {
  const { isPending, isError, errorMessage, pageLoading, productData } = props;
  if (isPending) {
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
        <ProductMainComponent {...productData} />
      </Content>
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
