import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../theme';
import { BASKET_ROUTE_PATH } from 'src/core/basket';
import { redirect } from 'src/main/navigation';
import { ButtonSecondary, ButtonPrimary, IconButton } from '../button';
import { Popup } from '../popup';
import { TextSecondary } from '../text';
import { LinkPrimary } from '../link';
import { ReactComponent as Delete } from '../../../asset/svg/delete-cancel-icon.svg';
import { LikeButton } from '../../../core/block-like';

export function CardActions(props) {
  const { id, type } = props;
  const {
    like,
    purchase = false,
    cart = false,
    selected = false,
    isAdmin,
  } = props;
  const { onSetCart, onSetSelect, onDeleteProduct } = props;

  const [inCart, setInCart] = useState(cart);
  const [isSelected, setSelect] = useState(selected);
  const [selectText, setSelectText] = useState(purchase && 'OTHER.PURCHASED');

  useEffect(() => setInCart(cart), [cart]);

  useEffect(() => {
    onSetSelect
      ? setSelectText(isSelected ? 'OTHER.SELECTED' : 'OTHER.SELECT')
      : setSelectText(inCart ? 'BASKET.GO_TO_BASKET' : 'BASKET.ADD_TO_BASKET');
  }, [inCart, isSelected]);

  const onSelectCard = () => {
    if (onSetSelect) {
      setSelect(!isSelected);
      onSetSelect(id, type, !isSelected);
    }
    if (onSetCart && !purchase) {
      if (inCart) return redirect(BASKET_ROUTE_PATH);
      setInCart(!inCart);
      onSetCart({ id, type }, !inCart);
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
      {like !== null && <LikeButton id={id} type={type} like={like} />}
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
                <ButtonPrimary
                  tid="OTHER.CANCEL"
                  onClick={() => setVisible(false)}
                />
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
