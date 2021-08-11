import styled from 'styled-components';
import { ReactComponent as LikeIcon } from 'src/asset/svg/favorite-icon.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { ButtonBasic } from '../button';
import { CardDescription } from './card.description';
import { IndentLayout } from '../layout';
import { ReactComponent as ArrowRight } from '../../../asset/svg/arrow-home-right.svg';

export function CardArticles(props) {
  const {
    ID,
    TITLE = 'НЕУКАЗАН',
    LIKED = false,
    IMAGE = null,
    DATE = 'вчера',
    showSlideLeft,
    showSlideRight,
    prev,
    next,
  } = props;

  return (
    <Container>
      <ImageContainer>
        <CardImage backgroundImage={IMAGE} />
        {showSlideLeft ? <Action onClick={prev} icon={ArrowRight} /> : null}
        {showSlideRight ? (
          <Action onClick={next} direction="right" icon={ArrowRight} />
        ) : null}
      </ImageContainer>
      <IndentLayout type="TEXT_SMALL">
        <Content>
          <CardName>{TITLE}</CardName>
          <LikeButton like={LIKED} icon={LikeIcon} />
        </Content>
        <Date tid={DATE} />
      </IndentLayout>
    </Container>
  );
}

const ImageContainer = styled.div`
  position: relative;
`;

const CardName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
  @media screen and (max-width: 600px) {
    font-size: ${THEME_SIZE.FONT.DEFAULT};
  }
`;

const Date = styled(TextSecondary)`
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
  @media screen and (max-width: 600px) {
    font-size: ${THEME_SIZE.FONT.MEDIUM};
  }
`;

const LikeButton = styled(ButtonBasic)`
  fill: ${({ like }) => (like ? '#ffffff' : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${({ like }) =>
    like ? THEME_COLOR.SECONDARY : THEME_COLOR.GRAY};
  width: 46px;
  height: 46px;
`;

const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  min-width: 260px;
  gap: ${spacing(3)};
`;

const Action = styled(ButtonBasic)`
  padding: 0;
  z-index: 1;
  background: none;
  position: absolute;
  top: 45%;
  ${({ direction = 'left' }) => `${direction}: -15px`};
  ${({ direction = 'left' }) =>
    direction === 'left' ? `transform: rotate(180deg);` : ''};
`;
