import { PRODUCT_TEST_DATA } from './product.constant';
import { ProductComponent } from './product.component';

export function ProductContainer() {
  return <ProductComponent {...PRODUCT_TEST_DATA} />;
}
