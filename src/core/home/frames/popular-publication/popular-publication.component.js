import styled from 'styled-components';
import { setLinkRedirect } from '../../../../main/navigation';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';
import { CardImage } from 'src/lib/element/card';
import { ReactComponent as FavoriteIcon } from 'src/asset/svg/favorite-icon.svg';
import { ButtonBasic } from 'src/lib/element/button';
export function PopularPublicationComponent({ items }) {
  return (
    <IndentLayout>
      <FlexContainer>
        <TitleText tid="HOME.POPULAR_MASTER.TITLE" />
        <ViewAllLink tid="HOME.POPULAR_GODS.VIEW_ALL" path={'/'} />
      </FlexContainer>
      <List>
        {items.map(
          ({
            backgroundImage,
            id,
            name,
            isFavorite = false,
            data = '1 неделю назад',
          }) => (
            <Container key={id}>
              <CardImage backgroundImage={backgroundImage} />
              <CardContainer>
                <PubName>{name}</PubName>
                <FavoriteButton isFavorite={isFavorite} icon={FavoriteIcon} />
              </CardContainer>
              <DataText>{data}</DataText>
            </Container>
          ),
        )}
      </List>
    </IndentLayout>
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
  flex-grow: 1;
  word-break: break-word;
`;
const CardContainer = styled.div`
  display: flex;
  gap: ${spacing(6)};
`;
const FlexContainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  min-width: 260px;
  gap: ${spacing(3)};
  min-height: max-content;
`;
const TitleText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const ViewAllLink = styled(LinkSecondary)`
  margin-left: auto;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
  @media screen and (max-width: 720px) {
    display: flex;
    gap: ${spacing(2)};
    overflow-x: scroll;
    height: max-content;
    padding: ${spacing(1)};
  }
`;
