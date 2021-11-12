import { convertMultiProducts } from 'src/lib/common/product-converters';

export function compilationsPerform(rowData) {
  return rowData.map((item) => {
    return {
      id: item.id,
      title: item.title,
      compilationProducts: convertMultiProducts(item.compilationProducts),
    };
  });
}
