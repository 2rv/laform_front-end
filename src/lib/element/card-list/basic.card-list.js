import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import {
  CardPattern,
  CardSewingGoods,
  CardMasterClasses,
  CardArticles,
} from '../card';

export function BasicCardList(props) {
  const {
    items,
    onSetCart,
    onSetLike,
    onSetSelect,
    onDeleteProduct,
    isAdmin = false,
  } = props;

  if (!items) return null;

  return (
    <Container>
      {items.map((data, index) => {
        const CardItem = cardType(data?.type);
        return (
          <CardItem
            key={index}
            data={data}
            onSetCart={onSetCart}
            onSetLike={onSetLike}
            onSetSelect={onSetSelect}
            onDeleteProduct={onDeleteProduct}
            isAdmin={isAdmin}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    gap: ${spacing(3)};
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 720px) {
    gap: ${spacing(3)};
    grid-template-columns: repeat(1, 1fr);
  }
`;

function cardType(type) {
  switch (type) {
    case 0:
      return CardMasterClasses;
    case 1:
      return CardPattern;
    case 2:
      return CardPattern;
    case 3:
      return CardSewingGoods;
    case 4:
      return CardArticles;
    default:
      return () => null;
  }
}
