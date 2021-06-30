import styled from 'styled-components';
import { setLinkRedirect } from '../../../../main/navigation';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';
import { BasicCard as ItemCard } from 'src/lib/element/card';

export function PopularMasterComponent({ items }) {
  return (
    <IndentLayout>
      <FlexContainer>
        <TitleText tid="HOME.POPULAR_MASTER.TITLE" />
        <ViewAllLink tid="HOME.POPULAR_GODS.VIEW_ALL" path={'/'} />
      </FlexContainer>
      <List>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            actions={['OTHER.PURCHASED', 'OTHER.BUY']}
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
    overflow-x: auto;
    height: max-content;
    box-shadow: 26px 0px 15px -10px rgba(131, 131, 131, 0.5);
  }
`;
