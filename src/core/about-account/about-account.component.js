import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';
import {
  AboutAccountInfoComponent,
  PurchasesComponent,
  LikesComponent,
} from './frames';
import { BlockComments } from 'src/lib/common/block-comments';

export function AboutAccountComponent(props) {
  const { pageLoading, isPending, userData } = props;
  const { user, purchase, likes, comments } = userData;
  return (
    <>
      {pageLoading && <LoaderPrimary />}
      {isPending ? (
        <Spinner />
      ) : (
        <SectionLayout>
          <AboutAccountInfoComponent user={user} />
          <PurchasesComponent purchases={purchase} />
          <LikesComponent likes={likes} />
          <BlockComments comments={comments} />
        </SectionLayout>
      )}
    </>
  );
}
