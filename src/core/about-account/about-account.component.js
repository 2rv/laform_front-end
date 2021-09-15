import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { LinkSecondary } from '../../lib/element/link';
import { TitlePrimary } from '../../lib/element/title';
import { Divider } from '../../lib/element/divider';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { TableList } from '../block-table-list';
import { AboutAccountInfoComponent } from './frames';
import { TextSecondary } from 'src/lib/element/text';
import { Spinner } from 'src/lib/element/spinner';
import { redirect } from 'src/main/navigation';
import { LoaderPrimary } from 'src/lib/element/loader';

export function AboutAccountComponent(props) {
  const {
    isUserPending,
    user,
    isNormalUser,
    pageLoading,
    isPurchasesPending,
    purchases,
    isLikesPending,
    likes,
    isCommentsPending,
    comments,
  } = props;

  const redirectToProduct = (productName, id) => {
    redirect(`${productName}/${id}`);
  };

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <AboutAccountInfoComponent isUserPending={isUserPending} user={user} />
        {Boolean(isNormalUser) && (
          <React.Fragment>
            <SectionLayout type="SMALL">
              <Title tid="PROFILE.MY_PURCHASES" />
              <Divider />
              {isPurchasesPending ? (
                <Spinner />
              ) : (
                Boolean(purchases.length) ? (
                  <>
                    <TableList items={purchases} onClick={redirectToProduct} cursorPointer={true} />
                    <LinkSecondary tid="PROFILE.SHOW_ALL" path={'/orders-list'} />
                  </>
                ) : (
                  <TextSecondary tid="PROFILE.NOT_HAVE_PURCHASES" />
                )
              )}
            </SectionLayout>
            <SectionLayout type="SMALL">
              <Title tid="PROFILE.MY_LIKES" />
              <Divider />
              {isLikesPending ? (
                <Spinner />
              ) : (
                Boolean(likes.length) ? (
                  <>
                    <TableList items={likes} onClick={redirectToProduct} cursorPointer={true} />
                    <LinkSecondary tid="PROFILE.SHOW_ALL" path={'/favorites'} />
                  </>
                ) : (
                  <TextSecondary tid="PROFILE.NOT_HAVE_LIKES" />
                )
              )}
            </SectionLayout>
          </React.Fragment>
        )}
        <SectionLayout type="SMALL">
          <Title tid="PROFILE.MY_COMMENTS" />
          <Divider />
          {isCommentsPending ? (
            <Spinner />
          ) : (
            Boolean(comments.length) ? (
              <CommentContainer>
                {comments.map((comment) => (
                  <CommentContent key={comment.id} onClick={() => redirectToProduct(comment.productName, comment.productId)}>
                    <TextSecondary tid={comment.text} />
                    <TextSecondary>{moment(comment.createDate).format('MMM DD, YYYY, hh:mm:ss')}</TextSecondary>
                  </CommentContent>
                  ))}
              </CommentContainer>
            ) : (
              <TextSecondary tid="PROFILE.NOT_HAVE_COMMENTS" />
            )
          )}
        </SectionLayout>
      </SectionLayout>
    </>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const CommentContainer = styled.div`
  display: grid;
  gap: ${spacing(6)};
`

const CommentContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: ${spacing(4)} 0;
  &:hover {
    cursor: pointer;
    background: ${THEME_COLOR.GRAY};
    transition: 0.5s;
  }
`;
