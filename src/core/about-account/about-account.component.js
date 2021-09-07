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
import { redirect, setLinkRedirect } from 'src/main/navigation';
import { LoaderPrimary } from 'src/lib/element/loader';

export function AboutAccountComponent(props) {
  const {
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
        <AboutAccountInfoComponent {...props} />
        <SectionLayout type="SMALL">
          <Title tid="Список покупок" />
          <Divider />
          {isPurchasesPending ? (
            <Spinner />
          ) : (
            Boolean(purchases.length) ? (
              <>
                <TableList items={purchases} onClick={redirectToProduct} cursorPointer={true} />
                <LinkSecondary tid="Посмотреть все..." />
              </>
            ) : (
              <TextSecondary tid="Нету покупок" />
            )
          )}
        </SectionLayout>
        <SectionLayout type="SMALL">
          <Title tid="Мои лайки" />
          <Divider />
          {isLikesPending ? (
            <Spinner />
          ) : (
            Boolean(likes.length) ? (
              <>
                <TableList items={likes} onClick={redirectToProduct} cursorPointer={true} />
                <LinkSecondary tid="Посмотреть все..." />
              </>
            ) : (
              <TextSecondary tid="Нету лайков" />
            )
          )}
        </SectionLayout>
        <SectionLayout type="SMALL">
          <Title tid="Мои комментарии" />
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
              <TextSecondary tid="Нету комментариев" />
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
  }
`;
