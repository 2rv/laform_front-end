import { redirect } from 'src/main/navigation';
import { httpRequest } from '../../main/http';
import { ALL_PRODUCTS_ROUTE_PATH } from '../all-products';
import { CREATE_PATTERN_API } from './pattern-create.constant';
import {
  convertForUpload,
  convertForPreUploadPDFFiles,
  convertForChange,
  convertForUpdateImage,
  convertForUpdateFilesPdf,
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
      const result = await Promise.all(
        files.map(async (files) => {
          const formData = new FormData();
          for (const file of files) {
            formData.append(
              'files',
              file?.productFilePdf || file?.optionFilePdf,
            );
          }

          const response = await httpRequest({
            method: CREATE_PATTERN_API.PATTERN_PDF_UPLOAD.TYPE,
            url: CREATE_PATTERN_API.PATTERN_PDF_UPLOAD.ENDPOINT,
            data: formData,
          });
          return response.data;
        }),
      );
      dispatch(createPatternUploadData(imageUrls, result, formValues));
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
      const updatedPdfFilesArray = convertForUpdateFilesPdf(
        pdfFileUrls,
        formValues,
      );
      const data = convertForUpload(
        updatedImagesArray,
        updatedPdfFilesArray,
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
      const filesArray = convertForPreUploadPDFFiles(formValues);

      const result = await Promise.all(
        filesArray.map(async (files) => {
          const formData = new FormData();
          for (const file of files) {
            formData.append('files', file.productFilePdf || file.optionFilePdf);
          }

          const response = await httpRequest({
            method: CREATE_PATTERN_API.PATTERN_PDF_UPLOAD.TYPE,
            url: CREATE_PATTERN_API.PATTERN_PDF_UPLOAD.ENDPOINT,
            data: formData,
          });
          return response.data;
        }),
      );
      dispatch(updatePatternProduct(id, imageUrls, result, formValues));
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

export function patternDelete(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_DELETE_PENDING,
    });

    try {
      await httpRequest({
        method: CREATE_PATTERN_API.PATTERN_DELETE.TYPE,
        url: CREATE_PATTERN_API.PATTERN_DELETE.ENDPOINT(id),
      });

      dispatch({
        type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_DELETE_SUCCESS,
      });

      redirect(ALL_PRODUCTS_ROUTE_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_DELETE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

async function uploadPdfFiles(data) {}
