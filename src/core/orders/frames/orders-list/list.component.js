export function ListComponent(props) {
  const { dataItems, children } = props;
  return dataItems.map((item, index) =>
    children({ item, key: item?.id || index }),
  );
}
