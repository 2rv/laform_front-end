import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { SEARCH_BUTTON_STORE_NAME } from './search-button.constant';
import { getRequestData } from 'src/main/store/store.service';
import { useDebounce } from 'src/lib/common/hooks';
import { SearchButtonComponent } from './search-button.component';
import {
  masterClassUploadData,
  sewingGoodsUploadData,
  articleUploadData,
  patternsUploadData,
} from './search-button.action';

export function SearchButtonContainer() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const debounce = useDebounce(searchInput, 300);

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
    dispatch(masterClassUploadData(currentLang, searchInput));
    dispatch(sewingGoodsUploadData(currentLang, searchInput));
    dispatch(articleUploadData(currentLang, searchInput));
    dispatch(patternsUploadData(currentLang, searchInput));
  }, [debounce]);

  const masterClasses = getRequestData(masterClassState, {});
  const patterns = getRequestData(patternsState, {});
  const sewingGoods = getRequestData(sewingGoodsState, {});
  const articles = getRequestData(articlesState, {});

  return (
    <SearchButtonComponent
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      masterClasses={masterClasses}
      patterns={patterns}
      sewingGoods={sewingGoods}
      articles={articles}
    />
  );
}
