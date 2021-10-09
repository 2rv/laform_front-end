import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'src/asset/svg/search.svg';
import { ReactComponent as CloseIcon } from  'src/asset/svg/delete-cancel-icon.svg';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_SIZE } from 'src/lib/theme';
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
        <ButtonIcon>
          <SearchIcon />
        </ButtonIcon>
      </Container>
      <ModalFullCenter onOpen={modalVisibility}>
        <ModalContent>
          <HeaderCase>
            <TitlePrimary tid="OTHER.ENTER_YOUR_SEARCH_DATA" />
            <CloseModalButton tid="BLOCK_TEXT.CLOSE" onClick={() => setModalVisibility(false)} />
          </HeaderCase>
          <HeaderCase>
            <BasicField value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <ButtonIcon onClick={() => setSearchInput('')}>
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

const ButtonIcon = styled(IconButton)`
  padding: 0;
`;

const CloseModalButton = styled(ButtonBasic)`
  width: auto;
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
