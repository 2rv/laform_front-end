import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { LinkSecondary } from '../../lib/element/link';
import { TitlePrimary } from '../../lib/element/title';
import { Divider } from '../../lib/element/divider';
import { THEME_SIZE } from '../../lib/theme';
import { TableList } from '../block-table-list';
import { AboutAccountInfoComponent } from './frames';
import { TextSecondary } from 'src/lib/element/text';
import { Spinner } from 'src/lib/element/spinner';
import { redirect } from 'src/main/navigation';
import { LoaderPrimary } from 'src/lib/element/loader';

export function AboutAccountComponent(props) {
  const {
    pageLoading,
    orderItems,
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
          <SectionLayout type="TEXT">
            <Title tid="Список покупок" />
            <Divider />
            {Boolean(orderItems.length) ? (
              <>
                <TableList items={orderItems} />
                <LinkSecondary tid="Посмотреть все..." />
              </>
            ) : (
              <TextSecondary tid="Нету покупок" />
            )}
          </SectionLayout>
        </SectionLayout>
        <SectionLayout type="SMALL">
          <SectionLayout type="TEXT">
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
        </SectionLayout>
        <SectionLayout type="SMALL">
          <SectionLayout type="TEXT">
            <Title tid="Мои комментарии" />
            <Divider />
            {isCommentsPending ? (
              <Spinner />
            ) : (
              Boolean(comments.length) ? <TableList items={comments} /> : <TextSecondary tid="Нету комментариев" />
            )}
          </SectionLayout>
        </SectionLayout>
      </SectionLayout>
    </>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
