import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { ButtonPrimary, IconButton } from '../button';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { useState } from 'react';
import { LinkPrimary } from '../link';
import { ARTICLE_PAGE_ROUTE_PATH } from '../../../core/article-page';
import moment from 'moment';
import { LikeButton } from '../../../core/block-like';

export function CardArticles(props) {
  const { id, image, name, bestseller, date, createdDate, like, type } =
    props.data;
  const [isLiked, setLike] = useState(like);
  const onLike = () => {
    setLike(!isLiked);
  };
  return (
    <Container>
      <CardImage
        path={ARTICLE_PAGE_ROUTE_PATH}
        pathConfig={{ query: { id: id } }}
        image={image}
        bestseller={bestseller}
      />
      <Content>
        <Column>
          <CardName tid={name} />
          <Date
            tid={moment(createdDate).locale('ru').startOf('hour').fromNow()}
          />
        </Column>
        {like === null ? null : <LikeButton id={id} type={type} like={like} />}
      </Content>
    </Container>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
  flex: 1;
  justify-content: space-between;
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
