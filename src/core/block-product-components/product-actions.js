import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { BASKET_ROUTE_PATH, BASKET_STORE_NAME } from '../basket';
import { redirect } from '../../main/navigation';
import { ButtonPrimary } from '../../lib/element/button';
import { LikeButton } from 'src/lib/element/card/card.components';
import { isRequestPending } from 'src/main/store/store.service';

export function ProductActions(props) {
  const { id, type = false, like, size, color, onCart, program } = props;
  if (!id || type === false || type === null || type === undefined) return null;

  const { bascketState, basketAction } = useSelector((state) => ({
    bascketState: state[BASKET_STORE_NAME].basket,
    basketAction: state[BASKET_STORE_NAME].basketAction,
  }));
  const isPending = isRequestPending(basketAction);

  const [isCart, setCart] = useState(false);

  useEffect(() => {
    const result = bascketState.find((item) => {
      if (item.id === id) {
        if (type === 0) return item.program === program.id;
        if (type === 1 || type === 2) return item.size === size.id;
        if (type === 3) return item.size === size.id && item.color === color.id;
      }
    });
    setCart(Boolean(result));
  }, [size, color, program, bascketState]);

  const addToCart = () => {
    if (isCart) return redirect(BASKET_ROUTE_PATH);
    onCart();
  };

  const disabled = () => {
    if (type === 0 && !program.id) return true;
    if ((type === 1 || type === 2) && !size.id) return true;
    if (type === 3 && (!size.id || !color.id)) return true;
    if (isPending) return true;
    return false;
  };

  return (
    <Container>
      <Button
        disabled={disabled()}
        tid={
          isPending
            ? 'Подождите'
            : isCart
            ? 'BASKET.GO_TO_BASKET'
            : 'BASKET.ADD_TO_BASKET'
        }
        active={isCart}
        onClick={addToCart}
      />
      <LikeButton id={id} type={type} like={like} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
const Button = styled(ButtonPrimary)`
  min-width: max-content;
  ${(p) =>
    p.active &&
    css`
      background-color: ${THEME_COLOR.DARK_GRAY};
    `}
`;
