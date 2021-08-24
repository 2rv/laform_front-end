export interface FormFilterContainerPropsType {
  findPlaceholderTid: string;
  filterOptions: { id: number; tid: string; tvalue: any }[];
  findFieldName: string;
  filterSelectName: string;

  initialValue: object;
  onSubmit: any;
}

export interface FormFilterComponentPropsType {
  findPlaceholderTid: string;
  filterOptions: { id: number; tid: string; tvalue: any }[];
  findFieldName: string;
  filterSelectName: string;

  values: any;
  errors: any;
  touched: any;
  handleChange: any;
  handleBlur: any;
  handleSubmit: any;
}
