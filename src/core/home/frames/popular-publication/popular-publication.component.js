import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';
import { BasicCardList } from '../../../../lib/element/card-list';
import { CardArticles } from 'src/lib/element/card';

export function PopularPublicationComponent({ items }) {
  return (
    <IndentLayout>
      <FlexContainer>
        <Title tid="HOME.POPULAR_MASTER.TITLE" />
        <ViewAllLink tid="HOME.POPULAR_GODS.VIEW_ALL" path={'/'} />
      </FlexContainer>
      <BasicCardList ItemComponent={CardArticles} items={items} />
    </IndentLayout>
  );
}
const FlexContainer = styled.div`
  display: flex;
`;
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const ViewAllLink = styled(LinkSecondary)`
  margin-left: auto;
`;
