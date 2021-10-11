import styled from 'styled-components';
import { spacing } from '../../theme';
import { CardImage } from './card.image';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../../../core/patterns-product';
import { CardPatternType } from './card.type';
import {
  CardPrice,
  CartButton,
  CardName,
  ComplexityDots,
  DeleteButton,
  LikeButton,
  SelectButton,
} from './card.components';
import { CartButtonWithParams } from './card.cart-button';

export function CardPattern(props: CardPatternType) {
  const {
    id,
    type,
    name,
    image,
    complexity,
    modifier,
    price,
    discount,
    like,
    onCart,
    onSelect,
    onDelete,
    admin,
    options,
  } = props;

  return (
    <Container>
      <CardImage
        path={PATTERNS_PRODUCT_ROUTE_PATH}
        pathConfig={{ dynamic: true, params: { id: id } }}
        image={image}
        modifier={modifier}
        discount={discount}
      />
      <Content>
        <CardName tid={name} />
        <ActionCase>
          <CardPrice price={price} discount={discount} />
          <ComplexityDots complexity={complexity} />
        </ActionCase>
      </Content>
      <ActionCase>
        <SelectButton id={id} type={type} onSelect={onSelect} />
        {options?.length === 0 ? (
          <CartButton id={id} type={type} onCart={onCart} />
        ) : (
          <CartButtonWithParams
            id={id}
            type={type}
            onCart={onCart}
            options={options}
          />
        )}

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
  align-items: center;
  gap: ${spacing(2)};
`;
