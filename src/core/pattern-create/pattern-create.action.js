import { httpRequest } from '../../main/http';
import { CREATE_PATTERN_API } from './pattern-create.constant';
import {
  convertForUpload,
  convertForPreUploadPDFFiles,
} from './pattern-create.ts.convert';
import {
  CREATE_PATTERN_ACTION_TYPE,
  CREATE_PATTERN_FIELD_NAME,
} from './pattern-create.type';

export function createPatternUploadData(imagesUrls, pdfFileUrls, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(imagesUrls, pdfFileUrls, formValues);
      const response = await httpRequest({
        method: CREATE_PATTERN_API.PATTERN_UPLOAD.TYPE,
        url: CREATE_PATTERN_API.PATTERN_UPLOAD.ENDPOINT,
        data: data,
      });

      dispatch({
        type: CREATE_PATTERN_ACTION_TYPE.CREATE_PATTERN_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PATTERN_ACTION_TYPE.CREATE_PATTERN_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createPatternPreUploadPDFFiles(imageUrls, formValues) {
  return async (dispatch) => {
    try {
      const files = convertForPreUploadPDFFiles(formValues);
      const formData = new FormData();
      for (const file of files) {
        formData.append('files', file);
      }

      const response = await httpRequest({
        method: CREATE_PATTERN_API.PATTERN_PDF_UPLOAD.TYPE,
        url: CREATE_PATTERN_API.PATTERN_PDF_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(createPatternUploadData(imageUrls, response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PATTERN_ACTION_TYPE.CREATE_PATTERN_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createPatternPreUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_PATTERN_ACTION_TYPE.CREATE_PATTERN_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[CREATE_PATTERN_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[CREATE_PATTERN_FIELD_NAME.IMAGES][key][
            CREATE_PATTERN_FIELD_NAME.IMAGE
          ],
        );
      }
      const response = await httpRequest({
        method: CREATE_PATTERN_API.PATTERN_IMAGE_UPLOAD.TYPE,
        url: CREATE_PATTERN_API.PATTERN_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(createPatternPreUploadPDFFiles(response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PATTERN_ACTION_TYPE.CREATE_PATTERN_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
