import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';
import { AboutAccountInfoComponent, PurchasesComponent, LikesComponent } from './frames';
import { CommentsComponent } from '../../lib/common/comments-list';

export function AboutAccountComponent(props) {
  const { pageLoading, isPending, user } = props;
  return (
    <>
      {pageLoading && <LoaderPrimary />}
      {isPending ? (
        <Spinner />
      ) : (
        <SectionLayout>
          <AboutAccountInfoComponent user={user} />
          <PurchasesComponent purchases={user.purchase} />
          <LikesComponent likes={user.like} />
          <CommentsComponent comments={user.comment} />
        </SectionLayout>
      )}
    </>
  );
}
