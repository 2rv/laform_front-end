import InfiniteScroll from 'react-infinite-scroll-component';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { CommentsComponent } from '../../lib/common/comments-list/comments-list.component';

export function RecentCommentsComponent({ comments, fetchData, hasMore }) {
  return (
    <SectionLayout>
      <TitlePrimary tid="OTHER.RECENT_COMMENTS" />
      <InfiniteScroll
        dataLength={comments?.length ?? 0}
        next={fetchData}
        hasMore={hasMore}
      >
        <CommentsComponent comments={comments} />
      </InfiniteScroll>
    </SectionLayout>
  );
}
