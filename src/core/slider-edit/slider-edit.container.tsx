import { ChangeEvent, useEffect, useReducer } from 'react';
import { useFormik } from 'formik';
import { redirect, getQuery } from 'src/main/navigation';
import { SliderEditComponent } from './slider-edit.component';
import { sliderEditValidate } from './slider-edit.validation';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import {
  SLIDER_EDIT_ACTION_TYPE,
  SLIDER_EDIT_FIELD_NAME,
  SliderEditStateType,
  SliderEditActionType,
  SliderEditValue,
} from './slider-edit.type';
import {
  getSlideByIdAction,
  removeSlideAction,
  saveSlideAction,
  updateSlideAction,
} from './slider-edit.action';
import { FileType } from 'src/lib/basic-types';

const initialState = {
  createPending: false,
  createSuccess: false,
  createError: '',

  getPending: false,
  initialValues: undefined,
  getError: '',

  removePending: false,
  removeSuccess: false,
  removeError: '',

  updatePending: false,
  updateSuccess: false,
  updateError: '',
};

function sliderEditReducer(
  state: SliderEditStateType,
  action: SliderEditActionType,
) {
  switch (action.type) {
    case SLIDER_EDIT_ACTION_TYPE.CREATE_PENDING:
      return {
        ...state,
        createPending: true,
        createSuccess: false,
        createError: '',
      };
    case SLIDER_EDIT_ACTION_TYPE.CREATE_SUCCESS:
      return {
        ...state,
        createPending: false,
        createSuccess: true,
      };
    case SLIDER_EDIT_ACTION_TYPE.CREATE_ERROR:
      return {
        ...state,
        createPending: false,
        createError: action.error,
      };

    case SLIDER_EDIT_ACTION_TYPE.REMOVE_PENDING:
      return {
        ...state,
        removePending: true,
        removeSuccess: false,
        removeError: '',
      };
    case SLIDER_EDIT_ACTION_TYPE.REMOVE_SUCCESS:
      return {
        ...state,
        removePending: false,
        removeSuccess: true,
      };
    case SLIDER_EDIT_ACTION_TYPE.REMOVE_ERROR:
      return {
        ...state,
        removePending: false,
        removeError: action.error,
      };

    case SLIDER_EDIT_ACTION_TYPE.UPDATE_PENDING:
      return {
        ...state,
        updatePending: true,
        updateSuccess: false,
        updateError: '',
      };
    case SLIDER_EDIT_ACTION_TYPE.UPDATE_SUCCESS:
      return {
        ...state,
        updatePending: false,
        updateSuccess: true,
      };
    case SLIDER_EDIT_ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        updatePending: false,
        updateError: action.error,
      };

    case SLIDER_EDIT_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getSuccess: false,
        getError: '',
      };
    case SLIDER_EDIT_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        initialValues: action.data,
      };
    case SLIDER_EDIT_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };

    default:
      return state;
  }
}

export function SliderEditContainer() {
  const id = getQuery('id');
  const isNewSlider = id?.includes('new');
  const [state, setState] = useReducer(sliderEditReducer, initialState);

  useEffect(() => {
    if (!isNewSlider && typeof id === 'string' && id) {
      getSlideByIdAction(id)(setState);
    }
  }, []);

  const initialValues = () => {
    return (
      state.initialValues || {
        [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT]: '',
        [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]: '#ffffff',

        [SLIDER_EDIT_FIELD_NAME.IS_BUTTON]: true,
        [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT]: '',
        [SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]: '#ffffff',
        [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]: '#000',
        [SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]: '',

        [SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE]: undefined,
      }
    );
  };

  const onSubmit = (values: SliderEditValue) => {
    if (isNewSlider) {
      saveSlideAction(values)(setState);
    } else if (typeof id === 'string' && id) {
      updateSlideAction(id, values)(setState);
    }
  };

  const onRemove = () => {
    if (isNewSlider) {
      redirect(SLIDER_LIST_ROUTE_PATH);
    } else if (typeof id === 'string' && id) {
      removeSlideAction(id);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    validate: sliderEditValidate,
    initialValues: initialValues(),
    onSubmit: onSubmit,
  });

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.split('/')[0] === 'image') {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const value: FileType = {
            fileUrl: reader.result,
            file: file,
          };

          formik.setFieldValue(SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE, value);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <SliderEditComponent
      state={state}
      formik={formik}
      onChangeImage={onChangeImage}
      onRemove={onRemove}
    />
  );
}
