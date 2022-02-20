import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { redirect } from 'src/main/navigation';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import {
  SliderEditActionType,
  SliderEditValue,
  SLIDER_EDIT_ACTION_TYPE,
  SLIDER_EDIT_FIELD_NAME,
} from './slider-edit.type';
import { convertForSave, convertForChange } from './slider-edit.convert';
import { AxiosResponse } from 'axios';
import { BasicFileType, FileType } from 'src/lib/basic-types';

async function uploadFileAction(
  image?: FileType,
): Promise<AxiosResponse<BasicFileType> | { data: BasicFileType }> {
  if (!image) throw Error('Нету картинки');
  if (!image.file) {
    return {
      data: {
        id: image.id || '',
        fileUrl: image?.fileUrl,
      },
    };
  }

  const formData = new FormData();
  formData.append('file', image.file);

  return await httpRequest({
    method: 'POST',
    url: '/file/create',
    data: formData,
  });
}

export function getSlideByIdAction(id: string) {
  return async (dispatch: Dispatch<SliderEditActionType>) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.GET_PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/slider/get/' + id,
      });

      dispatch({
        type: SLIDER_EDIT_ACTION_TYPE.GET_SUCCESS,
        data: convertForChange(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SLIDER_EDIT_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function removeSlideAction(id: string) {
  return async (dispatch: Dispatch<SliderEditActionType>) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.REMOVE_PENDING,
    });

    try {
      await httpRequest({
        method: 'DELETE',
        url: '/slider/delete/' + id,
      });

      dispatch({ type: SLIDER_EDIT_ACTION_TYPE.REMOVE_SUCCESS });
      redirect(SLIDER_LIST_ROUTE_PATH);
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SLIDER_EDIT_ACTION_TYPE.REMOVE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function updateSlideAction(id: string, values: SliderEditValue) {
  return async (dispatch: Dispatch<SliderEditActionType>) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.UPDATE_PENDING,
    });

    try {
      const image = await uploadFileAction(
        values[SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE],
      );
      const sliderData = convertForSave(image.data, values);
      await httpRequest({
        method: 'PUT',
        url: '/slider/update/' + id,
        data: sliderData,
      });

      dispatch({ type: SLIDER_EDIT_ACTION_TYPE.UPDATE_SUCCESS });
      redirect(SLIDER_LIST_ROUTE_PATH);
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SLIDER_EDIT_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function saveSlideAction(values: SliderEditValue) {
  return async (dispatch: Dispatch<SliderEditActionType>) => {
    dispatch({
      type: SLIDER_EDIT_ACTION_TYPE.CREATE_PENDING,
    });

    try {
      const image = await uploadFileAction(
        values[SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE],
      );
      const sliderData = convertForSave(image.data, values);
      await httpRequest({
        url: 'slider/create',
        method: 'POST',
        data: sliderData,
      });

      dispatch({ type: SLIDER_EDIT_ACTION_TYPE.CREATE_SUCCESS });
      redirect(SLIDER_LIST_ROUTE_PATH);
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SLIDER_EDIT_ACTION_TYPE.CREATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
