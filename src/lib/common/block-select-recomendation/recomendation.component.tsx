import styled from 'styled-components';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TabBlocks } from 'src/lib/element/tab-blocks';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE } from 'src/lib/theme';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { ModalFull } from 'src/lib/element/modal';
import { SearchBlock } from 'src/lib/common/block-search';
import { BasicCardList } from 'src/lib/element/card-list';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';

import { RecommendationComponentProps } from './recomendation.type';
import { RecommendationList } from './recomendation.list';

export function RecommendationComponent(props: RecommendationComponentProps) {
  const {
    handleChange,
    filterOptions,
    onPagination,
    onFilter,
    typeHandler,
    values,
    state: { getPending, paginatePending, categories, products, total },
  } = props;
  const [open, setOpen] = useState(false);
  return (
    <SectionLayout type="SMALL">
      <Title tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.TITLE" />
      <FieldLayout type="double" adaptive>
        <ButtonSecondary
          tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.ADD_RECOMENDATIONS"
          onClick={() => setOpen(true)}
        />
      </FieldLayout>
      <RecommendationList values={values} handleChange={handleChange} />

      <ModalFull onOpen={open} id="scrollableModalForRecommendations">
        <Case>
          <Wrapper type="SMALL">
            <HeaderCase>
              <TitlePrimary tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.SELECT_RECOMENDATION" />
              <ButtonIcon onClick={() => setOpen(false)}>
                <RemoveIcon />
              </ButtonIcon>
            </HeaderCase>
            <TabBlocks
              tabItems={['МК', 'ВЭ', 'ВП', 'ТДШ', 'БЛОГ']}
              otherUseState={typeHandler}
              children={[]}
            />
            <SearchBlock
              findPlaceholderTid="PATTERNS.PATTERNS.FIELD.FIND_PATTERNS"
              filterOptions={filterOptions}
              categories={categories}
              handleFilter={onFilter}
              disabled={getPending}
            />
            <InfiniteScroll
              scrollableTarget="scrollableModalForRecommendations"
              loader={<></>}
              dataLength={products.length}
              next={onPagination}
              hasMore={products.length < total}
            >
              <BasicCardList
                isLoading={getPending}
                isPagination={paginatePending}
                onSelect={handleChange}
                items={products}
                emptyText="ALL_PRODUCTS.CATEGORY_EMPTY"
                isCreateList
              />
            </InfiniteScroll>
          </Wrapper>
        </Case>
      </ModalFull>
    </SectionLayout>
  );
}

const Wrapper = styled(SectionLayout)`
  max-width: 1140px;
  width: 100%;
`;
const ButtonIcon = styled(IconButton)`
  padding: 0;
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Case = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
