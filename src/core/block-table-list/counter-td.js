import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { ProducCounter } from '../block-product-components';

export function CounterTd(props) {
  const { id, indexId, count, changeItem } = props;
  if (!id || !count || !changeItem) return null;

  const isMin = count > 1;

  const increment = () => changeItem({ indexId, id, count: count + 1 });
  const dicrement = () =>
    isMin && changeItem({ indexId, id, count: count - 1 });

  return (
    <Td>
      <ProducCounter
        count={count}
        increment={increment}
        dicrement={dicrement}
      />
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-right: ${spacing(8)};
  width: 90px;
  min-width: 90px;
  @media screen and (max-width: 875px) {
    margin-left: 90px;
  }
`;
