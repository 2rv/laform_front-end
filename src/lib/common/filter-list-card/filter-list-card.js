export function filterByType(listItems, activeType) {
  return listItems.filter((item) => {
    if (activeType === 9) return true;
    if (item.type === activeType) return true;
  });
}

export function sorterItemsByParams(listData, find, filter) {
  if (find !== '') {
    return listData.filter((product) =>
      product.name.toLowerCase().trim().includes(find.toLowerCase().trim()),
    );
  }
  if (filter === 1) {
    return listData.filter((item) => item.price?.discount);
  }
  if (filter === 2) {
    return listData.filter((item) => item?.bestseller);
  }
  if (filter === 3) {
    return listData.sort((a, b) => {
      return (
        (a.price.discount
          ? a.price.min - (a.price.min / 100) * a.price.discount
          : a.price.min) -
        (b.price.discount
          ? b.price.min - (b.price.min / 100) * b.price.discount
          : b.price.min)
      );
    });
  }
  if (filter === 4) {
    return listData.sort((a, b) => {
      return (
        (b.price.discount
          ? b.price.min - (b.price.min / 100) * b.price.discount
          : b.price.min) -
        (a.price.discount
          ? a.price.min - (a.price.min / 100) * a.price.discount
          : a.price.min)
      );
    });
  }
  return listData;
}
