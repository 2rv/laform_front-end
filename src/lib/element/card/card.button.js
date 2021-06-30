import styled from 'styled-components';
import { ButtonPrimary, ButtonBasic } from 'src/lib/element/button';
import { spacing, THEME_COLOR } from 'src/lib/theme';
import { ReactComponent as LikeIcon } from '../../../asset/svg/favorite-icon.svg';

export function CardButton({ actived, liked, actions }) {
  return (
    <Container>
      <Button act={actived} tid={actived ? actions[0] : actions[1]} />
      <LikeButton like={liked} icon={LikeIcon} />
    </Container>
  );
}
const LikeButton = styled(ButtonBasic)`
  fill: ${({ like }) => (like ? '#ffffff' : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${({ like }) =>
    like ? THEME_COLOR.SECONDARY : THEME_COLOR.GRAY};
`;
const Button = styled(ButtonPrimary)`
  width: 165px;
  padding: ${spacing(3)};
  ${({ act }) => act && `background-color: ${THEME_COLOR.SECONDARY}`}
`;
const Container = styled.div`
  gap: ${spacing(1)};
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
