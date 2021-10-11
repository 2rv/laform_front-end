export interface ProductOptionsProps {
  errors: any;
  touched: any;
  values: any;
  setFieldValue: Function;
  handleChange: Function;
  handleBlur: Function;

  productPriceName: string;
  productDiscountName: string;

  initialOption: any;

  fieldArrayName: string;
  optionTypeName: string;
  optionSizeName: string;
  optionColorName: string;
  optionPriceName: string;
  optionDiscountName: string;
}

export interface ProductOptionsOneProps {
  value: any;
  index: number;
  isFirst: boolean;
  handleChange: Function;
  handleBlur: Function;
  getFieldError: Function;
  setNumber: Function;
  remove: Function;
  fieldArrayName: string;
  optionSizeName: string;
  optionColorName: string;
  optionPriceName: string;
  optionDiscountName: string;
}

export interface ProductOptionsTwoProps {
  index: number;
  value: any;
  isFirst: boolean;
  handleChange: Function;
  handleBlur: Function;
  getFieldError: Function;
  setNumber: Function;
  remove: Function;
  fieldTitle: string;
  fieldPlaceholder: string;
  optionName: string;
  fieldArrayName: string;
  optionPriceName: string;
  optionDiscountName: string;
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

export interface ProductOptionsThreeProps {
  isFirst: boolean;
  value: any;
  index: number;
  fieldArrayName: string;

  optionTypeName: string;
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
}
