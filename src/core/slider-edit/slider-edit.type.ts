import {
  FormikErrors,
  FormikHandlers,
  FormikHelpers,
  FormikState,
} from 'formik';
import { ChangeEvent } from 'react';
import { FileType } from 'src/lib/basic-types';

export enum SLIDER_EDIT_ACTION_TYPE {
  CREATE_PENDING = 'CREATE_PENDING',
  CREATE_SUCCESS = 'CREATE_SUCCESS',
  CREATE_ERROR = 'CREATE_ERROR',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  UPDATE_PENDING = 'UPDATE_PENDING',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  UPDATE_ERROR = 'UPDATE_ERROR',

  REMOVE_PENDING = 'REMOVE_PENDING',
  REMOVE_SUCCESS = 'REMOVE_SUCCESS',
  REMOVE_ERROR = 'REMOVE_ERROR',
}
export enum SLIDER_EDIT_FIELD_NAME {
  TITLE_TEXT = 'titleText',
  BUTTON_TEXT = 'buttonText',
  TITLE_TEXT_COLOR = 'titleTextColor',
  BUTTON_TEXT_COLOR = 'buttonTextColor',
  BUTTON_COLOR = 'buttonColor',
  IS_BUTTON = 'isButton',
  BUTTON_PATH = 'buttonPath',
  SLIDE_IMAGE = 'imageUrl',
}

export type SliderEditValue = {
  [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT]: string;
  [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]: string;

  [SLIDER_EDIT_FIELD_NAME.IS_BUTTON]: boolean;
  [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT]?: string;
  [SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]?: string;
  [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]?: string;
  [SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]?: string;

  [SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE]?: FileType;
};
type FormikType = FormikHandlers &
  FormikHelpers<SliderEditValue> &
  FormikState<SliderEditValue> &
  FormikErrors<SliderEditValue>;

export type SliderEditStateType = {
  createPending: boolean;
  createSuccess: boolean;
  createError?: string;

  getPending: boolean;
  initialValues?: SliderEditValue;
  getError?: string;

  removePending: boolean;
  removeSuccess: boolean;
  removeError?: string;

  updatePending: boolean;
  updateSuccess: boolean;
  updateError?: string;
};
export type SliderEditActionType = {
  type: SLIDER_EDIT_ACTION_TYPE;
  data?: SliderEditValue;
  error?: string;
};
export type SliderEditComponentProps = {
  state: SliderEditStateType;
  formik: FormikType;
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
};
export type SlidePreviewProps = {
  formik: FormikType;
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
};
export type SlideEditFormProps = {
  state: SliderEditStateType;
  formik: FormikType;
  onRemove: () => void;
};
