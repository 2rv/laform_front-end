export interface ProductOptionsProps {
  errors: any;
  touched: any;
  values: any;
  setFieldValue: Function;
  handleChange: Function;
  handleBlur: Function;
  handleReset: Function;

  fieldArrayName: string;
  optionTypeName: number;

  productPriceName: string;
  productDiscountName: string;
  optionSizeName: string;
  optionSizePriceName: number;
  optionColorName: string;
  optionColorPriceName: number;

  optionDiscountName: string;
  initialOption: any;
}

export interface ProductOptionsOneProps {
  isFirst: boolean;
  value: any;
  index: number;
  fieldArrayName: string;

  optionTypeName: number;
  optionSizeName: string;
  optionSizePriceName: number;
  optionColorName: string;

  optionDiscountName: string;
  getFieldError: Function;
  setNumber: Function;
  remove: Function;
  handleChange: Function;
  handleBlur: Function;
  handleType: Function;
}

export interface ProductOptionsTwoProps {
  index: number;
  isFirst: boolean;
  value: any;
  fieldTitle: string;
  fieldPlaceholder: string;
  fieldArrayName: string;

  optionTypeName: number;
  optionName: string;
  optionPriceName: number;

  handleChange: Function;
  handleBlur: Function;
  getFieldError: Function;
  setNumber: Function;
  remove: Function;
  handleType: Function;
}

export interface ProductOptionsThreeProps {
  isFirst: boolean;
  value: any;
  index: number;
  fieldArrayName: string;

  optionTypeName: number;
  optionSizeName: string;
  optionSizePriceName: number;
  optionColorName: string;
  optionColorPriceName: number;

  optionDiscountName: string;

  getFieldError: Function;
  setNumber: Function;
  remove: Function;
  handleChange: Function;
  handleBlur: Function;
  handleType: Function;
}
export interface ProductOptionsNoneProps {
  values: any;
  errors: any;
  touched: any;
  productPriceName: string;
  productDiscountName: string;
  handleBlur: Function;
  setFieldValue: Function;
}
