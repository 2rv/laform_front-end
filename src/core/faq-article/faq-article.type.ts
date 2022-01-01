import { BasicReactEditorType } from 'src/lib/basic-types';
import { ReactEditorChangeHandlerType } from 'src/lib/common/block-react-editor';

export enum FAQ_ACTION_TYPE {
  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  SAVE_PENDING = 'SAVE_PENDING',
  SAVE_SUCCESS = 'SAVE_SUCCESS',
  SAVE_ERROR = 'SAVE_ERROR',

  RESET = 'RESET',
}
export type FaqArticleContainerProps = {
  name: string;
  titleTid?: string;
};
export type FaqArticleStateType = {
  getPending: boolean;
  data?: BasicReactEditorType;
  getError?: string;

  savePending: boolean;
  saveSuccess: boolean;
  saveError?: string;
};
export type FaqArticleActionType = {
  type: FAQ_ACTION_TYPE;
  error?: string;
  data?: BasicReactEditorType;
};
export type FaqArticleComponentProps = {
  isAdmin: boolean;
  state: FaqArticleStateType;
  handleSave: () => void;
  handleChange: ReactEditorChangeHandlerType;

  disabled: boolean;
  titleTid?: string;
};
