import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation';

import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import { SLIDER_EDIT_API } from './slider-edit.constant';
import { convertNewSliderData, convertSliderEditData } from './slider-edit.convert';
import {
  SLIDER_EDIT_ACTION_TYPE,
  SLIDER_EDIT_FIELD_NAME,
  NEW_SLIDER_FORM_DATA,
} from './slider-edit.type';

export function sliderEditLoadData(currentLang, id, isNewSlider) {
  return async (dispatch) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_PENDING,
    });

    try {
      let sliderEdit;
      if (isNewSlider) {
        sliderEdit = convertNewSliderData();
      } else {
        const response = await httpRequest({
          method: SLIDER_EDIT_API.SLIDER_EDIT_LOAD_DATA.TYPE,
          url: SLIDER_EDIT_API.SLIDER_EDIT_LOAD_DATA.ENDPOINT(currentLang, id),
        });

        sliderEdit = convertSliderEditData(response.data);
      }

      dispatch({
        type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_SUCCESS,
        sliderEdit,
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

export function sliderEditUploadData(id, sliderImage, sliderData) {
  return async (dispatch) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_PENDING,
    });

    try {
      let data = sliderData;
      if (!sliderImage.id) {
        const fileResponse = await fileUpload(sliderImage.file);
        data = { ...data, imageUrl: fileResponse };
      }

      await httpRequest({
        method: SLIDER_EDIT_API.SLIDER_EDIT_UPLOAD_DATA.TYPE,
        url: SLIDER_EDIT_API.SLIDER_EDIT_UPLOAD_DATA.ENDPOINT(id),
        data,
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

export function createSlider(sliderImage, data) {
  return async (dispatch) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPLOAD_PENDING,
    });

    try {
      const fileResponse = await fileUpload(sliderImage.file);
      await httpRequest({
        method: SLIDER_EDIT_API.CREATE_SLIDER.TYPE,
        url: SLIDER_EDIT_API.CREATE_SLIDER.ENDPOINT,
        data: {
          ...data,
          imageUrl: fileResponse,
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

export function sliderEditUpdateImage(image) {
  return (dispatch) => {
    dispatch({ type: SLIDER_EDIT_ACTION_TYPE.SLIDER_EDIT_UPDATE_IMAGE, image });
  };
}

const fileUpload = async (file) => {
  if (!file) {
    return null;
  }

  const formData = new FormData();
  formData.append('file', file);

  const response = await httpRequest({
    method: SLIDER_EDIT_API.IMAGE_LOAD.TYPE,
    url: SLIDER_EDIT_API.IMAGE_LOAD.ENDPOINT,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data.id;
};
