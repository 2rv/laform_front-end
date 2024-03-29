import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { EnumeratorCount } from 'src/lib/element/enumerator';
import { TableEnumeratorCountProps } from '../table.type';

export function TableEnumeratorCount(props: TableEnumeratorCountProps) {
  const {
    id,
    type,
    indexId,
    count = 0,
    isCount,
    isLength,
    maxCount = 0,
    changeItem,
  } = props;
  if (!id || typeof changeItem !== 'function') return null;
  if (!isCount && type === 0) return null;
  if (!isCount && (type === 1 || type === 2)) return <td />;
  if (!isCount && !isLength && type === 3) return <td />;
  if (!isCount && type === 3) return null;

  const handleChange = (value: number) => {
    if (maxCount < value) {
      return changeItem({ indexId, id, count: maxCount });
    }
    changeItem({ indexId, id, count: Math.ceil(value) });
  };

  return (
    <Td>
      <EnumeratorCount
        titleTid="Количество"
        count={count || 0}
        maxNumber={maxCount}
        onChange={handleChange}
        minNumber={1}
      />
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-right: ${spacing(2)};
  width: 80px;
  min-width: 80px;
  @media screen and (max-width: 875px) {
    margin-left: 90px;
    width: 200px;
  }
`;
