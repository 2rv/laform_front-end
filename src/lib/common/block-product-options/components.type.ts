import { ChangeEventHandler, FocusEventHandler } from 'react';

export interface ProductOptionsProps {
  errors: any;
  touched: any;
  values: any;
  setFieldValue: Function;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;

  productPriceName: string;
  productDiscountName: string;
  productCountName?: string;
  productLengthName?: string;
  isFile?: boolean;
  isPattern?: boolean;
  isCount?: boolean;
  isLength?: boolean;
  initialOption: any;

  fieldArrayName: string;
  optionTypeName: string;
  optionSizeName: string;
  optionColorName: string;
  optionPriceName: string;
  optionDiscountName: string;
  optionCountName?: string;
  optionLengthName?: string;

  optionFileName?: string;
  productFileName?: string;

  optionFilesName?: string;
  productFilesName?: string;
  optionVisibilityName?: string;
}

export interface ProductOptionsOneProps {
  value: any;
  index: number;
  isFirst: boolean;
  isCount: boolean;
  isLength: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  getFieldError: Function;
  remove: Function;
  setNumber: Function;
  setTwoDigit: Function;
  setToHundred: Function;
  fieldArrayName: string;
  optionSizeName: string;
  optionColorName: string;
  optionPriceName: string;
  optionDiscountName: string;
  optionCountName: string;
  optionLengthName: string;
  optionVisibilityName: string;
  setVisibility: Function;
}

export interface ProductOptionsTwoProps {
  index: number;
  value: any;

  isFile?: boolean;
  isFirst: boolean;
  isCount: boolean;
  isLength: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  getFieldError: Function;
  remove: Function;
  setNumber: Function;
  setTwoDigit: Function;
  setToHundred: Function;
  setPdfFile: Function;
  fieldTitle: string;
  fieldPlaceholder: string;
  optionName: string;
  fieldArrayName: string;
  optionPriceName: string;
  optionDiscountName: string;
  optionCountName: string;
  optionLengthName: string;
  optionFileName: string;
  optionFilesName: string;
  optionVisibilityName: string;
  setVisibility: Function;
}
export interface ProductOptionsThreeProps {
  isFirst: boolean;
  value: any;
  index: number;
  getFieldError: Function;
  remove: Function;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  setNumber: Function;
  setTwoDigit: Function;
  setToHundred: Function;

  isLength: boolean;
  isCount: boolean;
  fieldArrayName: string;
  optionTypeName: string;
  optionSizeName: string;
  optionSizePriceName: number;
  optionColorName: string;
  optionColorPriceName: number;
  optionDiscountName: string;
  optionCountName: string;
  optionLengthName: string;
  optionVisibilityName: string;
  setVisibility: Function;
}

export interface ProductOptionsNoneProps {
  values: any;
  errors: any;
  touched: any;
  isFile: boolean;
  isLength: boolean;
  isCount: boolean;
  productPriceName: string;
  productDiscountName: string;
  productCountName: string;
  productLengthName: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  setFieldValue: Function;

  productFileName: string;
  productFilesName: string;
}
