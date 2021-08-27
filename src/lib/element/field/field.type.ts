export interface FieldPropsType {
  className?: string;
  titleTid?: string;
  placeholderTid: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  onChange: any;
  onBlur: any;
  isFindInput?: boolean;
  width?: number;
  disabled?: boolean;
  adaptive?: boolean;
}
export interface InputPropsType {
  className?: string;
  placeholder: string;
  name: string;
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
  name: string;
  value?: any;
  options: { id: number; tid: string; tvalue: any }[];
  onChange: any;
  onBlur?: any;
  width?: number;
  disabled?: boolean;
  adaptive?: boolean;
  textValue?: boolean;
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
