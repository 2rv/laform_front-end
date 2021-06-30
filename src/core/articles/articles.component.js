import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { CardArticles } from 'src/lib/element/card';
import { BasicCardList } from 'src/lib/element/card-list';
import { ArticlesFormFilterContainer } from './frames';
import {
  ARTICLES_FILTER_CATEGORY_OPTIONS,
  ARTICLES_FILTER_TAGS_OPTIONS,
} from './articles.constant';
import {
  ARTICLES_FORM_FILTER_FIELD_NAME,
  ARTICLES_FILTER_FIELD_NAME,
} from './articles.type';

export function ArticlesComponent(props) {
  const { items } = props;
  const articlesFormFilterGetInitialValue = () => {
    const rawData = false; //getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [ARTICLES_FILTER_FIELD_NAME.CATEGORY]:
          ARTICLES_FILTER_CATEGORY_OPTIONS[0].id,
        [ARTICLES_FILTER_FIELD_NAME.TAGS]: ARTICLES_FILTER_TAGS_OPTIONS[0].id,
      };
    }
  };
  return (
    <Container>
      <Content>
        <IndentLayout>
          <Title tid="ARTICLES.ARTICLES.TITLE" />
          <ArticlesFormFilterContainer
            categoryOptions={ARTICLES_FILTER_CATEGORY_OPTIONS}
            tagsOptions={ARTICLES_FILTER_TAGS_OPTIONS}
            initialValue={articlesFormFilterGetInitialValue()}
            fieldName={ARTICLES_FORM_FILTER_FIELD_NAME}
          />
          <BasicCardList items={items} ItemComponent={CardArticles} />
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
