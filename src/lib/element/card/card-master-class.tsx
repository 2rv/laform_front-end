import styled from 'styled-components';
import { spacing } from '../../theme';
import { CardImage } from './card.image';
import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../../../core/master-class-product';
import { CardMasterClassTypeProps } from './card.type';
import {
  CardName,
  CardPrice,
  CartButton,
  DeleteButton,
  LikeButton,
  SelectButton,
} from './card.components';

export function CardMasterClass(props: CardMasterClassTypeProps) {
  const {
    id,
    type,
    image,
    name,
    modifier,
    discount,
    price,
    cart,
    like,
    admin,
    onSelect,
    onDelete,
    onCart,
    programs,
  } = props;

  return (
    <Container>
      <CardImage
        path={MASTER_CLASS_PRODUCT_ROUTE_PATH}
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
          programs={programs}
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
