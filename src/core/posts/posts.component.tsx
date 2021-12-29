import { SectionLayout } from 'src/lib/element/layout';
import { BasicCardList } from 'src/lib/element/card-list';
import { TitlePrimary } from 'src/lib/element/title';
import { SearchBlock } from 'src/lib/common/block-search';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostsComponentProps } from './posts.type';

export function PostsComponent(props: PostsComponentProps) {
  const {
    onFilter,
    onPagination,
    filterOptions,
    state: { getPending, paginatePending, categories, products, total },
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="ARTICLES.ARTICLES.TITLE" />
      <SearchBlock
        findPlaceholderTid="ARTICLES.ARTICLES.FIELD.FIND_ARTICLES"
        filterOptions={filterOptions}
        categories={categories}
        handleFilter={onFilter}
        disabled={getPending}
      />
      <InfiniteScroll
        loader={<></>}
        dataLength={products.length}
        next={onPagination}
        hasMore={products.length < +total}
      >
        <BasicCardList
          isLoading={getPending}
          isPagination={paginatePending}
          items={products}
          emptyText="OTHER.LIST_IS_EMPTY"
        />
      </InfiniteScroll>
    </SectionLayout>
  );
}
