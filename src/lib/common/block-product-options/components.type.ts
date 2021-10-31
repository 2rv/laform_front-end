export interface ProductOptionsProps {
  errors: any;
  touched: any;
  values: any;
  setFieldValue: Function;
  handleChange: Function;
  handleBlur: Function;

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
}

export interface ProductOptionsOneProps {
  value: any;
  index: number;
  isFirst: boolean;
  isCount: boolean;
  isLength: boolean;
  handleChange: Function;
  handleBlur: Function;
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
}

export interface ProductOptionsTwoProps {
  index: number;
  value: any;

  isFile?: boolean;
  isFirst: boolean;
  isCount: boolean;
  isLength: boolean;
  handleChange: Function;
  handleBlur: Function;
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
}
export interface ProductOptionsThreeProps {
  isFirst: boolean;
  value: any;
  index: number;
  getFieldError: Function;
  remove: Function;
  handleChange: Function;
  handleBlur: Function;
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
  handleBlur: Function;
  setFieldValue: Function;
  handleChange: Function;

  productFileName: string;
  productFilesName: string;
}
