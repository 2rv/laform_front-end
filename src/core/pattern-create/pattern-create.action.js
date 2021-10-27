import { httpRequest } from '../../main/http';
import { CREATE_PATTERN_API } from './pattern-create.constant';
import {
  convertForUpload,
  convertForPreUploadPDFFiles,
  convertForChange,
  convertForUpdateImage,
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
          formValues[CREATE_PATTERN_FIELD_NAME.IMAGES][key].file,
        );
      }
      const response = await httpRequest({
        method: CREATE_PATTERN_API.PATTERN_IMAGE_UPLOAD.TYPE,
        url: CREATE_PATTERN_API.PATTERN_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(createPatternPreUploadPDFFiles(response.data, formValues));
    } catch (err) {
      console.log(err);
      if (err.response) {
        dispatch({
          type: CREATE_PATTERN_ACTION_TYPE.CREATE_PATTERN_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function patternLoadData(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_LOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: CREATE_PATTERN_API.PATTERN_LOAD.TYPE,
        url: CREATE_PATTERN_API.PATTERN_LOAD.ENDPOINT(id),
      });
      dispatch({
        type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_LOAD_SUCCESS,
        data: convertForChange(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updatePatternProduct(id, newImages, pdfFileUrls, formValues) {
  return async (dispatch) => {
    try {
      const updatedImagesArray = convertForUpdateImage(newImages, formValues);
      const data = convertForUpload(
        updatedImagesArray,
        pdfFileUrls,
        formValues,
      );
      const response = await httpRequest({
        method: CREATE_PATTERN_API.PATTERN_CHANGE.TYPE,
        url: CREATE_PATTERN_API.PATTERN_CHANGE.ENDPOINT(id),
        data: data,
      });
      dispatch({
        type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_UPDATE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updatePatternPreUploadPDFFiles(id, imageUrls, formValues) {
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
      dispatch(
        createPatternUploadData(id, imageUrls, response.data, formValues),
      );
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

export function updatePatternProductPreUpload(id, formValues) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_UPDATE_PENDING,
    });
    try {
      const formData = new FormData();
      for (const key in formValues[PATTERN_FIELD_NAME.IMAGES]) {
        formData.append(
          'files',
          formValues[PATTERN_FIELD_NAME.IMAGES][key].file,
        );
      }

      const response = await httpRequest({
        method: CREATE_PATTERN_API.PATTERN_IMAGE_UPLOAD.TYPE,
        url: CREATE_PATTERN_API.PATTERN_IMAGE_UPLOAD.ENDPOINT,
        data: formData,
      });
      dispatch(updatePatternPreUploadPDFFiles(id, response.data, formValues));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
