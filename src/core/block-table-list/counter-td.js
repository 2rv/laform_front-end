import { useEffect } from 'react';
import styled from 'styled-components';
import { ButtonBasic } from '../../lib/element/button';
import { TextPrimary, TextSecondary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';

export function CounterTd(props) {
  const { id, count, maxCount, countMethods } = props;
  if (!countMethods || !maxCount) return null;

  const [state, setCount] = countMethods;
  useEffect(() => {
    if (!state[id]) {
      const copy = { ...state };
      copy[id] = count;
      setCount(copy);
    }
  }, [maxCount]);

  const increment = () => {
    const copy = { ...state };
    if (copy[id] < maxCount) {
      copy[id] = copy[id] + 1;
      setCount(copy);
    }
  };
  const dicrement = () => {
    const copy = { ...state };
    if (copy[id] > 1) {
      copy[id] = copy[id] - 1;
      setCount(copy);
    }
  };

  return (
    <Td>
      <ActionCase>
        <Button tid="+" onClick={increment} />
        <Count tid={state[id]} />
        <Button tid="-" onClick={dicrement} />
      </ActionCase>
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
const Count = styled(TextSecondary)`
  width: max-content;
  padding: ${spacing(2)};
`;
const Case = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${spacing(3)};
`;
const ActionCase = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
`;
const Button = styled(ButtonBasic)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
