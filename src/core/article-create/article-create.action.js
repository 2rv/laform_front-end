import { httpRequest } from 'src/main/http';
import { redirect } from 'src/main/navigation';
import {
  CREATE_ARTICLE_ACTION_TYPE,
  ARTICLE_FIELD_NAME,
} from './article-create.type';
import { CREATE_ARTICLE_API } from './article-create.constant';
import { convertForUpload, convertForChange } from './article-create.convert';
import {
  ALL_PRODUCTS_ROUTE_PATH,
  ALL_PRODUCTS_TAB_TYPES,
} from '../all-products';

export function createArticleUploadData(imagesUrl, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(imagesUrl, formValues);

      //----------------------------------------------------------------------

      const response = await httpRequest({
        method: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.TYPE,
        url: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.ENDPOINT,
        data: data,
      });

      //----------------------------------------------------------------------

      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createArticlePreUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      formData.append('file', formValues[ARTICLE_FIELD_NAME.IMAGES][0].file);
      const response = await httpRequest({
        method: CREATE_ARTICLE_API.CREATE_ARTICLE_IMAGE_UPLOAD.TYPE,
        url: CREATE_ARTICLE_API.CREATE_ARTICLE_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(createArticleUploadData(response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function ArticleLoadData(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: CREATE_ARTICLE_API.ARTICLE_LOAD.TYPE,
        url: CREATE_ARTICLE_API.ARTICLE_LOAD.ENDPOINT(id),
      });
      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_SUCCESS,
        data: convertForChange(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateArticle(id, newImage, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(newImage, formValues);
      const response = await httpRequest({
        method: CREATE_ARTICLE_API.ARTICLE_CHANGE.TYPE,
        url: CREATE_ARTICLE_API.ARTICLE_CHANGE.ENDPOINT(id),
        data: data,
      });
      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateArticlePreUpload(id, formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_PENDING,
    });
    try {
      if (!formValues[ARTICLE_FIELD_NAME.IMAGES][0].file) {
        return dispatch(
          updateArticle(
            id,
            formValues[ARTICLE_FIELD_NAME.IMAGES][0],
            formValues,
          ),
        );
      }
      const formData = new FormData();
      formData.append('file', formValues[ARTICLE_FIELD_NAME.IMAGES][0].file);
      const response = await httpRequest({
        method: CREATE_ARTICLE_API.CREATE_ARTICLE_IMAGE_UPLOAD.TYPE,
        url: CREATE_ARTICLE_API.CREATE_ARTICLE_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(updateArticle(id, response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function articleDelete(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_PENDING,
    });

    try {
      await httpRequest({
        method: CREATE_ARTICLE_API.ARTICLE_DELETE.TYPE,
        url: CREATE_ARTICLE_API.ARTICLE_DELETE.ENDPOINT(id),
      });

      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_SUCCESS,
      });

      redirect(ALL_PRODUCTS_ROUTE_PATH, {
        params: { type: ALL_PRODUCTS_TAB_TYPES[4] },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
