import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import {
  getCompilationAction,
  saveCompilationAction,
  deleteCompilatioAction,
} from './products-compilation.action';
import { ProductsCompilationComponent } from './products-compilation.component';
import {
  ProductsCompilationValues,
  ProductsCompilationStateType,
  ProductsCompilationActionType,
  PRODUCT_SELECTIONS_ACTION_TYPE,
} from './products-compilation.type';

const initialState = {
  getPending: false,
  products: [],
  getError: '',

  savePending: false,
  saveSuccess: false,
  saveError: '',

  removePending: false,
  removeSuccess: false,
  removeError: '',
};
function ProductsCompilationReducer(
  state: ProductsCompilationStateType,
  action: ProductsCompilationActionType,
) {
  switch (action.type) {
    case PRODUCT_SELECTIONS_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getError: '',
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        products: action.products || [],
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    case PRODUCT_SELECTIONS_ACTION_TYPE.SAVE_PENDING:
      return {
        ...state,
        savePending: true,
        saveError: '',
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.SAVE_SUCCESS:
      return {
        ...state,
        savePending: false,
        saveSuccess: true,
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.SAVE_ERROR:
      return {
        ...state,
        savePending: false,
        saveError: action.error,
      };

    case PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_PENDING:
      return {
        ...state,
        removePending: true,
        removeError: '',
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        removePending: false,
        removeSuccess: true,
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_ERROR:
      return {
        ...state,
        removePending: false,
        removeError: action.error,
      };

    default:
      return state;
  }
}

export function ProductsCompilationContainer() {
  const [state, setState] = useReducer(
    ProductsCompilationReducer,
    initialState,
  );

  const { lang } = useSelector((state: any) => ({
    lang: state[LANG_STORE_NAME].active.toLowerCase(),
  }));

  function initialValues(): ProductsCompilationValues {
    return {
      products: state.products.length ? state.products : [initialBlock],
    };
  }

  const initialBlock = {
    title: 'Подборка',
    path: '',
    compilationProducts: [],
    inEnglish: false,
  };

  useEffect(() => {
    getCompilationAction(lang)(setState);
  }, [lang]);

  function onSubmit(values: ProductsCompilationValues) {
    saveCompilationAction(values)(setState);
  }

  function onDelete(id: string) {
    deleteCompilatioAction(id)(setState);
  }

  return (
    <ProductsCompilationComponent
      state={state}
      initialBlock={initialBlock}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      onDelete={onDelete}
    />
  );
}
