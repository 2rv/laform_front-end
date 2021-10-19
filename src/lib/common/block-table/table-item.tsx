import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import {
  TableActions,
  TableComment,
  TableName,
  TableParams,
  TablePrice,
  TableStatus,
  TableEnumeratorCount,
  TableEnumeratorLength,
} from './frame';
import { TableItemProps } from './table.type';

export function TableItem(props: TableItemProps) {
  const { data, changeItem, deleteItem } = props;
  const {
    indexId,
    name,
    image,
    totalPrice,

    params,
    otherParams,
    status,
    comment,
    filePDF,
    path,
    pathConfig,
  } = data;

  const {
    id,
    type,
    vendorCode,
    optionId,
    sizes,
    colors,
    options,
    count,
    length,
    maxCount,
    maxLength,
    isCount,
    isLength,
  } = data;
  return (
    <Tr>
      <TableName
        path={path}
        pathConfig={pathConfig}
        image={image}
        name={name}
        vendorCode={vendorCode}
      />
      <TableComment comment={comment} />
      <TableParams params={params} />
      <TableParams params={otherParams} />
      <TableEnumeratorCount
        id={id}
        type={type}
        indexId={indexId}
        isCount={isCount}
        isLength={isLength}
        changeItem={changeItem}
        count={count}
        maxCount={maxCount}
      />
      <TableEnumeratorLength
        id={id}
        type={type}
        indexId={indexId}
        isLength={isLength}
        changeItem={changeItem}
        length={length}
        maxLength={maxLength}
      />
      <TablePrice isLast={Boolean(!status)} totalPrice={totalPrice} />
      <TableStatus status={status} />
      <TableActions
        id={id}
        indexId={indexId}
        changeItem={changeItem}
        deleteItem={deleteItem}
        filePDF={filePDF}
        optionId={optionId}
        options={options}
        sizes={sizes}
        colors={colors}
        maxCount={maxCount}
        maxLength={maxLength}
        isCount={isCount}
        isLength={isLength}
      />
    </Tr>
  );
}

const Tr = styled.tr`
  display: table-row;
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  }
`;
