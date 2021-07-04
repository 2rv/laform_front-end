import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { CardArticles } from 'src/lib/element/card';
import { BasicCardList } from 'src/lib/element/card-list';
import { ArticlesFormFilterContainer } from './frames';

export function ArticlesComponent(props) {
  const {
    articlesData,
    categoryOptions,
    tagsOptions,
    initialValue,
    fieldName,
  } = props;

  return (
    <Container>
      <Content>
        <IndentLayout>
          <Title tid="ARTICLES.ARTICLES.TITLE" />
          <ArticlesFormFilterContainer
            categoryOptions={categoryOptions}
            tagsOptions={tagsOptions}
            initialValue={initialValue}
            fieldName={fieldName}
          />
          <BasicCardList items={articlesData} ItemComponent={CardArticles} />
        </IndentLayout>
      </Content>
    </Container>
  );
}
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
