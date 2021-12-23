export interface SelectImageProps {
  titleTid: string;
  maxImages?: number;
  values: any;
  errors: any;
  setFieldValue: Function;
  name: string;
  touched: any;
}

export interface SelectImageComponentProps {
  titleTid: string;
  maxImages: number;
  values: any;
  error: any;
  handleAdd: Function;
  handleUpdate: Function;
  arrayName: string;
}
