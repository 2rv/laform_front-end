import styled, { css } from 'styled-components';
import { useState } from 'react';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { BASKET_ROUTE_PATH } from '../basket';
import { redirect } from '../../main/navigation';
import { ButtonPrimary } from '../../lib/element/button';
import { LikeButton } from '../block-like';

export function ProductActions(props) {
  const { id, type, like, cart, onSetCart } = props;

  if (!id || type === false || type === null || type === undefined) return null;

  const [inCart, setInCart] = useState(cart);

  const onSelectCard = () => {
    if (inCart) return redirect(BASKET_ROUTE_PATH);
    onSetCart({ id, type });
    setInCart(!inCart);
  };

  return (
    <Container>
      <Button
        onClick={onSelectCard}
        isActive={inCart}
        tid={inCart ? 'BASKET.GO_TO_BASKET' : 'BASKET.ADD_TO_BASKET'}
      />
      {like !== null && <LikeButton id={id} type={type} like={like} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
const Button = styled(ButtonPrimary)`
  ${(p) =>
    p.isActive &&
    css`
      background-color: ${THEME_COLOR.DARK_GRAY};
    `}
`;
