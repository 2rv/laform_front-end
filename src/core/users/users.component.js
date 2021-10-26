import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { LoaderPrimary } from '../../lib/element/loader';
import { UsersListComponent } from './frames/users-list.component';
import InfiniteScroll from 'react-infinite-scroll-component';

export function UsersComponent(props) {
  const {
    pageLoading,
    isPending,
    users,
    fetchData,
    hasMore,
  } = props;

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="OTHER.USERS_LIST" />
        <InfiniteScroll
          dataLength={users.length}
          next={fetchData}
          hasMore={hasMore}
          style={{ overflow: 'hidden', paddingBottom: '140px' }}
        >
          <UsersListComponent isPending={isPending} users={users} />
        </InfiniteScroll>
      </SectionLayout>
    </>
  );
}
