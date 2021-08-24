import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation';

import { SLIDER_EDIT_API } from './slider-edit.constant';
import { SLIDER_EDIT_ACTION_TYPE } from './slider-edit.type';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';

export function sliderEditLoadData(currentLang, id) {
  return async (dispatch) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SLIDER_EDIT_API.SLIDER_EDIT_LOAD_DATA.TYPE,
        url: SLIDER_EDIT_API.SLIDER_EDIT_LOAD_DATA.ENDPOINT(currentLang, id),
      });

      dispatch({
        type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_SUCCESS,
        sliderEdit: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function sliderEditUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_PENDING,
    });

    try {
      const formData = new FormData();
      formData.append('file', data.image);

      const fileResponse = await  httpRequest({
        method: SLIDER_EDIT_API.IMAGE_LOAD.TYPE,
        url: SLIDER_EDIT_API.IMAGE_LOAD.ENDPOINT,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      await httpRequest({
        method: SLIDER_EDIT_API.SLIDER_EDIT_UPLOAD_DATA.TYPE,
        url: SLIDER_EDIT_API.SLIDER_EDIT_UPLOAD_DATA.ENDPOINT(data.sliderId),
        data: {
          buttonUrl: data.buttonUrl,
          headingTextRu: data.headingTextRu,
          buttonTextRu: data.buttonTextRu,
          imageUrl: fileResponse.data.id,
        },
      });

      dispatch({ type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_SUCCESS });
      redirect(SLIDER_LIST_ROUTE_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function sliderEditRemove(id) {
  return async (dispatch) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SLIDER_EDIT_API.SLIDER_EDIT_REMOVE.TYPE,
        url: SLIDER_EDIT_API.SLIDER_EDIT_REMOVE.ENDPOINT(id),
      });

      dispatch({ type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_SUCCESS });
      redirect(SLIDER_LIST_ROUTE_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
