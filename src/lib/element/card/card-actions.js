import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../theme';
import { ButtonPrimary, IconButton } from '../button';
import { ReactComponent as LikeIcon } from '../../../asset/svg/favorite-icon.svg';
import { useEffect, useState } from 'react';

export function CardActions(props) {
  const { id, type } = props; // данные самого товара
  const {
    like = false,
    purchase = false,
    cart = false,
    selected = false,
  } = props; // данные для методов
  const { onSetCart, onSetLike, onSetSelect } = props; // методы

  const [isLiked, setLike] = useState(like); // Стейт лайка для лайка
  const [inCart, setInCart] = useState(cart); // Стейт корзины для покупки
  const [isSelected, setSelect] = useState(selected); // Стейт выбрано или не выбрано для выбора товара в рекомендации
  const [selectText, setSelectText] = useState(
    purchase ? 'OTHER.PURCHASED' : null,
  ); // Стейт текста который должен быть на кнопке

  useEffect(() => {
    setSelectText(inCart ? 'Убрать из корзины' : 'В корзину');
    onSetSelect &&
      setSelectText(isSelected ? 'OTHER.SELECTED' : 'OTHER.SELECT');
  }, [inCart, isSelected]);

  const onLikeCard = () => {
    setLike(!isLiked);
    onSetLike && onSetLike(id, !isLiked);
  };
  const onSelectCard = () => {
    if (onSetSelect) {
      setSelect(!isSelected);
      onSetSelect(id, !isSelected);
    }
    if (onSetCart && !purchase) {
      setInCart(!inCart);
      onSetCart(id, !inCart);
    }
  };

  return (
    <LineCase>
      <Button
        disabled={onSetSelect ? null : purchase}
        adaptive
        onClick={onSelectCard}
        select={onSetSelect ? isSelected : purchase ? true : inCart}
        tid={selectText}
      />
      <LikeButton onClick={onLikeCard} like={isLiked}>
        <LikeIcon />
      </LikeButton>
    </LineCase>
  );
}

const LineCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
const Button = styled(ButtonPrimary)`
  ${(p) => p.select && `background-color: ${THEME_COLOR.DARK_GRAY}`}
`;
const LikeButton = styled(IconButton)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${(p) =>
    p.like ? THEME_COLOR.DARK_GRAY : THEME_COLOR.GRAY};
`;
