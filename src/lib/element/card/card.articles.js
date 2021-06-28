import styled from 'styled-components';
import { ReactComponent as LikeIcon } from 'src/asset/svg/favorite-icon.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { ButtonBasic } from '../button';
import { CardDescription } from './card.description';

export function CardArticles(props) {
  const {
    id,
    backgroundImage = null,
    name = 'неуказано',
    liked = false,
    createDate = 'Изменить на что то',
  } = props;

  return (
    <Container>
      <CardImage backgroundImage={backgroundImage} />
      <Content>
        <CardDescription name={name} />
        <LikeButton like={liked} icon={LikeIcon} />
      </Content>
      <TextSecondary tid={createDate} />
    </Container>
  );
}
const LikeButton = styled(ButtonBasic)`
  fill: ${({ like }) => (like ? '#ffffff' : THEME_COLOR.SECONDARY_DARK)};
  background-color: ${({ like }) =>
    like ? THEME_COLOR.SECONDARY : THEME_COLOR.GRAY};
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
