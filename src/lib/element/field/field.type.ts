import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface BasicFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  titleTid?: string;
  placeholderTid?: string;
  error?: string | false;
}
export interface FieldCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  titleTid: string;
  labelTid: string;
  onClick: () => void;
}
export interface FieldSelectProps {
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
  disabled?: boolean;
  textValue?: boolean;
  multiple?: boolean;
  defaultTid?: string;
}
export interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  titleTid?: string;
  placeholderTid?: string;
  error?: string;
  minHeight?: number;
  maxHeight?: number;
}
export interface FilefieldProps {
  titleTid?: string;
  placeholderTid: string;
  name: string;
  value: any;
  error?: string;
  onChange: any;
  accept: any;
  onBlur: any;
  disabled?: boolean;
}
export interface ComplexityFieldProps {
  name: string;
  value: number;
  title: string;
  onChange: Function;
}
