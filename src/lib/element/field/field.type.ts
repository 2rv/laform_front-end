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

}

export interface InputProps {
  readonly error: boolean;
}
