import styled, { css } from 'styled-components';
import { IconButton } from 'src/lib/element/button';
import { THEME_COLOR } from 'src/lib/theme';
import { LikeComponentProps } from './like.type';
import { ReactComponent as LikeIcon } from 'src/asset/svg/like.svg';
import { ReactComponent as LikeDeleteIcon } from 'src/asset/svg/like-delete.svg';

export function LikeComponent(props: LikeComponentProps) {
  const { like, switchLike, pending } = props;

  return (
    <Button onClick={switchLike} like={like} disabled={pending}>
      <Icon like={like} />
      <DeleteIcon />
    </Button>
  );
}

const Icon = styled(LikeIcon)<{ like: boolean }>`
  fill: ${(p) => (p.like ? THEME_COLOR.PRIMARY : THEME_COLOR.SECONDARY_DARK)};
`;
const DeleteIcon = styled(LikeDeleteIcon)`
  display: none;
`;
const Button = styled(IconButton)<{ like: boolean }>`
  background-color: ${THEME_COLOR.GRAY};
  transition: 0.8s;
  ${(p) => {
    return p.like
      ? css`
          &:hover ${DeleteIcon} {
            display: inline;
          }
          &:hover ${Icon} {
            display: none;
          }
        `
      : '';
  }}
`;
