import { httpRequest } from '../../main/http';
import { FAQ_PAGE_API } from './faq-page.constant';
import { FAQ_PAGE_ACTION_TYPE } from './faq-page.type';

export function faqPageUploadData() {
  return async (dispatch) => {
    dispatch({
      type: FAQ_PAGE_ACTION_TYPE.FAQ_PAGE_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: FAQ_PAGE_API.FAQ_PAGE_UPLOAD.TYPE,
        url: FAQ_PAGE_API.FAQ_PAGE_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: FAQ_PAGE_ACTION_TYPE.FAQ_PAGE_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: FAQ_PAGE_ACTION_TYPE.FAQ_PAGE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
