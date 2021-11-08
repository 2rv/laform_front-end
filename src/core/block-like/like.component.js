import styled from 'styled-components';
import { IconButton } from '../../lib/element/button';
import { THEME_COLOR } from '../../lib/theme';

export function LikeComponent({ onLike, like, isPending, isAllLikePage }) {
  return isAllLikePage ? (
    <ButtonAllLikes
      onClick={onLike}
      like={like}
      disabled={isPending}
      isAllLikePage={isAllLikePage}
    >
      <Icon like={like} />
      <DeleteIcon />
    </ButtonAllLikes>
  ) : (
    <Button
      onClick={onLike}
      like={like}
      disabled={isPending}
      isAllLikePage={isAllLikePage}
    >
      <Icon like={like} />
    </Button>
  );
}

const Icon = styled.div`
  background-image: ${(p) =>
    p.like
      ? "url('/static/image/favorite-icon-active.svg')"
      : "url('/static/image/favorite-icon.svg')"};
  width: 16px;
  height: 16px;
`;

const DeleteIcon = styled.div`
  display: none;
  background-image: url('/static/image/delete-like.svg');
  width: 16px;
  height: 16px;
`;

const ButtonAllLikes = styled(IconButton)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${THEME_COLOR.GRAY};
  &:hover ${DeleteIcon} {
    display: inline;
  }
  &:hover ${Icon} {
    display: none;
  }
`;

const Button = styled(IconButton)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${THEME_COLOR.GRAY};
`;
