import { ChangeEvent, FocusEventHandler } from 'react';
import { OptionType } from 'src/lib/element/card';
import { FieldSelectOptionType } from 'src/lib/element/field';

export enum SELECT_OPTIONS_FIELD_NAME {
  OPTION = 'option',
  COLOR = 'color',
  SIZE = 'size',
  COUNT = 'count',
  LENGTH = 'length',
}
export type SelectOptionValues = {
  [SELECT_OPTIONS_FIELD_NAME.COUNT]: number;
  [SELECT_OPTIONS_FIELD_NAME.LENGTH]: number;
  [SELECT_OPTIONS_FIELD_NAME.OPTION]: number;
  [SELECT_OPTIONS_FIELD_NAME.SIZE]: number;
  [SELECT_OPTIONS_FIELD_NAME.COLOR]: number;
};
export interface CartModalContainerProps {
  id: string;
  type: 0 | 1 | 2 | 3;
  like: boolean | undefined;
  vendorCode?: string;
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
  options?: OptionType[];
  colors?: OptionType[];
  sizes?: OptionType[];
  isCount?: boolean;
  isLength?: boolean;
  optionType?: 0 | 1 | 2 | 3;
}
export interface CartModalComponentProps {
  id: string;
  type: 0 | 1 | 2 | 3;
  like: boolean | undefined;
  vendorCode: string;
  optionType: 0 | 1 | 2 | 3;
  isCount: boolean;
  isLength: boolean;
  isCart: boolean;
  isPending: boolean;
  isDisabled: boolean;
  values: SelectOptionValues;
  count: number;
  length: number;
  price: number;
  discount: number;
  options: OptionType[];
  colors: OptionType[];
  sizes: OptionType[];
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleBlur: FocusEventHandler<HTMLSelectElement>;
  handleCount: (val: number) => void;
  handleLenght: (val: number) => void;
  addToCart: Function;
}
export interface ProductSelectFieldProps {
  titleTid?: string;
  name: string;
  defaultTid?: string;
  options: FieldSelectOptionType[];
  value: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur: FocusEventHandler<HTMLSelectElement>;
  isSize?: boolean;
}
export type ProductEnumeratorCountFieldProps = {
  titleTid?: string;
  maxNumber?: number;
  minNumber?: number;
  count: number;
  onChange: (val: number) => void;
};
export type ProductEnumeratorLengthFieldProps = {
  titleTid?: string;
  maxLength?: number;
  minLength?: number;
  length: number;
  onChange: (val: number) => void;
};
interface getBasicProps {
  options: OptionType[];
  colors: OptionType[];
  sizes: OptionType[];
  option: number;
  size: number;
  color: number;
  optionType: 0 | 1 | 2 | 3;
}
export interface getPriceProps extends getBasicProps {
  count: number;
  length: number;
  price: number;
  isCount: boolean;
  isLength: boolean;
}
export interface getDiscountProps extends getBasicProps {
  discount: number;
}
export interface getCountProps extends getBasicProps {
  count: number;
}
export interface getLengthProps extends getBasicProps {
  length: number;
}
export interface getVendorCodeProps extends getBasicProps {
  vendorCode: string;
}
export interface getInfoProps extends getBasicProps {
  id: string;
  type: number;
  count: number;
  length: number;
  isCount: boolean;
  isLength: boolean;
}
export interface isCartProps extends getBasicProps {
  optionId: string;
  id: string;
  productId: string;
}
