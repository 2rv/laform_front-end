import { CreateProductComponent } from './create-product.component';
import {
  TEST_CREATE_PRODUCT_FIELDS__DATA,
  TEST_CREATE_PRODUCT_IMAGES__DATA,
} from './create-product.constant';

export function CreateProductContainer() {
  return (
    <CreateProductComponent
      imagesData={TEST_CREATE_PRODUCT_IMAGES__DATA}
      fieldsData={TEST_CREATE_PRODUCT_FIELDS__DATA}
    />
  );
}
