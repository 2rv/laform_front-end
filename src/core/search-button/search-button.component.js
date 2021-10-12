import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as FindIcon } from 'src/asset/svg/find-icon.svg';
import { ReactComponent as CloseIcon } from  'src/asset/svg/delete-cancel-icon.svg';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ButtonBasic, IconButton } from 'src/lib/element/button';
import { ModalFull } from 'src/lib/element/modal';
import { BasicCardList } from 'src/lib/element/card-list';
import { BasicField } from 'src/lib/element/field';

export function SearchButtonComponent(props) {
  const {
    searchInput,
    setSearchInput,
    masterClasses,
    patterns,
    sewingGoods,
    articles,
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
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <IconBox>
                {Boolean(searchInput.length > 0) ? (
                  <ButtonIcon onClick={() => setSearchInput('')}>
                    <CloseIcon />
                  </ButtonIcon>
                ) : (
                  <ButtonIcon>
                    <FindIcon />
                  </ButtonIcon>
                )}
              </IconBox>
            </InputBox>
            <ButtonIcon onClick={() => setModalVisibility(false)}>
              <CloseIcon />
            </ButtonIcon>
          </HeaderCase>
          <BasicCardList
            items={[].concat(masterClasses, patterns, sewingGoods, articles)}
            emptyText="OTHER.NOTHING_FOUND"
          />
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
