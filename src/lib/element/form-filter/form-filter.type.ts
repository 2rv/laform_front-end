export interface FormFilterContainerPropsType {
  findPlaceholderTid: string;
  categoryOptions: { id: number; tid: string; tvalue: any }[];
  tagsOptions: { id: number; tid: string; tvalue: any }[];

  fieldNameFind: string;
  selectNameCategory: string;
  selectNameTags: string;

  initialValue: object;
  validation: any;
  onSubmit: any;

  pending: boolean;
  success: boolean;
  error: boolean;
  errorMessage: any;
  filterProducts: Function;
  sortProducts: Function;
}

export interface FormFilterComponentPropsType {
  findPlaceholderTid: string;
  categoryOptions: { id: number; tid: string; tvalue: any }[];
  tagsOptions: { id: number; tid: string; tvalue: any }[];

  fieldNameFind: string;
  selectNameCategory: string;
  selectNameTags: string;

  values: any;
  errors: any;
  touched: any;
  handleChange: any;
  handleBlur: any;
  handleSubmit: any;

  pending: boolean;
  success: boolean;
  error: boolean;
  errorMessage: any;
  filterProducts: Function;
  sortProducts: Function;
}
