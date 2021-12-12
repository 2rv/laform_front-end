import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { SEARCH_BUTTON_STORE_NAME } from './search-button.constant';
import { getRequestData } from 'src/main/store/store.service';
import { useDebounce } from 'src/lib/common/hooks';
import { SearchButtonComponent } from './search-button.component';
import { fetchProducts } from './search-button.action';
import { SEARCH_BUTTON_ACTION_TYPE } from './search-button.type';

export function SearchButtonContainer() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const debounce = useDebounce(searchInput, 300);

  const { productsState, currentLang } = useSelector((state) => ({
    productsState: state[SEARCH_BUTTON_STORE_NAME].products,
    currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    dispatch({ type: SEARCH_BUTTON_ACTION_TYPE.RESET_PRODUCTS_STATE });
    dispatch(fetchProducts(currentLang, searchInput));
  }, [debounce]);

  const onFilter = (value) => {
    setSearchInput(value);
    dispatch({ type: SEARCH_BUTTON_ACTION_TYPE.RESET_PRODUCTS_STATE });
  };

  const fetchData = () => {
    dispatch(
      fetchProducts(currentLang, searchInput, productsState.data.currentPage),
    );
  };

  return (
    <SearchButtonComponent
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      onChange={onFilter}
      listItems={getRequestData(productsState, {}).products}
      fetchData={fetchData}
      hasMore={
        Number(productsState.data?.products?.length) <
        Number(productsState.data?.totalRecords)
      }
    />
  );
}
