import { ProductMainComponent } from './product-main.component';

export function ProductMainContainer(props) {
  const { data } = props;
  const {
    title,
    shortDescription,
    fullDescription,
    bestSeller,
    price,
    discount,
  } = data;

  return <ProductMainComponent {...data} />;
}
