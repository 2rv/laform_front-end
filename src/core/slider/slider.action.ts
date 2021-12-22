import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { BasicSlideType } from 'src/lib/basic-types';
import { httpRequest } from 'src/main/http';
import { SliderActionType, SLIDER_ACTION_TYPE } from './slider.type';

export function sliderLoadData(lang: 'ru' | 'en') {
  return async (dispatch: Dispatch<SliderActionType>) => {
    dispatch({
      type: SLIDER_ACTION_TYPE.PENDING,
    });

    try {
      const response: AxiosResponse<BasicSlideType[]> = await httpRequest({
        method: 'GET',
        url: '/slider/get',
        params: {
          lang: lang,
        },
      });

      dispatch({
        type: SLIDER_ACTION_TYPE.SUCCESS,
        data: response.data.map((data) => ({
          id: data.id,
          titleText: data.headingTextRu,
          titleTextColor: data.titleTextColor,
          buttonText: data.buttonTextRu,
          buttonTextColor: data.buttonTextColor,
          buttonColor: data.buttonColor,
          isButton: data.isHaveButton,
          buttonPath: data.buttonUrl,
          image: data.imageUrl?.fileUrl,
        })),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SLIDER_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
