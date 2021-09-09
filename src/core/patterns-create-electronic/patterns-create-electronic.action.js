import { httpRequest } from '../../main/http';
import { ELECTRONIC_PATTERN_API } from './patterns-create-electronic.constant';
import { convertForUpload } from './patterns-create-electronic.convert';
import {
  CREATE_ELECTRONIC_PATTERN_TYPE,
  ELECTRONIC_PATTERN_FIELD_NAME,
} from './patterns-create-electronic.type';

export function createElectronicPatternUploadData(
  imagesUrls,
  pdfFileUrl,
  formValues,
) {
  return async (dispatch) => {
    try {
      const data = convertForUpload(imagesUrls, pdfFileUrl, formValues);

      const response = await httpRequest({
        method: ELECTRONIC_PATTERN_API.ELECTRONIC_PATTERN_UPLOAD.TYPE,
        url: ELECTRONIC_PATTERN_API.ELECTRONIC_PATTERN_UPLOAD.ENDPOINT,
        data: data,
      });

      dispatch({
        type: CREATE_ELECTRONIC_PATTERN_TYPE.CREATE_ELECTRONIC_PATTERN_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ELECTRONIC_PATTERN_TYPE.CREATE_ELECTRONIC_PATTERN_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createElectronicPatternPreUploadPDFFile(imageUrls, formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ELECTRONIC_PATTERN_TYPE.CREATE_ELECTRONIC_PATTERN_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      formData.append('file', formValues[ELECTRONIC_PATTERN_FIELD_NAME.FILE]);
      const response = await httpRequest({
        method: ELECTRONIC_PATTERN_API.ELECTRONIC_PATTERN_PDF_UPLOAD.TYPE,
        url: ELECTRONIC_PATTERN_API.ELECTRONIC_PATTERN_PDF_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(
        createElectronicPatternUploadData(imageUrls, response.data, formValues),
      );
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ELECTRONIC_PATTERN_TYPE.CREATE_ELECTRONIC_PATTERN_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createElectronicPatternPreUploadData(formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ELECTRONIC_PATTERN_TYPE.CREATE_ELECTRONIC_PATTERN_UPLOAD_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[ELECTRONIC_PATTERN_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[ELECTRONIC_PATTERN_FIELD_NAME.IMAGES][key][
            ELECTRONIC_PATTERN_FIELD_NAME.IMAGE
          ],
        );
      }
      const response = await httpRequest({
        method: ELECTRONIC_PATTERN_API.ELECTRONIC_PATTERN_IMAGE_UPLOAD.TYPE,
        url: ELECTRONIC_PATTERN_API.ELECTRONIC_PATTERN_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(
        createElectronicPatternPreUploadPDFFile(response.data, formValues),
      );
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ELECTRONIC_PATTERN_TYPE.CREATE_ELECTRONIC_PATTERN_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}