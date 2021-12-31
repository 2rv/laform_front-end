import { CardCompilationType } from '../products-compilation/products-compilation.type';

export enum HOME_ACTION_TYPE {
  GET_COMPILATION_PENDING = 'GET_COMPILATION_PENDING',
  GET_COMPILATION_SUCCESS = 'GET_COMPILATION_SUCCESS',
  GET_COMPILATION_ERROR = 'GET_COMPILATION_ERROR',
}
export type HomeStateType = {
  getPending: boolean;
  compilations: CardCompilationType[];
  getError?: string;
};
export type HomeActionType = {
  type: HOME_ACTION_TYPE;
  error?: string;
  data?: CardCompilationType[];
};
export type HomeComponentProps = {
  state: HomeStateType;
};
