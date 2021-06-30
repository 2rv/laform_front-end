import styled from 'styled-components';
import { spacing } from '../../theme';
import { BasicCard } from '../card';

export function BasicCardList({ items, actions, ItemComponent }) {
  const Item = ItemComponent || BasicCard;
  return (
    <Container>
      {items.map((item, index) => (
        <Item key={item?.id || index} actions={actions} {...item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
  /* @media screen and (min-width: 721px) and (max-width: 1259px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }  */
`;
