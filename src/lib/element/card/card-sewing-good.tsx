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
  RemoveButton,
} from './card.components';
import { CartModalButton } from '../../common/cart-modal-button';
import { SEWING_GOODS_CREATE_ROUTE_PATH } from 'src/core/sewing-goods-create';

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
    onRemove,
    onRemoveLike,
    isCount,
    isLength,
    isCreateList,
    optionType,
  } = props;

  return (
    <Container>
      <CardImage
        path={
          isCreateList
            ? SEWING_GOODS_CREATE_ROUTE_PATH
            : SEWING_GOODS_PRODUCT_ROUTE_PATH
        }
        pathConfig={{ params: { id: id } }}
        image={image}
        modifier={modifier}
        deleted={deleted}
        discount={discount}
        isCreateList={isCreateList}
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
          optionType={optionType}
        />
        {(typeof like === 'boolean' || admin) && (
          <ActionCase>
            <LikeButton
              id={id}
              type={type}
              like={like}
              onRemoveLike={onRemoveLike}
            />
            <DeleteButton
              id={id}
              type={type}
              admin={admin}
              onDelete={onDelete}
              deleted={deleted}
            />
            <RemoveButton id={id} onRemove={onRemove} />
          </ActionCase>
        )}
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
