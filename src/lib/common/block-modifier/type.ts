import { ChangeEventHandler, FocusEventHandler } from 'react';

export interface ModifierContainerProps {
  titleTid?: string;
  placeholderTid: string;
  colorTitleTid?: string;
  name: string;
  colorName: string;
  values: any;
  errors: any;
  touched: any;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
}

export interface ModifierComponentProps {
  titleTid?: string;
  placeholderTid: string;
  colorTitleTid?: string;
  name: string;
  colorName: string;
  values: any;
  error: any;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  colors: { id: string; tid: string }[];
}
