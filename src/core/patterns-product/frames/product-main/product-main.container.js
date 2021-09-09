import { ProductMainComponent } from './product-main.component';

export function ProductMainContainer(props) {
  const { setValueSelectOption, data, product } = props;
  const {
    title,
    shortDescription,
    fullDescription,
    bestSeller,
    price,
    discount,
    like,
    select,
  } = data;

  return (
    <ProductMainComponent
      {...data}
      product={product}
      setValueSelectOption={setValueSelectOption}
    />
  );
}
