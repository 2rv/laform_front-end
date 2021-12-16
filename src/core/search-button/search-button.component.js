import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as FindIcon } from 'src/asset/svg/find.svg';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ButtonBasic, IconButton } from 'src/lib/element/button';
import { ModalFull } from 'src/lib/element/modal';
import { BasicCardList } from 'src/lib/element/card-list';
import { BasicField } from 'src/lib/element/field';
import InfiniteScroll from 'react-infinite-scroll-component';

export function SearchButtonComponent(props) {
  const {
    searchInput,
    setSearchInput,
    onChange,
    listItems,
    fetchData,
    hasMore,
  } = props;

  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <>
      <Container onClick={() => setModalVisibility(true)}>
        <SearchButtonIcon>
          <FindIcon />
        </SearchButtonIcon>
      </Container>
      <ModalFullCenter onOpen={modalVisibility}>
        <ModalContent>
          <HeaderCase>
            <InputBox>
              <BasicField
                placeholderTid="OTHER.SEARCH_PRODUCT"
                value={searchInput}
                onChange={(e) => onChange(e.target.value)}
              />
              <IconBox>
                {Boolean(searchInput.length > 0) ? (
                  <ButtonIcon onClick={() => setSearchInput('')}>
                    <RemoveIcon />
                  </ButtonIcon>
                ) : (
                  <ButtonIcon>
                    <FindIcon />
                  </ButtonIcon>
                )}
              </IconBox>
            </InputBox>
            <ButtonIcon onClick={() => setModalVisibility(false)}>
              <RemoveIcon />
            </ButtonIcon>
          </HeaderCase>
          <div id="scrollableDiv" style={{ height: '100vh', overflow: 'auto' }}>
            <InfiniteScroll
              dataLength={listItems.length}
              next={fetchData}
              hasMore={hasMore}
              scrollableTarget="scrollableDiv"
            >
              <BasicCardList
                items={listItems}
                emptyText="OTHER.NOTHING_FOUND"
              />
            </InfiniteScroll>
          </div>
        </ModalContent>
      </ModalFullCenter>
    </>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(5)};
  padding-right: ${spacing(1)};
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
  gap: ${spacing(3)};
`;

const ModalFullCenter = styled(ModalFull)`
  justify-content: center;
  overflow: hidden !important;
  height: auto !important;
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

const IconBox = styled.div`
  position: absolute;
  right: 1px;
  top: 1px;
`;

const SearchButtonIcon = styled(IconButton)`
  padding: 0;
  background-color: none;
  @media screen and (max-width: 1070px) {
    background-color: ${THEME_COLOR.WHITE};
  }
`;

const ButtonIcon = styled(IconButton)`
  padding: 0;
  height: 44px;
`;

const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};
`;

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
