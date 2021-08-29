import { httpRequest } from '../../main/http';
import { CREATE_PRODUCT_API } from './create-product.constant';
import { convertationForUploadData } from './create-product.convert';
import {
  CREATE_PRODUCT_ACTION_TYPE,
  PRODUCT_FIELD_NAME,
} from './create-product.type';

export function createProductFormUploadData(imagesUrls, formValues) {
  return async (dispatch) => {
    try {
      const { convertedData, type } = convertationForUploadData(
        imagesUrls,
        formValues,
      );
      //----------------------------------------------------------------------

      const response = await httpRequest({
        method: CREATE_PRODUCT_API.CREATE_PRODUCT_UPLOAD.TYPE,
        url: CREATE_PRODUCT_API.CREATE_PRODUCT_UPLOAD.ENDPOINT(type),
        data: convertedData,
      });

      console.log(response.data);
      //----------------------------------------------------------------------

      dispatch({
        type: CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createProductUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[PRODUCT_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[PRODUCT_FIELD_NAME.IMAGES][key][PRODUCT_FIELD_NAME.IMAGE],
        );
      }
      const response = await httpRequest({
        method: CREATE_PRODUCT_API.CREATE_PRODUCT_IMAGE_UPLOAD.TYPE,
        url: CREATE_PRODUCT_API.CREATE_PRODUCT_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(createProductFormUploadData(response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
