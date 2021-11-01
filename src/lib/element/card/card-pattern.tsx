import styled from 'styled-components';
import { spacing } from '../../theme';
import { CardImage } from './card.image';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../../../core/patterns-product';
import { CardPatternType } from './card.type';
import {
  CardPrice,
  CardName,
  ComplexityDots,
  DeleteButton,
  LikeButton,
  SelectButton,
} from './card.components';
import { CartModalButton } from '../../common/cart-modal-button';
import { CREATE_PATTERN_DYNAMIC_ROUTE_PATH } from 'src/core/pattern-create';

export function CardPattern(props: CardPatternType) {
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
    complexity,
    sizes,
    onSelect,
    onDelete,
    isCount,
    isCreateList,
  } = props;

  return (
    <Container>
      <CardImage
        path={
          isCreateList
            ? CREATE_PATTERN_DYNAMIC_ROUTE_PATH
            : PATTERNS_PRODUCT_ROUTE_PATH
        }
        pathConfig={{ dynamic: true, params: { id: id } }}
        image={image}
        modifier={modifier}
        deleted={deleted}
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
        <CartModalButton
          id={id}
          type={type}
          price={price}
          discount={discount}
          count={count}
          sizes={sizes}
          isCount={isCount}
          thisIsCart={Boolean(onSelect)}
        />
        {(like || admin) && (
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
  align-items: center;
  gap: ${spacing(2)};
`;
