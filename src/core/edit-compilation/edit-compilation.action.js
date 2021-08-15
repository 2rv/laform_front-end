import { httpRequest } from '../../main/http';
import { EDIT_COMPILATION_API } from './edit-compilation.constant';
import { EDIT_COMPILATION_ACTION_TYPE } from './edit-compilation.type';

export function bestProductsLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING,
    });

    try {
      const bestProductsResponse = await httpRequest({
        method: EDIT_COMPILATION_API.BEST_PRODUCTS_LOAD_DATA.TYPE,
        url: EDIT_COMPILATION_API.BEST_PRODUCTS_LOAD_DATA.ENDPOINT(currentLang),
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
        bestMasterClasses: bestProductsResponse.data,
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
      const bestMasterClassesResponse = await httpRequest({
        method: EDIT_COMPILATION_API.BEST_MASTER_CLASSES_LOAD_DATA.TYPE,
        url: EDIT_COMPILATION_API.BEST_MASTER_CLASSES_LOAD_DATA.ENDPOINT(currentLang),
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
        bestMasterClasses: bestMasterClassesResponse.data,
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
      const bestArticlesResponse = await httpRequest({
        method: EDIT_COMPILATION_API.BEST_ARTICLES_LOAD_DATA.TYPE,
        url: EDIT_COMPILATION_API.BEST_ARTICLES_LOAD_DATA.ENDPOINT(currentLang),
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
        bestArticles: bestArticlesResponse.data,
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

export function bestCompilationsRemoveItem(compilationName, id) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: EDIT_COMPILATION_API.BEST_COMPILATIONS_REMOVE_ITEM.TYPE,
        url: EDIT_COMPILATION_API.BEST_COMPILATIONS_REMOVE_ITEM.ENDPOINT(compilationName, id),
      });

      console.log(compilationName);

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
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

export function bestCompilationsUpdateItem(compilationName, id) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: EDIT_COMPILATION_API.BEST_COMPILATIONS_UPDATE_ITEM.TYPE,
        url: EDIT_COMPILATION_API.BEST_COMPILATIONS_UPDATE_ITEM.ENDPOINT(compilationName, id),
        body,
      });

      console.log(compilationName);

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
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
