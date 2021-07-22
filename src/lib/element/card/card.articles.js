import styled from 'styled-components';
import { ReactComponent as LikeIcon } from 'src/asset/svg/favorite-icon.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { ButtonBasic } from '../button';
import { CardDescription } from './card.description';
import { IndentLayout } from '../layout';

export function CardArticles(props) {
  const {
    ID,
    TITLE = 'НЕУКАЗАН',
    LIKED = false,
    IMAGE = null,
    DATE = 'вчера',
  } = props;

  return (
    <Container>
      <CardImage backgroundImage={IMAGE} />
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

const CardName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;

const Date = styled(TextSecondary)`
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
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
