import styled from 'styled-components';
import { IconButton } from 'src/lib/element/button';
import { THEME_COLOR } from 'src/lib/theme';
import { LikeComponentProps } from './like.type';

export function LikeComponent(props: LikeComponentProps) {
  const { like, switchLike, pending } = props;

  return (
    <Button onClick={switchLike} like={like} disabled={pending}>
      <Icon like={like} />
      <DeleteIcon />
    </Button>
  );
}

const Icon = styled.div<{ like: boolean }>`
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
const Button = styled(IconButton)<{ like: boolean }>`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${THEME_COLOR.GRAY};
  &:hover ${DeleteIcon} {
    display: inline;
  }
  &:hover ${Icon} {
    display: none;
  }
`;
