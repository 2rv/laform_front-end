import styled from 'styled-components';
import { spacing } from '../../theme';
import { CardImage } from './card.image';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../../../core/sewing-goods-product';
import { CardSewingGoodType } from './card.type';
import {
  CardPrice,
  CardName,
  DeleteButton,
  LikeButton,
  SelectButton,
} from './card.components';
import { CartModalButton } from '../../common/cart-modal-button';

export function CardSewingGood(props: CardSewingGoodType) {
  const {
    id,
    like,
    deleted,
    admin,
    type,
    image,
    name,
    modifier,
    price,
    discount,
    count,
    length,
    options,
    colors,
    sizes,
    onSelect,
    onDelete,
    isCount,
    isLength,
  } = props;

  return (
    <Container>
      <CardImage
        path={SEWING_GOODS_PRODUCT_ROUTE_PATH}
        pathConfig={{ dynamic: true, params: { id: id } }}
        image={image}
        modifier={modifier}
        deleted={deleted}
        discount={discount}
      />
      <Content>
        <CardName tid={name} />
        <CardPrice price={price} discount={discount} />
      </Content>
      <ActionCase>
        <SelectButton id={id} type={type} onSelect={onSelect} />
        <CartModalButton
          id={id}
          type={type}
          price={price}
          discount={discount}
          count={count}
          length={length}
          thisIsCart={Boolean(onSelect)}
          options={options}
          colors={colors}
          sizes={sizes}
          isCount={isCount}
          isLength={isLength}
        />
        <ActionCase>
          <LikeButton id={id} type={type} like={like} />
          {Boolean(deleted === false) && (
            <DeleteButton
              id={id}
              type={type}
              admin={admin}
              onDelete={onDelete}
            />
          )}
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
  justify-content: space-between;
  gap: ${spacing(1)};
`;
const ActionCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: center;
`;
