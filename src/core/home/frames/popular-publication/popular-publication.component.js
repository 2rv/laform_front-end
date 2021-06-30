import styled from 'styled-components';
import { setLinkRedirect } from '../../../../main/navigation';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';
import { CardImage } from 'src/lib/element/card';
import { ReactComponent as FavoriteIcon } from 'src/asset/svg/favorite-icon.svg';
import { ButtonBasic } from 'src/lib/element/button';
import { PopularPublicationItemComponent } from './popular-publication-item.component';

export function PopularPublicationComponent({ items }) {
  return (
    <IndentLayout>
      <FlexContainer>
        <TitleText tid="HOME.POPULAR_MASTER.TITLE" />
        <ViewAllLink tid="HOME.POPULAR_GODS.VIEW_ALL" path={'/'} />
      </FlexContainer>
      <List>
        {items.map((item) => (
          <PopularPublicationItemComponent {...item} />
        ))}
      </List>
    </IndentLayout>
  );
}
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
  height: max-content;
  @media screen and (max-width: 1259px) {
    padding: ${spacing(0.5)};
    display: flex;
    overflow-x: scroll;
    box-shadow: 26px 0px 15px -10px rgba(131, 131, 131, 0.5);
  }
`;
