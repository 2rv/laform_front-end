export interface FieldPropsType {
  className?: string;
  titleTid: string;
  placeholderTid: string;
  name: string;
  type?: string;
  value: string;
  error: string;
  onChange: any;
  onBlur: any;
}

export interface InputProps {
  readonly error: boolean;
}
