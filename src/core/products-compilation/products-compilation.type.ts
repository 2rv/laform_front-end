import {
  FormikConfig,
  FormikErrors,
  FormikHandlers,
  FormikHelpers,
  FormikState,
} from 'formik';
import { CardMultiType, CardProductLinkType } from 'src/lib/element/card';

export enum PRODUCT_SELECTIONS_ACTION_TYPE {
  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  SAVE_PENDING = 'SAVE_PENDING',
  SAVE_SUCCESS = 'SAVE_SUCCESS',
  SAVE_ERROR = 'SAVE_ERROR',

  DELETE_PENDING = 'DELETE_PENDING',
  DELETE_SUCCESS = 'DELETE_SUCCESS',
  DELETE_ERROR = 'DELETE_ERROR',
}
export type ProductsCompilationStateType = {
  savePending: boolean;
  saveSuccess: boolean;
  saveError?: string;

  getPending: boolean;
  products: CompilationType[];
  getError?: string;

  removePending: boolean;
  removeSuccess: boolean;
  removeError?: string;
};
export type ProductsCompilationActionType = {
  type: PRODUCT_SELECTIONS_ACTION_TYPE;
  error?: string;
  products?: CompilationType[];
};
export type CompilationType = {
  id?: string;
  title: string;
  path?: string;
  compilationProducts: CardProductLinkType[];
  inEnglish: boolean;
};
export type CardCompilationType = {
  id?: string;
  title: string;
  path?: string;
  compilationProducts: CardMultiType[];
  inEnglish: boolean;
};

export type ProductsCompilationValues = {
  products: CompilationType[];
};

export interface ProductSelectionsComponentProps
  extends FormikConfig<ProductsCompilationValues> {
  state: ProductsCompilationStateType;
  initialBlock: CompilationType;
  onDelete: (id: string) => void;
}
export type ProductsCompilationBlockProps = {
  index: number;
  formik: FormikHandlers &
    FormikHelpers<ProductsCompilationValues> &
    FormikState<ProductsCompilationValues> &
    FormikErrors<ProductsCompilationValues>;
  value: CompilationType;
  remove: (i: number) => void;
  onDelete: (id: string) => void;
};
