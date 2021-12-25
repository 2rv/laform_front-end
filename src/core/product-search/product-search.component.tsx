import InfiniteScroll from 'react-infinite-scroll-component';
import { Fragment } from 'react';
import styled from 'styled-components';
import { ReactComponent as FindIcon } from 'src/asset/svg/find.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { spacing, THEME_COLOR } from 'src/lib/theme';
import { IconButton } from 'src/lib/element/button';
import { ModalFull } from 'src/lib/element/modal';
import { BasicCardList } from 'src/lib/element/card-list';
import { ProductSearchComponentProps } from './product-search.type';
import { BasicField } from 'src/lib/element/field';

export function ProductSearchComponent(props: ProductSearchComponentProps) {
  const {
    state: { getPending, paginatePending, products, total },
    onPagination,
    isOpen,
    setOpen,
    onFilter,
    where,
  } = props;

  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>
        <FindIcon />
      </Button>
      <ModalFull id="scrollableModal" onOpen={isOpen}>
        <Container>
          <HeaderCase>
            <BasicField
              value={where}
              onChange={onFilter}
              placeholderTid="OTHER.SEARCH_PRODUCT"
            />
            <ButtonIcon onClick={() => setOpen(false)}>
              <RemoveIcon />
            </ButtonIcon>
          </HeaderCase>

          <InfiniteScroll
            scrollableTarget="scrollableModal"
            loader={<></>}
            dataLength={products.length}
            next={onPagination}
            hasMore={products.length < total}
          >
            <BasicCardList
              isLoading={getPending}
              isPagination={paginatePending}
              items={products}
              emptyText="ALL_PRODUCTS.CATEGORY_EMPTY"
            />
          </InfiniteScroll>
        </Container>
      </ModalFull>
    </Fragment>
  );
}

const Button = styled(IconButton)`
  padding: 0;
  background-color: none;
  @media screen and (max-width: 1070px) {
    background-color: ${THEME_COLOR.WHITE};
  }
`;
const Container = styled.div`
  max-width: 1140px;
  gap: ${spacing(3)};
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
const ButtonIcon = styled(IconButton)`
  padding: 0;
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};
`;
