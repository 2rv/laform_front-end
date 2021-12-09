import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { EnumeratorLength } from 'src/lib/element/enumerator';

interface props {
  id?: string;
  type?: number;
  indexId?: string;
  length?: number;
  maxLength?: number;
  changeItem?: Function;
  isLength?: boolean;
}
export function TableEnumeratorLength(props: props) {
  const { id, indexId, isLength, length, maxLength = 0, changeItem } = props;
  if (!id || typeof changeItem !== 'function' || !isLength) return null;
  const handleChange = (value: number) => {
    if (Math.floor(maxLength * 100) < Math.floor(value * 100)) {
      return changeItem({ indexId, id, length: maxLength });
    }
    changeItem({
      indexId,
      id,
      length: value,
    });
  };
  return (
    <Td>
      <EnumeratorLength
        titleTid="Длинна"
        length={length}
        maxLength={maxLength}
        onChange={handleChange}
        minLength={0.1}
      />
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-right: ${spacing(2)};
  width: 90px;
  min-width: 90px;
  @media screen and (max-width: 875px) {
    margin-left: 90px;
  }
`;
