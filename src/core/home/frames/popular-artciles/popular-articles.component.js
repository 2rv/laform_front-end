import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { IndentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { LinkSecondary } from 'src/lib/element/link';
import { BasicCardList } from 'src/lib/element/card-list';
import { CardArticles } from 'src/lib/element/card';

export function PopularArticlesComponent({ items }) {
  return (
    <IndentLayout>
      <FlexContainer>
        <Title tid="HOME.POPULAR_ARTICLES_TITLE" />
        <ViewAllLink tid="HOME.VIEW_ALL" path={'/'} />
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
