import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { ProductMainComponent } from './frames';
import { ProductImages } from '../block-product-components';

export function SewingGoodsPageComponent(props) {
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
        <ProductMainComponent data={productData} />
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
