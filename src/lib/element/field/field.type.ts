import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { FileType } from 'src/lib/basic-types';

export interface BasicFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  titleTid?: string;
  placeholderTid?: string;
  error?: string | false;
}
export interface FieldCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  titleTid: string;
  labelTid: string;
  error?: string;
}
export type FieldSelectOptionType = {
  id: number;
  tid: string;
  tvalue?: object;
};
export interface FieldSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  titleTid?: string;
  options: FieldSelectOptionType[];
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
export interface FilefieldProps extends InputHTMLAttributes<HTMLInputElement> {
  titleTid?: string;
  placeholderTid: string;
  error?: string;
  file?: FileType;
}
export interface ComplexityFieldProps {
  value: 0 | 1 | 2 | 3 | 4 | 5;
  title: string;
  onChange: Function;
}
