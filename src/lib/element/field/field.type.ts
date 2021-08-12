export interface FieldPropsType {
  className?: string;
  titleTid?: string;
  placeholderTid: string;
  name: string;
  type?: string;
  value: string;
  error: string;
  onChange: any;
  onBlur: any;
  isFindInput?: boolean;
  width?: number;
  auto?: boolean;
  full?: boolean;
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
}

export interface CheckboxPropsType {
  titleTid?: string;
  labelTid: string;
  name: string;
  checked: boolean;
  onChange: any;
  onBlur: any;
}

export interface SelectPropsType {
  titleTid?: string;
  name: string;
  value?: any;
  options: { id: number; tid: string; tvalue: any }[];
  onChange: any;
  onBlur: any;
  width?: number;
  auto?: boolean;
  full?: boolean;
}
