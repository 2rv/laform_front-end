import { httpRequest } from '../../main/http';
import { COMPILATION_API } from './compilation.constant';
import { COMPILATION_ACTION_TYPE } from './compilation.type';
import { convertCompilationData } from './compilation.convert';

export function productsLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: COMPILATION_API.COMPILATION_PRODUCTS_LOAD_DATA.TYPE,
        url: COMPILATION_API.COMPILATION_PRODUCTS_LOAD_DATA.ENDPOINT(currentLang),
      });

      const data = response.data.map((data) => convertCompilationData(data, 0));

      dispatch({
        type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS,
        products: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function masterClassesLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: COMPILATION_API.COMPILATION_MASTER_CLASSES_LOAD_DATA.TYPE,
        url: COMPILATION_API.COMPILATION_MASTER_CLASSES_LOAD_DATA.ENDPOINT(currentLang),
      });

      const data = response.data.map((data) => convertCompilationData(data, 1));

      dispatch({
        type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS,
        masterClasses: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function articlesLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: COMPILATION_API.COMPILATION_ARTICLES_LOAD_DATA.TYPE,
        url: COMPILATION_API.COMPILATION_ARTICLES_LOAD_DATA.ENDPOINT(currentLang),
      });

      const data = response.data.map((data) => convertCompilationData(data, 2));

      dispatch({
        type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS,
        articles: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function removeCompilation(currentLang, compilationName, id) {
  return async (dispatch) => {
    dispatch({
      type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: COMPILATION_API.REMOVE_COMPILATION.TYPE,
        url: COMPILATION_API.REMOVE_COMPILATION.ENDPOINT(compilationName, id),
      });

      dispatch({ type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS });

      if (compilationName === 'post') {
        dispatch(productsLoadData(currentLang));
      } else if (compilationName === 'master-class') {
        dispatch(masterClassesLoadData(currentLang));
      } else if (compilationName === 'post') {
        dispatch(articlesLoadData(currentLang));
      }
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
