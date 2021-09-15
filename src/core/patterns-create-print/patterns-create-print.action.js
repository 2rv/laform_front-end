import { httpRequest } from '../../main/http';
import { CREATE_PRINT_PATTERN_API } from './patterns-create-print.constant';
import { convertForUpload } from './patterns-create-print.convert';
import {
  CREATE_PRINT_PATTERN_ACTION_TYPE,
  PRINT_PATTERN_FIELD_NAME,
} from './patterns-create-print.type';

export function createPrintPatternUploadData(imagesUrls, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(imagesUrls, formValues);

      //----------------------------------------------------------------------

      const response = await httpRequest({
        method: CREATE_PRINT_PATTERN_API.PRINT_PATTERN_UPLOAD.TYPE,
        url: CREATE_PRINT_PATTERN_API.PRINT_PATTERN_UPLOAD.ENDPOINT,
        data: data,
      });
      console.log(response.data);
      //----------------------------------------------------------------------

      dispatch({
        type: CREATE_PRINT_PATTERN_ACTION_TYPE.CREATE_PRINT_PATTERN_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PRINT_PATTERN_ACTION_TYPE.CREATE_PRINT_PATTERN_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createPrintPatternPreUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_PRINT_PATTERN_ACTION_TYPE.CREATE_PRINT_PATTERN_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[PRINT_PATTERN_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[PRINT_PATTERN_FIELD_NAME.IMAGES][key][
            PRINT_PATTERN_FIELD_NAME.IMAGE
          ],
        );
      }
      const response = await httpRequest({
        method: CREATE_PRINT_PATTERN_API.PRINT_PATTERN_IMAGE_UPLOAD.TYPE,
        url: CREATE_PRINT_PATTERN_API.PRINT_PATTERN_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(createPrintPatternUploadData(response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PRINT_PATTERN_ACTION_TYPE.CREATE_PRINT_PATTERN_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
