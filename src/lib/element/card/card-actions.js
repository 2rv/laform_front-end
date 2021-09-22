import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../theme';
import { ButtonSecondary, ButtonPrimary, IconButton } from '../button';
import { Popup } from '../popup';
import { ReactComponent as LikeIcon } from '../../../asset/svg/favorite-icon.svg';
import { ReactComponent as Delete } from '../../../asset/svg/delete-cancel-icon.svg';
import { useEffect, useState } from 'react';
import { TextSecondary } from '../text';
import { LinkPrimary } from '../link';
import { BASKET_ROUTE_PATH } from 'src/core/basket';
import { redirect } from 'src/main/navigation';

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
    setSelectText(inCart ? 'BASKET.GO_TO_BASKET' : 'BASKET.ADD_TO_BASKET');
    onSetSelect &&
      setSelectText(isSelected ? 'OTHER.SELECTED' : 'OTHER.SELECT');
  }, [inCart, isSelected]);

  const onLikeCard = () => {
    setLike(!isLiked);
    onSetLike && onSetLike(id, !isLiked);
  };
  const onSelectCard = () => {
    if (Boolean(inCart)) {
      redirect(BASKET_ROUTE_PATH)
    }

    if (onSetSelect) {
      setSelect(!isSelected);
      onSetSelect(id, type, !isSelected);
    }
    if (onSetCart && !purchase) {
      if (!inCart) {
        setInCart(!inCart);
        onSetCart(id, type, !inCart);
      }
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
      {isAdmin && (
        <Popup
          content={(setVisible) => (
            <ModalContent>
              <TextSecondary tid="OTHER.ARE_YOU_SURE_TO_DELETE_PRODUCT" />
              <ModalButtons>
                <ButtonSecondary
                  tid="OTHER.YES"
                  onClick={() => {
                    onDeleteProduct(id, { deleted: true });
                    setVisible(false);
                  }}
                />
                <ButtonPrimary tid="OTHER.CANCEL" onClick={() => setVisible(false)} />
              </ModalButtons>
            </ModalContent>
          )}
          children={
            <RemoveProductButton>
              <Delete />
            </RemoveProductButton>
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
const LikeButton = styled(IconButton)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${(p) =>
    p.like ? THEME_COLOR.DARK_GRAY : THEME_COLOR.GRAY};
`;

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

const RemoveProductButton = styled(IconButton)`
  padding: 0;
`;
