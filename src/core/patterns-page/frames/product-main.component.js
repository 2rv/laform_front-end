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
    title,
    categories,
    description,
    descriptionOld,
    price,
    discount,
    shippingPrice,
    count,
    filesPdf,
    vendorCode,
    params,
    otherParams,

    mailPending,
    mailSuccess,
  } = props;

  return (
    <Container>
      <HeaderCase>
        <TitlePrimary tid={title} />
        <ProductCategories categories={categories} />
      </HeaderCase>
      <Divider />
      <ProductDescription
        description={description}
        descriptionOld={descriptionOld}
      />
      <ProductParams params={params} />
      <Divider />
      <ProductPagePrice
        shippingPrice={shippingPrice}
        price={price}
        discount={discount}
        count={count}
      />
      <ProductParams params={otherParams} />
      <FilePdfActions
        title={title}
        filesPdf={filesPdf}
        isPdfPending={mailPending}
        isPdfSuccess={mailSuccess}
      />
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
