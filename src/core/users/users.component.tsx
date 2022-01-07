import { Fragment } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TitlePrimary } from 'src/lib/element/title';
import { UsersComponentProps } from './users.type';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { Divider } from 'src/lib/element/divider';
import { spacing } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { UsersItem } from './users.item';
import { SearchBlock } from 'src/lib/common/block-search';

export function UsersComponent(props: UsersComponentProps) {
  const {
    onFilter,
    onUpdate,
    filterOptions,
    roleCategories,
    onPagination,
    state: { getPending, users, total },
    state,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="OTHER.USERS_LIST" />
      <SearchBlock
        findPlaceholderTid="Логин или почта"
        filterOptions={filterOptions}
        handleFilter={onFilter}
        disabled={getPending}
        categories={roleCategories}
      />
      <InfiniteScroll
        loader={<></>}
        dataLength={users.length}
        next={onPagination}
        hasMore={users.length < +total}
        style={{ overflow: 'visible' }}
      >
        <ListCase>
          {users.map((data, key) => (
            <Fragment key={data.id || key}>
              <UsersItem state={state} data={data} onUpdate={onUpdate} />
              <Divider />
            </Fragment>
          ))}
        </ListCase>
      </InfiniteScroll>
      {getPending && <CenteredSpinner />}
    </SectionLayout>
  );
}
const ListCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
