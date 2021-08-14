import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../theme';
import { ButtonPrimary, IconButton } from '../button';
import { ReactComponent as LikeIcon } from '../../../asset/svg/favorite-icon.svg';
import { useEffect, useState } from 'react';

export function CardActions(props) {
  const { like = false, select = false, type = 0, width = 165 } = props;
  const [isLiked, setLike] = useState(like);
  const [isSelected, setSelect] = useState(select);
  const [selectText, setSelectText] = useState(null);

  useEffect(() => {
    if (type === 1) {
      setSelectText(isSelected ? 'OTHER.PURCHASED' : 'OTHER.BUY');
    } else if (type === 2) {
      setSelectText(isSelected ? 'Убрать из корзины' : 'В корзину');
    } else {
      setSelectText(isSelected ? 'OTHER.SELECTED' : 'OTHER.SELECT');
    }
  }, [isSelected]);

  const onLike = () => {
    setLike(!isLiked);
  };
  const onSelect = () => {
    setSelect(!isSelected);
  };

  return (
    <LineCase>
      <Button
        width={width}
        onClick={onSelect}
        select={isSelected}
        tid={selectText}
      />
      <LikeButton onClick={onLike} like={isLiked}>
        <LikeIcon />
      </LikeButton>
    </LineCase>
  );
}
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
const Button = styled(ButtonPrimary)`
  ${(p) => p.select && `background-color: ${THEME_COLOR.DARK_GRAY}`}
`;
const LikeButton = styled(IconButton)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${(p) =>
    p.like ? THEME_COLOR.DARK_GRAY : THEME_COLOR.GRAY};
`;
