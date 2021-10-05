import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'src/asset/svg/search.svg';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import {
  ButtonBasic,
  ButtonSecondary,
  IconButton,
} from 'src/lib/element/button';
import { ModalFull } from 'src/lib/element/modal';
import { BasicCardList } from 'src/lib/element/card-list';
import { ReactComponent as CancelIcon } from  'src/asset/svg/delete-cancel-icon.svg';
import { FilterTabs } from 'src/lib/element/filter-tabs';
import { FormFilter } from 'src/lib/element/form-filter';
import { BasicField } from 'src/lib/element/field';
import { Spinner } from 'src/lib/element/spinner';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { SEARCH_BUTTON_STORE_NAME } from './search-button.constant';
import {
  masterClassUploadData,
  sewingGoodsUploadData,
  articleUploadData,
  patternsUploadData,
} from './search-button.action';
import { getRequestData } from 'src/main/store/store.service';
import { useDebounce } from 'src/lib/common/hooks';

export function SearchButton() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(searchInput, 1000);

  const {
    masterClassState,
    sewingGoodsState,
    patternsState,
    articlesState,
    currentLang,
  } = useSelector((state) => ({
    masterClassState: state[SEARCH_BUTTON_STORE_NAME].masterClassState,
    sewingGoodsState: state[SEARCH_BUTTON_STORE_NAME].sewingGoodsState,
    patternsState: state[SEARCH_BUTTON_STORE_NAME].patternsState,
    articlesState: state[SEARCH_BUTTON_STORE_NAME].articlesState,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    if (debouncedValue) {
      dispatch(masterClassUploadData(currentLang, debouncedValue));
      dispatch(sewingGoodsUploadData(currentLang, debouncedValue));
      dispatch(articleUploadData(currentLang, debouncedValue));
      dispatch(patternsUploadData(currentLang, debouncedValue));
    }
  }, [debouncedValue]);

  const masterClasses = getRequestData(masterClassState, {});
  const patterns = getRequestData(patternsState, {});
  const sewingGoods = getRequestData(sewingGoodsState, {});
  const articles = getRequestData(articlesState, {});

  return (
    <>
      <Container onClick={() => setModalVisibility(true)}>
        <SearchIconButton>
          <SearchIcon />
        </SearchIconButton>
      </Container>
      <ModalFullCenter onOpen={modalVisibility}>
        <ModalContent>
          <HeaderCase>
            <TitlePrimary tid="OTHER.ENTER_YOUR_SEARCH_DATA" />
            <CloseButtonIcon onClick={() => setModalVisibility(false)}>
              <CancelIcon />
            </CloseButtonIcon>
          </HeaderCase>
          <HeaderCase>
            <BasicField
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <CloseButtonIcon onClick={() => setSearchInput('')}>
              <CancelIcon />
            </CloseButtonIcon>
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
const SearchIconButton = styled(IconButton)`
  display: flex;
  padding: 0;
`;
const ModalFullCenter = styled(ModalFull)`
  justify-content: center;
`;
const CloseButtonIcon = styled(IconButton)`
  padding: 0;
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};
`;
const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
  gap: ${spacing(3)};
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;