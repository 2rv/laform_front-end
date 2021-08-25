export interface FormFilterContainerPropsType {
  findPlaceholderTid: string;
  filterOptions: { id: number; tid: string; tvalue: any }[];
  findFieldName: string;
  filterSelectName: string;
  initialValue: object;
  setFilter: any;
  onSubmit: any;
}

export interface FormFilterComponentPropsType {
  findPlaceholderTid: string;
  filterOptions: { id: number; tid: string; tvalue: any }[];
  findFieldName: string;
  filterSelectName: string;
  formik: any;
}
