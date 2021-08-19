import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { Price } from '../price';
import { ButtonPrimary, IconButton } from '../button';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { ReactComponent as LikeIcon } from '../../../asset/svg/favorite-icon.svg';
import { useState } from 'react';
import { LinkPrimary } from '../link';
import { ARTICLE_PAGE_ROUTE_PATH } from '../../../core/article-page';

export function CardArticles(props) {
  const { id, image = null, name = null, date, like = false } = props.data;
  const [isLiked, setLike] = useState(like);
  const onLike = () => {
    setLike(!isLiked);
  };
  return (
    <Container
      path={ARTICLE_PAGE_ROUTE_PATH}
      pathConfig={{ query: { id: id } }}
    >
      <CardImage image={image} />
      <Content>
        <Column>
          <CardName tid={name} />
          <Date tid={date} />
        </Column>
        <LikeButton onClick={onLike} like={isLiked}>
          <LikeIcon />
        </LikeButton>
      </Content>
    </Container>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const Container = styled(LinkPrimary)`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 360px;
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
  flex: 1;
  justify-content: space-between;
`;
const LikeButton = styled(IconButton)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${(p) =>
    p.like ? THEME_COLOR.DARK_GRAY : THEME_COLOR.GRAY};
`;
const Date = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.LIGHT};
  line-height: 1.5;
`;
const CardName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`;
