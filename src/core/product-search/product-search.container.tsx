import { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import {
  getProductsByType,
  paginateProductsByType,
} from './product-search.action';
import { ProductSearchComponent } from './product-search.component';
import {
  ProductSearchActionType,
  ProductSearcStateType,
  PRODUCT_SEARCH_ACTION_TYPE,
} from './product-search.type';

const initialState = {
  getPending: false,
  getError: '',

  paginatePending: false,
  paginateError: '',

  products: [],

  total: 0,
  page: 1,
};

function ProductSearchReducer(
  state: ProductSearcStateType,
  action: ProductSearchActionType,
) {
  switch (action.type) {
    case PRODUCT_SEARCH_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
      };
    case PRODUCT_SEARCH_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
        total: action.total || 0,
      };
    case PRODUCT_SEARCH_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case PRODUCT_SEARCH_ACTION_TYPE.PAGINATE_PENDING:
      return {
        ...state,
        paginatePending: true,
      };
    case PRODUCT_SEARCH_ACTION_TYPE.PAGINATE_SUCCESS:
      return {
        ...state,
        paginatePending: false,
        products: [...state.products, ...(action.products || [])],
        page: state.page + 1,
      };
    case PRODUCT_SEARCH_ACTION_TYPE.PAGINATE_ERROR:
      return {
        ...state,
        paginatePending: false,
        paginateError: action.error,
      };

    case PRODUCT_SEARCH_ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
}

export function ProductSearchContainer() {
  const [state, setState] = useReducer(ProductSearchReducer, initialState);
  const [isOpen, setOpen] = useState(false);
  const [where, setWhere] = useState('');

  const { lang } = useSelector((state: any) => ({
    lang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  useEffect(() => {
    if (isOpen) {
      getProductsByType({
        page: state.page,
        lang,
        where: where ? where : undefined,
      })(setState);
    }
  }, [where, isOpen]);

  const onPagination = () => {
    paginateProductsByType({
      page: state.page,
      lang,
      where: where ? where : undefined,
    })(setState);
  };

  const onFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setWhere(e.target.value);
  };

  return (
    <ProductSearchComponent
      state={state}
      isOpen={isOpen}
      setOpen={setOpen}
      onFilter={onFilter}
      where={where}
      onPagination={onPagination}
    />
  );
}
