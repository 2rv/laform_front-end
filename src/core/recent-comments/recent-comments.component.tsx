import InfiniteScroll from 'react-infinite-scroll-component';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { BlockComments } from 'src/lib/common/block-comments';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { RecentCommentsComponentProps } from './recent-comments.type';

export function RecentCommentsComponent(props: RecentCommentsComponentProps) {
  const {
    state: { pending, comments, total },
    onPagination,
  } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="OTHER.RECENT_COMMENTS" />
      {pending && <CenteredSpinner />}
      <InfiniteScroll
        loader={<></>}
        dataLength={comments.length}
        next={onPagination}
        hasMore={comments.length < +total}
      >
        <BlockComments comments={comments} />
      </InfiniteScroll>
    </SectionLayout>
  );
}
