import { ProductMainComponent } from './product-main.component';

export function ProductMainContainer(props) {
  const { setValueSelectOption, data } = props;
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
      setValueSelectOption={setValueSelectOption}
    />
  );
}
