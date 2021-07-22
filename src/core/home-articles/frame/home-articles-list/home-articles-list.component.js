import React from 'react';
import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { IndentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { LinkSecondary } from 'src/lib/element/link';
import { BasicCardList } from 'src/lib/element/card-list';
import { CardArticles } from 'src/lib/element/card';
import { LoaderPrimary } from '../../../../lib/element/loader';
import { HomeListSkeleton } from '../../../../lib/element/skeleton';
import { ErrorAlert } from '.././../../../lib/element/alert';

export function HomeArticlesListComponent(props) {
  const { isPending, isSuccess, isError, errorMessage, pageLoading, articles } =
    props;
  return (
    <React.Fragment>
      {isPending || pageLoading ? (
        <HomeListSkeleton />
      ) : articles && articles.length ? (
        <IndentLayout>
          <FlexContainer>
            <Title tid="HOME.POPULAR_ARTICLES_TITLE" />
            <ViewAllLink tid="HOME.VIEW_ALL" path={'/'} />
          </FlexContainer>
          <BasicCardList ItemComponent={CardArticles} items={articles} />
        </IndentLayout>
      ) : null}

      {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}

      {(isPending || pageLoading) && <LoaderPrimary />}
    </React.Fragment>
  );
}

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;

const ViewAllLink = styled(LinkSecondary)`
  margin-left: auto;
`;
