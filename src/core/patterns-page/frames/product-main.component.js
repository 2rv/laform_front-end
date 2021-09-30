import styled from 'styled-components';
import { spacing } from '../../../lib/theme';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
import {
  ProductCategories,
  ProductDescription,
  ProductPagePrice,
  ProductParams,
  ProductVendorCode,
} from 'src/core/block-product-components';
import { FilePdfActions } from './file-pdf-action.component';

export function ProductMainComponent(props) {
  const {
    id,
    type,
    images,
    title,
    categories,
    description,
    materials,
    price,
    discount,
    diliveryPrice,
    filePdf,
    params,
    otherParams,
    vendorCode,
    isPdfPending,
    isPdfSuccess,
  } = props;

  return (
    <Container>
      <HeaderCase>
        <TitlePrimary tid={title} />
        <ProductCategories categories={categories} />
      </HeaderCase>
      <Divider />
      <ProductDescription text={description} />
      <ProductParams params={params} />
      <Divider />
      <ProductPagePrice
        diliveryPrice={diliveryPrice}
        price={price}
        discount={discount}
      />
      <ProductParams params={otherParams} />
      <FilePdfActions title={title} filePdf={filePdf} isPdfPending={isPdfPending} isPdfSuccess={isPdfSuccess} />
      <Divider />
      <ProductVendorCode vendorCode={vendorCode} />
    </Container>
  );
}
const HeaderCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    order: -1;
  }
`;
const Container = styled.div`
  gap: ${spacing(3)};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    display: contents;
  }
`;
