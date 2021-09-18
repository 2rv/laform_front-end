import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../theme';
import { ButtonSecondary, ButtonPrimary, IconButton } from '../button';
import { Popup } from '../popup';
import { ReactComponent as LikeIcon } from '../../../asset/svg/favorite-icon.svg';
import { ReactComponent as Delete } from '../../../asset/svg/delete-cancel-icon.svg';
import { useEffect, useState } from 'react';
import { TextSecondary } from '../text';
import { LikeButton } from '../../../core/block-like';

export function CardActions(props) {
  const { id, type } = props; // данные самого товара
  const {
    like = false,
    purchase = false,
    cart = false,
    selected = false,
    isAdmin,
  } = props; // данные для методов
  const { onSetCart, onSetLike, onSetSelect, onDeleteProduct } = props; // методы

  const [isLiked, setLike] = useState(like); // Стейт лайка для лайка
  const [inCart, setInCart] = useState(cart); // Стейт корзины для покупки
  const [isSelected, setSelect] = useState(selected); // Стейт выбрано или не выбрано для выбора товара в рекомендации
  const [selectText, setSelectText] = useState(
    purchase ? 'OTHER.PURCHASED' : null,
  ); // Стейт текста который должен быть на кнопке

  useEffect(() => {
    setInCart(cart);
  }, [cart]);

  useEffect(() => {
    setSelectText(inCart ? 'Зайти в корзину' : 'Добавить в корзину');
    onSetSelect &&
      setSelectText(isSelected ? 'OTHER.SELECTED' : 'OTHER.SELECT');
  }, [inCart, isSelected]);

  const onSelectCard = () => {
    if (onSetSelect) {
      setSelect(!isSelected);
      onSetSelect(id, type, !isSelected);
    }
    if (onSetCart && !purchase) {
      setInCart(!inCart);
      onSetCart(id, type, !inCart);
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
      {like === null ? null : <LikeButton id={id} type={type} like={like} />}
      {isAdmin && (
        <Popup
          content={(setVisible) => (
            <ModalContent>
              <TextSecondary tid="Вы точно хотите удалить данный товар? Это действие нельзя отменить" />
              <ModalButtons>
                <ButtonSecondary
                  tid="Да"
                  onClick={() => {
                    onDeleteProduct(id, { deleted: true });
                    setVisible(false);
                  }}
                />
                <ButtonPrimary tid="Отмена" onClick={() => setVisible(false)} />
              </ModalButtons>
            </ModalContent>
          )}
          children={
            <IconButton>
              <Delete />
            </IconButton>
          }
        />
      )}
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
// const LikeButton = styled(IconButton)`
//   fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
//   background-color: ${(p) =>
//     p.like ? THEME_COLOR.DARK_GRAY : THEME_COLOR.GRAY};
// `;

const ModalContent = styled.div`
  display: grid;
  width: 340px;
  gap: ${spacing(2)};
  padding: ${spacing(2)};
`;

const ModalButtons = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
