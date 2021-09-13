import styled from 'styled-components';
import { ReactComponent as LikeIcon } from '../../asset/svg/favorite-icon.svg';
import { IconButton } from '../../lib/element/button';
import { THEME_COLOR } from '../../lib/theme';

export function LikeComponent({ onLike, like }) {
  return (
    <Button onClick={onLike} like={like}>
      <LikeIcon />
    </Button>
  );
}

const Button = styled(IconButton)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${(p) =>
    p.like ? THEME_COLOR.DARK_GRAY : THEME_COLOR.GRAY};
`;
