import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { TitlePrimary } from 'src/lib/element/title';
import { Divider } from 'src/lib/element/divider';
import {
  ProductPagePrice,
  ProductParams,
  ProductCategories,
  ProductDescription,
  ProductVendorCode,
} from '../../block-product-components';

export function ProductMainComponent(props) {
  const {
    id,
    title,
    description,
    images,
    categories,
    price,
    discount,
    count,
    length,
    shippingPrice,
    vendorCode,
    params,
    otherParams,
  } = props;

  return (
    <Container>
      <HeaderCase>
        <TitlePrimary tid={title} />
        <ProductCategories categories={categories} />
      </HeaderCase>
      <Divider />
      <ProductDescription description={description} />
      <ProductParams params={params} />
      <Divider />
      <ProductPagePrice
        shippingPrice={shippingPrice}
        price={price}
        discount={discount}
        count={count}
        length={length}
      />
      <ProductParams params={otherParams} />
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
