import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../text';
import { CardImage } from '.';
import { ReactComponent as FavoriteIcon } from 'src/asset/svg/favorite-icon.svg';
import { ButtonBasic } from 'src/lib/element/button';

export function PublicationItemComponent(props) {
  const {
    backgroundImage,
    id,
    name,
    isFavorite = false,
    data = '1 неделю назад',
  } = props;

  return (
    <Container key={id}>
      <CardImage backgroundImage={backgroundImage} />
      <CardContainer>
        <PubName>{name}</PubName>
        <FavoriteButton isFavorite={isFavorite} icon={FavoriteIcon} />
      </CardContainer>
      <FlexContainer>
        <DataText>{data}</DataText>
      </FlexContainer>
    </Container>
  );
}
const DataText = styled(TextSecondary)``;
const FavoriteButton = styled(ButtonBasic)`
  background-color: ${({ isFavorite }) =>
    isFavorite ? THEME_COLOR.SECONDARY : THEME_COLOR.GRAY};
`;
const PubName = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  height: max-content;
  word-break: break-word;
`;
const CardContainer = styled.div`
  display: flex;
  gap: ${spacing(3)};
  height: 100%;
`;
const FlexContainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  display: grid;
  width: 360px;
  min-width: 260px;
  gap: ${spacing(3)};
  height: max-content;
`;