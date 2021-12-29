import { useEffect, useReducer } from 'react';
import { redirect } from 'src/main/navigation';
import { SLIDER_EDIT_ROUTE_PATH } from '../slider-edit';
import { getSlidersAction, slideRemoveAction } from './slider-list.action';
import { SliderListComponent } from './slider-list.component';
import {
  SLIDER_LIST_ACTION_TYPE,
  SliderListStateType,
  SliderListActionType,
} from './slider-list.type';

const initialState = {
  data: [],
  error: '',
  pending: false,
};
function sliderListReducer(
  state: SliderListStateType,
  action: SliderListActionType,
) {
  switch (action.type) {
    case SLIDER_LIST_ACTION_TYPE.ADD_SLIDE:
      return {
        ...state,
        data: action.data,
      };
    case SLIDER_LIST_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: '',
      };
    case SLIDER_LIST_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case SLIDER_LIST_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function SliderListContainer() {
  const [state, setState] = useReducer(sliderListReducer, initialState);
  useEffect(() => {
    getSlidersAction()(setState);
  }, []);

  const addSlide = () => {
    const newSlide = {
      id: 'new' + state.data?.length,
      name: 'Новый слайд - ' + state.data?.length,
      image: '',
    };
    setState({
      type: SLIDER_LIST_ACTION_TYPE.ADD_SLIDE,
      data: state.data?.concat(newSlide),
    });
  };

  const editSlide = (id: string) => {
    redirect(SLIDER_EDIT_ROUTE_PATH, { params: { id: id } });
  };

  const removeSlide = (id: string) => {
    slideRemoveAction(id)(setState, state);
  };

  return (
    <SliderListComponent
      editSlide={editSlide}
      removeSlide={removeSlide}
      addSlide={addSlide}
      state={state}
    />
  );
}
