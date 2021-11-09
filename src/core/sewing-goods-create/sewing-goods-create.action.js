import { redirect } from 'src/main/navigation';
import { httpRequest } from '../../main/http';
import { ALL_PRODUCTS_ROUTE_PATH } from '../all-products';
import { CREATE_SEWING_GOODS_API } from './sewing-goods-create.constant';
import {
  convertForUpload,
  convertForChange,
  convertForUpdateImage,
} from './sewing-goods-create.ts.convert';
import {
  CREATE_SEWING_GOODS_ACTION_TYPE,
  SEWING_GOODS_FIELD_NAME,
} from './sewing-goods-create.type';

export function createSewingGoodsUploadData(imagesUrls, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(imagesUrls, formValues);
      const response = await httpRequest({
        method: CREATE_SEWING_GOODS_API.SEWING_GOODS_UPLOAD.TYPE,
        url: CREATE_SEWING_GOODS_API.SEWING_GOODS_UPLOAD.ENDPOINT,
        data: data,
      });
      dispatch({
        type: CREATE_SEWING_GOODS_ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_SEWING_GOODS_ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createSewingGoodsPreUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_SEWING_GOODS_ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[SEWING_GOODS_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[SEWING_GOODS_FIELD_NAME.IMAGES][key].file,
        );
      }

      const response = await httpRequest({
        method: CREATE_SEWING_GOODS_API.SEWING_GOODS_IMAGE_UPLOAD.TYPE,
        url: CREATE_SEWING_GOODS_API.SEWING_GOODS_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(createSewingGoodsUploadData(response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_SEWING_GOODS_ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function sewingGoodsLoadData(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_LOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: CREATE_SEWING_GOODS_API.SEWING_GOODS_LOAD.TYPE,
        url: CREATE_SEWING_GOODS_API.SEWING_GOODS_LOAD.ENDPOINT(id),
      });
      dispatch({
        type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_LOAD_SUCCESS,
        data: convertForChange(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateSewingProductPreUpload(id, formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPDATE_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[SEWING_GOODS_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[SEWING_GOODS_FIELD_NAME.IMAGES][key].file,
        );
      }

      const response = await httpRequest({
        method: CREATE_SEWING_GOODS_API.SEWING_GOODS_IMAGE_UPLOAD.TYPE,
        url: CREATE_SEWING_GOODS_API.SEWING_GOODS_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(updateSewingProduct(id, response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateSewingProduct(id, newImages, formValues) {
  return async (dispatch) => {
    try {
      const updatedImagesArray = convertForUpdateImage(newImages, formValues);
      const data = convertForUpload(updatedImagesArray, formValues);
      const response = await httpRequest({
        method: CREATE_SEWING_GOODS_API.SEWING_GOODS_CHANGE.TYPE,
        url: CREATE_SEWING_GOODS_API.SEWING_GOODS_CHANGE.ENDPOINT(id),
        data: data,
      });
      dispatch({
        type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPDATE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function sewingGoodsDelete(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_DELETE_PENDING,
    });

    try {
      await httpRequest({
        method: CREATE_SEWING_GOODS_API.SEWING_GOODS_DELETE.TYPE,
        url: CREATE_SEWING_GOODS_API.SEWING_GOODS_DELETE.ENDPOINT(id),
      });

      dispatch({
        type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_DELETE_SUCCESS,
      });

      redirect(ALL_PRODUCTS_ROUTE_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_DELETE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
