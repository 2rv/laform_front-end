import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import {
  CardPattern,
  CardSewingGoods,
  CardMasterClasses,
  CardArticles,
} from '../card';

export function BasicCardList(props) {
  const { items } = props;
  if (!items) return null;
  return (
    <Container>
      {items.map((data, index) => {
        const CardItem = cardType(data?.type);
        return <CardItem key={index} data={data} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(6)};
  @media screen and (max-width: 1170px) {
    gap: ${spacing(3)};
  }
`;

function cardType(type) {
  switch (type) {
    case 0:
      return CardSewingGoods;
    case 1:
      return CardMasterClasses;
    case 2:
      return CardArticles;
    case 3:
      return CardPattern;
    case 4:
      return CardPattern;
    case 5:
      return CardPattern;
    default:
      return () => null;
  }
}
