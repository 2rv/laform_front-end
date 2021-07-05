import {
  PRODUCT_TEST_DATA,
  PRODUCT_PURCHASED_TEST_DATA,
} from './product.constant';
import { ProductComponent } from './product.component';

export function ProductContainer() {
  return (
    <ProductComponent
      actions={['OTHER.SELECTED', 'OTHER.SELECT']}
      productData={PRODUCT_TEST_DATA}
      purchasedProductData={PRODUCT_PURCHASED_TEST_DATA}
    />
  );
}
