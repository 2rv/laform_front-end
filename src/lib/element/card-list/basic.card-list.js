import styled from 'styled-components';
import { spacing } from '../../theme';
import { BasicCard } from '../card';
import { TextSecondary } from '../text';
import { Spinner } from '../spinner';

export function BasicCardList(props) {
  const {
    items,
    isPending = false,
    actions,
    ItemComponent,
  } = props;

  const Item = ItemComponent || BasicCard;

  if (isPending) {
    return <Spinner />;
  }

  if (items.length === 0) {
    return <TextSecondary tid="Список Мастер-классов пуст" />;
  }

  return (
    <Container>
      {items?.map((item, index) => (
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
