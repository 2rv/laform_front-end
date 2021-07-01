import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { BasicCardList } from '../../lib/element/card-list';
import {
  ArticlePageCommentComponent,
  ArticlesPageTablesComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { TEST_ARTICLES_ITEMS } from './article-page.constant';
import { CardArticles } from '../../lib/element/card';

export function ArticlePageComponent(props) {
  const { name, date, tables, description, comments } = props;

  return (
    <Container>
      <PaddingLayout>
        <IndentLayout type="MEDIUM">
          <IndentLayout>
            <TitleContainer>
              <Title tid={name} />
              <Date tid={date} />
            </TitleContainer>
            <ArticlesPageTablesComponent items={tables} />
            <Description>{description}</Description>
          </IndentLayout>
          <ArticlePageCommentComponent items={comments} />
          <IndentLayout>
            <TitlePrimary tid={'Лучшие публикации'} />
            <BasicCardList
              items={TEST_ARTICLES_ITEMS}
              ItemComponent={CardArticles}
            />
          </IndentLayout>
        </IndentLayout>
      </PaddingLayout>
    </Container>
  );
}
const Description = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 28px;
`;
const Date = styled(TextSecondary)`
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
`;
const Title = styled(TitlePrimary)`
  font-size: 28px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing(12)} ${spacing(6)};
`;
const PaddingLayout = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
