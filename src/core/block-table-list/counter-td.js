import styled from 'styled-components';
import { ButtonBasic } from '../../lib/element/button';
import { TextPrimary, TextSecondary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';

export function CounterTd(props) {
  const { id, count, changeItem } = props;
  if (!id || !count || !changeItem) return null;

  const isMin = count > 1;

  const increment = () => changeItem(id, { count: count + 1 });
  const dicrement = () => isMin && changeItem(id, { count: count - 1 });

  return (
    <Td>
      <Case>
        <Button tid="+" onClick={increment} />
        <Count tid={count} />
        <Button disabled={!isMin} tid="-" onClick={dicrement} />
      </Case>
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
  width: max-content;
  align-items: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
`;
const Button = styled(ButtonBasic)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
