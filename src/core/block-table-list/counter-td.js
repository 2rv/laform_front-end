import styled from 'styled-components';
import { ButtonBasic } from '../../lib/element/button';
import { TextPrimary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';

export function CounterTd(props) {
  const { count, id, dicrementCoun, incrementCount, quantity, excludeCount } =
    props;
  return (
    <Td>
      <CountCase>
        {excludeCount ? null : (
          <>
            <CountButton onClick={() => dicrementCoun(id)}>-</CountButton>
            <TextPrimary>{quantity ? quantity : count[id]}</TextPrimary>
            <CountButton onClick={() => incrementCount(id)}>+</CountButton>
          </>
        )}
      </CountCase>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-right: ${spacing(6)};
  width: 90px;
  min-width: 90px;
  @media screen and (max-width: 875px) {
    margin-left: 90px;
  }
`;
const CountCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
`;

const CountButton = styled(ButtonBasic)`
  width: 100%;
  padding: 0;
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
