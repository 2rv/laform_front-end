import styled from 'styled-components';
import { setLinkRedirect } from '../../../../main/navigation';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';
import { PopularGodsItemComponent } from './popular-gods-item.component';
import { BasicCard as ItemCard } from 'src/lib/element/card';

export function PopularGodsComponent({ items }) {
  return (
    <IndentLayout>
      <FlexContainer>
        <TitleText tid="HOME.POPULAR_GODS.TITLE" />
        <ViewAllLink tid="HOME.POPULAR_GODS.VIEW_ALL" path={'/'} />
      </FlexContainer>
      <List>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            actions={['OTHER.SELECTED', 'OTHER.SELECT']}
            {...item}
          />
        ))}
      </List>
    </IndentLayout>
  );
}

const FlexContainer = styled.div`
  display: flex;
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
  @media screen and (max-width: 1259px) {
    display: flex;
    gap: ${spacing(2)};
    overflow-x: scroll;
    height: max-content;
    padding: ${spacing(1)};
  }
`;
