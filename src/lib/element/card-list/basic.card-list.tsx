import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import {
  CardPattern,
  CardSewingGood,
  CardMasterClass,
  CardArticle,
} from '../card';
import { BasicCardListTypeProps } from './card-list.type';
import { TextSecondary } from '../text';
import { CardListSkeleton } from '.';

export function BasicCardList(props: BasicCardListTypeProps) {
  const {
    items,
    onSelect,
    onDelete,
    onRemove,
    admin,
    emptyText,
    emptyTvalue,
    isCreateList,
    pending,
  } = props;

  if (pending) {
    return <CardListSkeleton quantity={3} />;
  }

  if (!items || !Boolean(items.length)) {
    return <TextSecondary tid={emptyText} tvalue={emptyTvalue} />;
  }

  return (
    <Container>
      {items.map((data: any, index) => {
        const CardItem = isCardType(data.type);
        return (
          <CardItem
            isCreateList={isCreateList}
            key={data?.id || index}
            {...data}
            onSelect={onSelect}
            onDelete={onDelete}
            onRemove={onRemove}
            admin={admin}
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

const isCardType = (type: 0 | 1 | 2 | 3 | 4) => {
  switch (type) {
    case 0:
      return CardMasterClass;
    case 1:
      return CardPattern;
    case 2:
      return CardPattern;
    case 3:
      return CardSewingGood;
    case 4:
      return CardArticle;
    default:
      return () => null;
  }
};
