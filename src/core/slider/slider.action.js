import { httpRequest } from '../../main/http';

import { SLIDER_API } from './slider.constant';
import { SLIDER_ACTION_TYPE } from './slider.type';
import { performSliderData } from './slider.convert';

export function sliderLoadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: SLIDER_ACTION_TYPE.SLIDER_LOAD_REQUEST_PENDING,
    });

    try {
      const { data } = await httpRequest({
        method: SLIDER_API.LOAD_SLIDES.METHOD,
        url: SLIDER_API.LOAD_SLIDES.ENDPOINT(currentLang),
      });

      const slides = data.map(performSliderData);

      dispatch({
        type: SLIDER_ACTION_TYPE.SLIDER_LOAD_REQUEST_SUCCESS,
        data: slides,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SLIDER_ACTION_TYPE.SLIDER_LOAD_REQUEST_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
