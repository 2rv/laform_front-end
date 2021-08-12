import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { CardPattern } from '../card';

export function BasicCardList({ items, type }) {
  const CardItem = cardType(type);
  return (
    <Container>
      {items.map((data, index) => (
        <CardItem key={index} data={data} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: ${spacing(5)};
`;

function cardType(type) {
  switch (type) {
    case 'pattern':
      return CardPattern;
    default:
      return () => null;
  }
}
