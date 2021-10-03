import styled from 'styled-components';
import { spacing } from '../../theme';
import { CardImage } from './card.image';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../../../core/sewing-goods-product';
import { CardSewingGoodTypeProps } from './card.type';
import {
  CardPrice,
  CardName,
  DeleteButton,
  LikeButton,
  SelectButton,
} from './card.components';
import { CartButton } from './card.cart-button';

export function CardSewingGood(props: CardSewingGoodTypeProps) {
  const {
    id,
    type,
    image,
    name,
    modifier,
    price,
    discount,
    cart,
    like,
    onCart,
    onSelect,
    onDelete,
    admin,
    sizes,
    colors,
  } = props;
  return (
    <Container>
      <CardImage
        path={SEWING_GOODS_PRODUCT_ROUTE_PATH}
        pathConfig={{ dynamic: true, params: { id: id } }}
        image={image}
        modifier={modifier}
        discount={discount}
      />
      <Content>
        <CardName tid={name} />
        <CardPrice price={price} discount={discount} />
      </Content>
      <ActionCase>
        <SelectButton id={id} type={type} onSelect={onSelect} />
        <CartButton
          id={id}
          type={type}
          cart={cart}
          onCart={onCart}
          sizes={sizes}
          colors={colors}
        />
        <ActionCase>
          <LikeButton id={id} type={type} like={like} />
          <DeleteButton id={id} type={type} admin={admin} onDelete={onDelete} />
        </ActionCase>
      </ActionCase>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  position: relative;
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: ${spacing(1)};
`;
const ActionCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: center;
`;
