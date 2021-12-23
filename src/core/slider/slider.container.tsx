import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { sliderLoadData } from './slider.action';
import { SliderComponent } from './slider.component';
import {
  SLIDER_ACTION_TYPE,
  SliderStateType,
  SliderActionType,
} from './slider.type';

const initialState = {
  error: '',
  pending: false,
  slidersData: [],
};

function sliderReduce(state: SliderStateType, action: SliderActionType) {
  switch (action.type) {
    case SLIDER_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };
    case SLIDER_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        slidersData: action.data || [],
      };
    case SLIDER_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function SliderContainer() {
  const [state, setState] = useReducer(sliderReduce, initialState);
  const lang = useSelector((state: any) =>
    state[LANG_STORE_NAME].active.toLowerCase(),
  );

  useEffect(() => {
    sliderLoadData(lang)(setState);
  }, []);

  return <SliderComponent state={state} />;
}
