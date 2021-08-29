import { httpRequest } from '../../main/http';
import { EDIT_COMPILATION_API } from './edit-compilation.constant';
import { EDIT_COMPILATION_ACTION_TYPE } from './edit-compilation.type';

export function bestProductsLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: EDIT_COMPILATION_API.BEST_PRODUCTS_LOAD_DATA.TYPE,
        url: EDIT_COMPILATION_API.BEST_PRODUCTS_LOAD_DATA.ENDPOINT(currentLang),
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
        bestProducts: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function bestMasterClassesLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: EDIT_COMPILATION_API.BEST_MASTER_CLASSES_LOAD_DATA.TYPE,
        url: EDIT_COMPILATION_API.BEST_MASTER_CLASSES_LOAD_DATA.ENDPOINT(currentLang),
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
        bestMasterClasses: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function bestArticlesLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: EDIT_COMPILATION_API.BEST_ARTICLES_LOAD_DATA.TYPE,
        url: EDIT_COMPILATION_API.BEST_ARTICLES_LOAD_DATA.ENDPOINT(currentLang),
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
        bestArticles: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function productsLoadData(compilationName, currentLang) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: EDIT_COMPILATION_API.PRODUCTS_LOAD_DATA.TYPE,
        url: EDIT_COMPILATION_API.PRODUCTS_LOAD_DATA.ENDPOINT(compilationName, currentLang),
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS,
        products: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_COMPILATION_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function bestCompilationsRemoveItem(compilationName, id, currentLang) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: EDIT_COMPILATION_API.BEST_COMPILATIONS_REMOVE_ITEM.TYPE,
        url: EDIT_COMPILATION_API.BEST_COMPILATIONS_REMOVE_ITEM.ENDPOINT(compilationName, id),
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
      });

      if (compilationName === 'post') {
        dispatch(bestProductsLoadData(currentLang));
      } else if (compilationName === 'master-class') {
        dispatch(bestMasterClassesLoadData(currentLang));
      } else if (compilationName === 'post') {
        dispatch(bestArticlesLoadData(currentLang));
      }
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

// TODO: Это под вопросом
/**
 * по дизайну в фигме мы должны изменять только name продукта, но этого запроса нету
 */
export function bestMasterClassesUpdateItem(id, newProductname, compilationNamе, currentLang) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: EDIT_COMPILATION_API.BEST_MASTER_CLASS_UPDATE_ITEM.TYPE,
        url: EDIT_COMPILATION_API.BEST_MASTER_CLASS_UPDATE_ITEM.ENDPOINT(compilationNamе, id),
        data: newProductname,
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
      });

      if (compilationNamе === 'post') {
        dispatch(bestProductsLoadData(currentLang));
      } else if (compilationName === 'master-class') {
        dispatch(bestMasterClassesLoadData(currentLang));
      } else if (compilationName === 'post') {
        dispatch(bestArticlesLoadData(currentLang));
      }
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
