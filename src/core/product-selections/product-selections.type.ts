import { FormikHandlers, FormikHelpers, FormikState } from 'formik';
import { CardMultiType } from 'src/lib/element/card';

export const PRODUCT_SELECTIONS_FILTER = {
  FILTER: 'filter-recommendations',
  FIND: 'find-recommendations',
};

export enum PRODUCT_SELECTIONS_ACTION_TYPE {
  PRODUCTS_LOAD_PENDING = 'PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_PENDING',
  PRODUCTS_LOAD_SUCCESS = 'PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_SUCCESS',
  PRODUCTS_LOAD_ERROR = 'PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_ERROR',

  PRODUCTS_UPLOAD_PENDING = 'PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING',
  PRODUCTS_UPLOAD_SUCCESS = 'PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS',
  PRODUCTS_UPLOAD_ERROR = 'PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR',
}

export interface productSelectionBlock {
  title: string;
  items: CardMultiType[];
}
export interface productSelectionFormValues {
  products: productSelectionBlock[];
}
export interface ProductSelectionsComponentProps {
  success: boolean;
  pending: boolean;
  error: boolean;
  errorMessage: string;
  listItems: CardMultiType[];
  onSubmit: any;
  initialValues: productSelectionFormValues;
  initialBlock: productSelectionBlock;
}
export interface CompilationArrayProps {
  formik: FormikHandlers &
    FormikHelpers<productSelectionFormValues> &
    FormikState<productSelectionFormValues>;
  listItems: CardMultiType[];
  initialBlock: productSelectionBlock;
}
export interface CompilationBlockProps {
  listItems: CardMultiType[];
  index: number;
  value: productSelectionBlock;
  remove: Function;
  formik: FormikHandlers &
    FormikHelpers<productSelectionFormValues> &
    FormikState<productSelectionFormValues>;
}
export interface CompilationModalProps {
  listItems: CardMultiType[];
  handleAdd: Function;
}
export enum formNames {
  productBlockArray = 'products',
  blockName = 'title',
  blockItems = 'items',
}
export function getIndexName(index: number) {
  return `${formNames.productBlockArray}.${index}.${formNames.blockName}`;
}
export function getIndexItems(index: number) {
  return `${formNames.productBlockArray}.${index}.${formNames.blockItems}`;
}
