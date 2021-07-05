import styled from 'styled-components';
import { ReactComponent as LikeIcon } from '../../../../asset/svg/favorite-icon.svg';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { ButtonBasic, ButtonPrimary } from '../../../../lib/element/button';
import { TitlePrimary } from '../../../../lib/element/title';
import { useState } from 'react';

export function ProductActionsComponent(props) {
  const { inBacket, actions, liked, some } = props;
  const [count, setCount] = useState(1);
  const increment = () => {
    const value = count + 1;
    setCount(value);
  };
  const dicrement = () => {
    const value = count === 1 ? count : count - 1;
    setCount(value);
  };
  return (
    <ActionsContainer>
      {some && (
        <CountContainer>
          <ButtonBasic tid="-" onClick={dicrement} />
          <TitlePrimary tid={count} />
          <ButtonBasic tid="+" onClick={increment} />
        </CountContainer>
      )}
      <Button act={inBacket} tid={inBacket ? actions[0] : actions[1]} />
      <IconButton like={liked} icon={LikeIcon} />
    </ActionsContainer>
  );
}

const ActionsContainer = styled.div`
  gap: ${spacing(2)};
  display: flex;
`;
const CountContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;
const IconButton = styled(ButtonBasic)`
  fill: ${({ like }) =>
    like ? THEME_COLOR.BACKGROUND.WHITE : THEME_COLOR.SECONDARY_DARK};
  background-color: ${({ like }) =>
    like ? THEME_COLOR.SECONDARY : THEME_COLOR.GRAY};
`;
const Button = styled(ButtonPrimary)`
  width: 165px;
  padding: ${spacing(3)};
  ${({ act }) => act && `background-color: ${THEME_COLOR.SECONDARY}`}
`;
