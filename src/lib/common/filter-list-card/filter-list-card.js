export function filterByType(listItems, activeType) {
  return listItems.filter((item) => {
    if (activeType === 9) return true;
    if (item.type === activeType) return true;
  });
}
