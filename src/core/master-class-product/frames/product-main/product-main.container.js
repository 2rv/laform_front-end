import { ProductMainComponent } from './product-main.component';

export function ProductMainContainer(props) {
  const {
    id,
    name,
    description,
    modifier,
    discount,
    type,
    comment,
    images,
    categories,
    programs,
    setValueSelectOption,
  } = props;

  return (
    <ProductMainComponent
      id={id}
      name={name}
      description={description}
      modifier={modifier}
      discount={discount}
      type={type}
      comment={comment}
      images={images}
      categories={categories}
      programs={programs}
      setValueSelectOption={setValueSelectOption}
    />
  );
}
