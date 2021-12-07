import { httpRequest } from 'src/main/http';
import { redirect } from 'src/main/navigation';
import {
  CREATE_MASTER_CLASS_ACTION_TYPE,
  CREATE_MASTER_CLASS_FIELD_NAME,
} from './master-class-create.type';
import { CREATE_MASTER_CLASS_API } from './master-class-create.constant';
import {
  convertForUpload,
  convertForChange,
  convertForUpdateImage,
} from './master-class-create.convert';

import {
  ALL_PRODUCTS_ROUTE_PATH,
  ALL_PRODUCTS_TAB_TYPES,
} from '../all-products';

export function createMasterClassUploadData(imagesUrls, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(imagesUrls, formValues);

      //----------------------------------------------------------------------

      const response = await httpRequest({
        method: CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_UPLOAD.TYPE,
        url: CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_UPLOAD.ENDPOINT,
        data: data,
      });

      //----------------------------------------------------------------------

      dispatch({
        type: CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createMasterClassPreUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[CREATE_MASTER_CLASS_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[CREATE_MASTER_CLASS_FIELD_NAME.IMAGES][key].file,
        );
      }
      const response = await httpRequest({
        method:
          CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_IMAGE_PRE_UPLOAD.TYPE,
        url: CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_IMAGE_PRE_UPLOAD
          .ENDPOINT,
        data: formData,
      });
      dispatch(createMasterClassUploadData(response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function masterClassLoadData(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_LOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: CREATE_MASTER_CLASS_API.MASTER_CLASS_LOAD.TYPE,
        url: CREATE_MASTER_CLASS_API.MASTER_CLASS_LOAD.ENDPOINT(id),
      });
      dispatch({
        type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_LOAD_SUCCESS,
        data: convertForChange(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateMasterClass(id, newImages, formValues) {
  return async (dispatch) => {
    try {
      const updatedImagesArray = convertForUpdateImage(newImages, formValues);
      const data = convertForUpload(updatedImagesArray, formValues);
      const response = await httpRequest({
        method: CREATE_MASTER_CLASS_API.MASTER_CLASS_CHANGE.TYPE,
        url: CREATE_MASTER_CLASS_API.MASTER_CLASS_CHANGE.ENDPOINT(id),
        data: data,
      });
      dispatch({
        type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPDATE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateMasterClassPreUpload(id, formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPDATE_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[CREATE_MASTER_CLASS_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[CREATE_MASTER_CLASS_FIELD_NAME.IMAGES][key].file,
        );
      }

      const response = await httpRequest({
        method:
          CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_IMAGE_PRE_UPLOAD.TYPE,
        url: CREATE_MASTER_CLASS_API.CREATE_MASTER_CLASS_IMAGE_PRE_UPLOAD
          .ENDPOINT,
        data: formData,
      });
      dispatch(updateMasterClass(id, response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function masterClassDelete(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_DELETE_PENDING,
    });

    try {
      await httpRequest({
        method: CREATE_MASTER_CLASS_API.MASTER_CLASS_DELETE.TYPE,
        url: CREATE_MASTER_CLASS_API.MASTER_CLASS_DELETE.ENDPOINT(id),
      });

      dispatch({
        type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_DELETE_SUCCESS,
      });

      redirect(ALL_PRODUCTS_ROUTE_PATH, {
        params: { type: ALL_PRODUCTS_TAB_TYPES[0] },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_DELETE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
