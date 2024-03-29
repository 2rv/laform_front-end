import styled from 'styled-components';
import { spacing } from '../../theme';
import { CardImage } from './card.image';
import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../../../core/master-class-product';
import { CardMasterClassType } from './card.type';
import {
  CardName,
  CardPrice,
  DeleteButton,
  LikeButton,
  RemoveButton,
  SelectButton,
} from './card.components';
import { CartModalButton } from 'src/lib/common/cart-modal-button';
import { MASTER_CLASS_CREATE_ROUTE_PATH } from 'src/core/master-class-create';

export function CardMasterClass(props: CardMasterClassType) {
  const {
    id,
    type,
    image,
    name,
    modifier,
    discount,
    price,
    like,
    deleted,
    admin,
    onSelect,
    onDelete,
    onRemove,
    onRemoveLike,
    isCreateList,
  } = props;

  return (
    <Container>
      <CardImage
        path={
          isCreateList
            ? MASTER_CLASS_CREATE_ROUTE_PATH
            : MASTER_CLASS_PRODUCT_ROUTE_PATH
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
          thisIsCart={Boolean(onSelect)}
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
