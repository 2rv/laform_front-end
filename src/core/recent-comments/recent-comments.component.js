import InfiniteScroll from 'react-infinite-scroll-component';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { BlockComments } from 'src/lib/common/block-comments';

export function RecentCommentsComponent(props) {
  const { comments = [], onPagination, hasMore } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="OTHER.RECENT_COMMENTS" />
      <InfiniteScroll
        dataLength={comments.length}
        next={onPagination}
        hasMore={hasMore}
      >
        <BlockComments comments={comments} />
      </InfiniteScroll>
    </SectionLayout>
  );
}
