import { httpRequest } from '../../main/http';
import { SLIDER_LIST_API } from './slider-list.constant';
import { SLIDER_LIST_ACTION_TYPE } from './slider-list.type';
import { convertSliderData } from './slider-list.convert';
import { NEW_SLIDER_FORM_DATA, SLIDER_EDIT_FIELD_NAME } from '../slider-edit';

export function sliderListUploadData() {
  return (dispatch) => {
    const slider = { id: 'new', name: NEW_SLIDER_FORM_DATA[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT], image: null };
    dispatch({ type: SLIDER_LIST_ACTION_TYPE.CREATE_SLIDER, slider });
  };
}

export function sliderListLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: SLIDER_LIST_ACTION_TYPE.SLIDER_LIST_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SLIDER_LIST_API.SLIDER_LIST_LOAD_DATA.TYPE,
        url: SLIDER_LIST_API.SLIDER_LIST_LOAD_DATA.ENDPOINT(currentLang),
      });

      const data = convertSliderData(response.data);

      dispatch({
        type: SLIDER_LIST_ACTION_TYPE.SLIDER_LIST_UPLOAD_SUCCESS,
        sliderList: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SLIDER_LIST_ACTION_TYPE.SLIDER_LIST_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function sliderItemRemove(index) {
  return (dispatch) => {
    dispatch({ type: SLIDER_LIST_ACTION_TYPE.REMOVE_SLIDER, index });
  };
}

export function sliderItemRemoveFromServer(currentLang, id) {
  return async (dispatch) => {
    dispatch({
      type: SLIDER_LIST_ACTION_TYPE.SLIDER_LIST_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SLIDER_LIST_API.SLIDER_ITEM_REMOVE.TYPE,
        url: SLIDER_LIST_API.SLIDER_ITEM_REMOVE.ENDPOINT(id),
      });

      dispatch({ type: SLIDER_LIST_ACTION_TYPE.SLIDER_LIST_UPLOAD_SUCCESS });
      dispatch(sliderListLoadData(currentLang));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SLIDER_LIST_ACTION_TYPE.SLIDER_LIST_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
