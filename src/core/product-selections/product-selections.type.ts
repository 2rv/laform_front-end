import { FormikHandlers, FormikHelpers, FormikState } from 'formik';
import {
  BasicArticleType,
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
  BasicRecommendationProducsType,
} from 'src/lib/basic-types';
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

  DELETE_PENDING = 'PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_PENDING',
  DELETE_SUCCESS = 'PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_SUCCESS',
  DELETE_ERROR = 'PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_ERROR',
}

export interface CompilationsPerformProps {
  compilationRes: {
    id: string;
    title: string;
    path: string;
    compilationProducts: BasicRecommendationProducsType[];
  }[];
  patternRes: BasicPatternType[];
  articleRes: BasicArticleType[];
  sewingRes: BasicSewingGoodType[];
  masterRes: BasicMasterClassType[];
}

export interface productSelectionBlock {
  id?: string;
  title: string;
  path: string;
  compilationProducts: CardMultiType[];
}
export interface productSelectionFormValues {
  products: productSelectionBlock[];
}
export interface ProductSelectionsComponentProps {
  uploadSuccess: boolean;
  uploadPending: boolean;
  uploadError: boolean;
  uploadErrorMessage: string;

  deleteSuccess: boolean;
  deletePending: boolean;
  deleteError: boolean;
  deleteErrorMessage: string;

  listItems: CardMultiType[];
  onSubmit: any;
  initialValues: productSelectionFormValues;
  initialBlock: productSelectionBlock;
  compilationDelete: Function;
}
export interface CompilationArrayProps {
  formik: FormikHandlers &
    FormikHelpers<productSelectionFormValues> &
    FormikState<productSelectionFormValues>;
  listItems: CardMultiType[];
  initialBlock: productSelectionBlock;
  compilationDelete: Function;
}
export interface CompilationBlockProps {
  listItems: CardMultiType[];
  index: number;
  value: productSelectionBlock;
  remove: Function;
  formik: FormikHandlers &
    FormikHelpers<productSelectionFormValues> &
    FormikState<productSelectionFormValues>;
  compilationDelete: Function;
}
export interface CompilationModalProps {
  listItems: CardMultiType[];
  handleAdd: Function;
}
export enum formNames {
  productBlockArray = 'products',
  blockName = 'title',
  blockPath = 'path',
  blockItems = 'compilationProducts',
}
export function getIndexName(index: number) {
  return `${formNames.productBlockArray}.${index}.${formNames.blockName}`;
}
export function getIndexPath(index: number) {
  return `${formNames.productBlockArray}.${index}.${formNames.blockPath}`;
}
export function getIndexItems(index: number) {
  return `${formNames.productBlockArray}.${index}.${formNames.blockItems}`;
}
