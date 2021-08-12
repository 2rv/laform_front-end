import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { Price } from '../price';
import { ButtonPrimary, IconButton } from '../button';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { ReactComponent as LikeIcon } from '../../../asset/svg/favorite-icon.svg';
import { useState } from 'react';

export function CardArticles(props) {
  const { id, image = null, name = null, date, like = false } = props.data;
  const [isLiked, setLike] = useState(like);
  const onLike = () => {
    setLike(!isLiked);
  };
  return (
    <Container>
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 360px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
`;
const LikeButton = styled(IconButton)`
  fill: ${(p) => (p.like ? THEME_COLOR.WHITE : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${(p) =>
    p.like ? THEME_COLOR.DARK_GRAY : THEME_COLOR.GRAY};
`;
const CardName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
const Date = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.LIGHT};
  line-height: 1.5;
`;
