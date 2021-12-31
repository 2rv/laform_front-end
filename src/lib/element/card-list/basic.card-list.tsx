import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import {
  CardMasterClass,
  CardPattern,
  CardSewingGood,
  CardArticle,
  CardSkeleton,
  CardArticleType,
  CardSewingGoodType,
  CardPatternType,
  CardMasterClassType,
  CardMultiType,
} from '../card';
import { BasicCardListTypeProps } from './card-list.type';
import { TextSecondary } from '../text';

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
    isLoading,
    isPagination,
    paginateCount = 3,
  } = props;

  if (!isLoading && (!items || !Boolean(items.length))) {
    return <TextSecondary tid={emptyText} tvalue={emptyTvalue} />;
  }

  return (
    <Container>
      {isLoading
        ? [...Array(paginateCount).keys()].map((_, i) => (
            <CardSkeleton key={i} />
          ))
        : items.map((card, index) => {
            if (isMasterClass(card)) {
              return (
                <CardMasterClass
                  key={card?.id || index}
                  onSelect={onSelect}
                  onDelete={onDelete}
                  onRemove={onRemove}
                  isCreateList={isCreateList}
                  admin={admin}
                  {...card}
                />
              );
            }
            if (isPattern(card)) {
              return (
                <CardPattern
                  key={card?.id || index}
                  onSelect={onSelect}
                  onDelete={onDelete}
                  onRemove={onRemove}
                  isCreateList={isCreateList}
                  admin={admin}
                  {...card}
                />
              );
            }
            if (isSewing(card)) {
              return (
                <CardSewingGood
                  key={card?.id || index}
                  onSelect={onSelect}
                  onDelete={onDelete}
                  onRemove={onRemove}
                  isCreateList={isCreateList}
                  admin={admin}
                  {...card}
                />
              );
            }
            if (isPost(card)) {
              return (
                <CardArticle
                  key={card?.id || index}
                  onSelect={onSelect}
                  onDelete={onDelete}
                  onRemove={onRemove}
                  isCreateList={isCreateList}
                  admin={admin}
                  {...card}
                />
              );
            }
            return null;
          })}

      {isPagination &&
        [...Array(paginateCount).keys()].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
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

export function isMasterClass(
  card: CardMultiType,
): card is CardMasterClassType {
  return (card as CardMasterClassType).type === 0;
}
export function isPattern(card: CardMultiType): card is CardPatternType {
  return (
    (card as CardPatternType).type === 1 || (card as CardPatternType).type === 2
  );
}
export function isSewing(card: CardMultiType): card is CardSewingGoodType {
  return (card as CardSewingGoodType).type === 3;
}
export function isPost(card: CardMultiType): card is CardArticleType {
  return (card as CardArticleType).type === 4;
}
