export interface ModifierContainerProps {
  titleTid?: string;
  placeholderTid: string;
  colorTitleTid?: string;
  name: string;
  colorName: string;
  values: any;
  errors: any;
  touched: any;
  handleChange: Function;
  handleBlur: Function;
}

export interface ModifierComponentProps {
  titleTid?: string;
  placeholderTid: string;
  colorTitleTid?: string;
  name: string;
  colorName: string;
  values: any;
  error: any;
  handleChange: Function;
  handleBlur: Function;
  colors: { id: string; tid: string }[];
}
