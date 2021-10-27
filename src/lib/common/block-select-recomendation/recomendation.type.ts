export const RECOMENDATION_FILTER = {
  FILTER: 'filter-recommendations',
  FIND: 'find-recommendations',
};

export enum RECOMENDATION_ACTION_TYPE {
  PRODUCTS_UPLOAD_PENDING = 'RECOMENDATION_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING',
  PRODUCTS_UPLOAD_SUCCESS = 'RECOMENDATION_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS',
  PRODUCTS_UPLOAD_ERROR = 'RECOMENDATION_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR',
}
export interface recommendationContainerProps {
  values: any;
  name: string;
  setFieldValue: Function;
}

export interface recommendationComponentProps {
  errorMessage: any;
  isError: any;
  isPending: any;
  isSuccess: any;
  listItems: any;
  selectedItems: any;
  handleChange: Function;
}
