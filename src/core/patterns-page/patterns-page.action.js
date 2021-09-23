import { httpRequest } from '../../main/http';
import { PATTERNS_PAGE_API } from './patterns-page.constant';
import { PATTERNS_PAGE_ACTION_TYPE } from './patterns-page.type';
import { convertPatternData } from './patterns-page.convert';

export function patternsPageUploadData(id) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PAGE_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: PATTERNS_PAGE_API.PATTERNS_PAGE_UPLOAD.TYPE,
        url: PATTERNS_PAGE_API.PATTERNS_PAGE_UPLOAD.ENDPOINT(id),
      });

      dispatch({
        type: PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PAGE_UPLOAD_SUCCESS,
        payload: convertPatternData(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PAGE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function patternProductSendPdfToMail(body) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL_PENDING,
    });

    try {
      await httpRequest({
        method: PATTERNS_PAGE_API.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL.TYPE,
        url: PATTERNS_PAGE_API.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL.ENDPOINT,
        data: body,
      });

      dispatch({
        type: PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PRODUCT_SEND_PDF_TO_MAIL_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
