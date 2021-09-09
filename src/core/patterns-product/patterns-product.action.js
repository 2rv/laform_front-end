import { httpRequest } from '../../main/http';
import { PATTERNS_PRODUCT_API } from './patterns-product.constant';
import { PATTERNS_PRODUCT_ACTION_TYPE } from './patterns-product.type';

export function patternsProductUploadData(id, currentLang) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: PATTERNS_PRODUCT_API.PATTERNS_PRODUCT_UPLOAD.TYPE,
        url: PATTERNS_PRODUCT_API.PATTERNS_PRODUCT_UPLOAD.ENDPOINT(id, currentLang),
      });

      dispatch({
        type: PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_UPLOAD_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function patternsProductSendPdfToMail(body) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL_PENDING,
    });

    try {
      await httpRequest({
        method: PATTERNS_PRODUCT_API.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL.TYPE,
        url: PATTERNS_PRODUCT_API.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL.ENDPOINT,
        data: body,
      });

      dispatch({
        type: PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
