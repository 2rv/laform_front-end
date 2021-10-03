import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR, spacing } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { ButtonBasic } from '../../lib/element/button';

export function ProducCounter(props) {
  const { dicrement, count, increment } = props;
  if (!dicrement || !count || !increment) return null;
  return (
    <Container>
      <Button tid="+" onClick={increment} />
      <Count tid={count} />
      <Button disabled={count < 1} tid="-" onClick={dicrement} />
    </Container>
  );
}
const Count = styled(TextSecondary)`
  width: max-content;
  padding: ${spacing(2)};
`;
const Container = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
`;
const Button = styled(ButtonBasic)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
