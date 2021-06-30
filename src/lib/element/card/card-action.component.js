import { ButtonPrimary, ButtonBasic } from 'src/lib/element/button';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';
import { ReactComponent as FavoriteIcon } from '../../../asset/svg/favorite-icon.svg';

export function CardAction({ isActived, actions }) {
  return (
    <ActionContainer>
      <Button sel={isActived} tid={isActived ? actions[0] : actions[1]} />
      <FavoriteButton sel={isActived} icon={FavoriteIcon} />
    </ActionContainer>
  );
}
const FavoriteButton = styled(ButtonBasic)`
  background-color: ${({ sel }) =>
    sel ? THEME_COLOR.SECONDARY : THEME_COLOR.GRAY};
`;
const Button = styled(ButtonPrimary)`
  width: 100%;
  padding: ${spacing(3)};
  ${({ sel }) => sel && `background-color: ${THEME_COLOR.SECONDARY}`}
`;
const ActionContainer = styled.div`
  gap: ${spacing(1)};
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
