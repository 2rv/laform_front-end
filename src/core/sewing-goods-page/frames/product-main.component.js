import styled from 'styled-components';
import { spacing } from '../../../lib/theme';
import { TitlePrimary } from '../../../lib/element/title';
import { Divider } from '../../../lib/element/divider';
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
    categories,
    price,
    discount,
    count,
    diliveryPrice,
    vendorCode,
    status,
    params,
    otherParams,
  } = props.data;

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
        count={count}
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
