import { httpRequest } from 'src/main/http';
import {
  SliderListActionType,
  SliderListStateType,
  SLIDER_LIST_ACTION_TYPE,
  SlideType,
} from './slider-list.type';
import { Dispatch } from 'react';
import { BasicSlideType } from 'src/lib/basic-types';
import { AxiosResponse } from 'axios';

export function getSlidersAction() {
  return async (dispatch: Dispatch<SliderListActionType>) => {
    dispatch({
      type: SLIDER_LIST_ACTION_TYPE.PENDING,
    });

    try {
      const response: AxiosResponse<BasicSlideType[]> = await httpRequest({
        method: 'GET',
        url: 'slider/get',
        params: { lang: 'ru' },
      });
      const result: SlideType[] = response.data.map((item) => ({
        id: item.id,
        name: item.headingTextRu,
        image: item.imageUrl?.fileUrl,
        buttonText: item.buttonTextRu,
        buttonPath: item.buttonUrl,
      }));
      dispatch({
        type: SLIDER_LIST_ACTION_TYPE.SUCCESS,
        data: result,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SLIDER_LIST_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function slideRemoveAction(id: string) {
  return async (
    dispatch: Dispatch<SliderListActionType>,
    state: SliderListStateType,
  ) => {
    dispatch({
      type: SLIDER_LIST_ACTION_TYPE.PENDING,
    });
    try {
      if (!id.includes('new')) {
        await httpRequest({
          method: 'DELETE',
          url: 'slider/delete/' + id,
        });
      }
      dispatch({
        type: SLIDER_LIST_ACTION_TYPE.SUCCESS,
        data: state.data?.filter((item) => item.id !== id),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SLIDER_LIST_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
