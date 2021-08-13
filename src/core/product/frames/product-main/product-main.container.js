import { ProductMainComponent } from './product-main.component';

export function ProductMainContainer(props) {
  const {
    title,
    shrotDescription,
    fullDescription,
    bestSeller,
    price,
    discount,
    options,
    initialValue,
  } = props;

  return <ProductMainComponent {...props} />;
}
