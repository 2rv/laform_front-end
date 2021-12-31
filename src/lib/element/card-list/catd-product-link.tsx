import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import {
  CardPattern,
  CardSewingGood,
  CardMasterClass,
  CardArticle,
} from '../card';
import { CardProductLinkProps } from './card-list.type';

export function CardProductLink(props: CardProductLinkProps) {
  const { products, onRemove, admin } = props;

  return (
    <Container>
      {products.map((item) => {
        if (item.masterClassId) {
          return (
            <CardMasterClass
              {...item.masterClassId}
              onRemove={onRemove}
              admin={admin}
            />
          );
        }
        if (item.patternProductId) {
          return (
            <CardPattern
              {...item.patternProductId}
              onRemove={onRemove}
              admin={admin}
            />
          );
        }
        if (item.sewingProductId) {
          return (
            <CardSewingGood
              {...item.sewingProductId}
              onRemove={onRemove}
              admin={admin}
            />
          );
        }
        if (item.postId) {
          return (
            <CardArticle {...item.postId} onRemove={onRemove} admin={admin} />
          );
        }
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
