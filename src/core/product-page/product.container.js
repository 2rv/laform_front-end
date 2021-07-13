import { TEST_PRODUCT_DATA } from './product.constant';
import { ProductComponent } from './product.component';

export function ProductContainer() {
  return <ProductComponent {...TEST_PRODUCT_DATA} />;
}
