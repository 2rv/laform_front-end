export interface FieldPropsType {
  className?: string;
  titleTid?: string;
  placeholderTid?: string;
  name?: string;
  type?: string;
  value: string;
  error?: string;
  list?: any;
  onChange: any;
  onBlur?: any;
  isFindInput?: boolean;
  width?: number;
  disabled?: boolean;
  adaptive?: boolean;
}
export interface InputPropsType {
  className?: string;
  placeholder: string;
  name?: string;
  type?: string;
  value: string;
  error: string | boolean;
  onChange: any;
  onBlur: any;
  disabled?: boolean;
}
export interface CheckboxPropsType {
  titleTid?: string | any;
  labelTid?: string | any;
  name: string;
  checked: boolean;
  onClick?: any;
  onBlur?: any;
  disabled?: boolean;
  width?: number;
  adaptive?: boolean;
}
export interface SelectPropsType {
  titleTid?: string;
  name?: string;
  value?: any;
  options: {
    id: number | string;
    tid: string;
    tvalue?: any;
    hidden?: boolean;
  }[];
  onChange: any;
  onBlur?: any;
  width?: number;
  disabled?: boolean;
  adaptive?: boolean;
  textValue?: boolean;
  multiple?: boolean;
  defaultTid?: string;
}
export interface TextAreaPropsType {
  titleTid?: string;
  placeholderTid?: string;
  onChange?: any;
  onBlur?: any;
  name?: string;
  rows?: number;
  error?: string;
  children?: any;
  isFile?: any;
  isSend?: any;
  minHeight?: number;
  images: any;
  setImages: any;
  maxHeight?: number;
}
export interface FilefieldPropsType {
  titleTid?: string;
  placeholderTid: string;
  name: string;
  value: any;
  error?: string;
  onChange: any;
  accept: any;
  onBlur: any;
  width?: number;
  disabled?: boolean;
  adaptive?: boolean;
}
export interface MultiFieldPropsType {
  titleTid?: string;
  placeholderTid: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  onChange: any;
  onBlur: any;
  items?: [];
  width?: number;
  disabled?: boolean;
  adaptive?: boolean;
  setItems: any;
}
export interface ComplexityFieldProps {
  name: string;
  value: number;
  title: string;
  onChange: Function;
}
