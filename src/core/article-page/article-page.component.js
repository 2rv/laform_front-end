import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { BasicCardList } from '../../lib/element/card-list';
import {
  ArticlePageCommentComponent,
  ArticlesPageTablesComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { TEST_ARTICLES_ITEMS } from './article-page.constant';
import { CardArticles } from '../../lib/element/card';
import { LinkSecondary } from 'src/lib/element/link';

export function ArticlePageComponent(props) {
  const { name, date, tables, description, comments } = props;

  return (
    <SectionLayout>
      <TitleCase>
        <Title tid={name} />
        <Date tid={date} />
      </TitleCase>
      <SectionLayout type="SMALL">
        <ArticlesPageTablesComponent items={tables} />
        <Description>{description}</Description>
      </SectionLayout>

      <ArticlePageCommentComponent items={comments} />

      <SectionLayout type="SMALL">
        <TitleCase>
          <TitlePrimary tid={'Лучшие публикации'} />
          <LinkSecondary tid="HOME.VIEW_ALL" path={'/'} />
        </TitleCase>
        <BasicCardList
          items={TEST_ARTICLES_ITEMS}
          ItemComponent={CardArticles}
        />
      </SectionLayout>
    </SectionLayout>
  );
}
const TitleCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const Description = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
`;
const Date = styled(TextSecondary)`
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
`;
const Title = styled(TitlePrimary)`
  font-size: 28px;
`;
