import { ChangeEvent, FocusEventHandler } from 'react';
import { OptionType } from 'src/lib/element/card';

export enum CART_MODAL_FIELD_NAME {
  OPTION = 'option',
  COLOR = 'color',
  SIZE = 'size',
  COUNT = 'count',
  LENGTH = 'length',
}
export type CartModalValues = {
  [CART_MODAL_FIELD_NAME.COUNT]: number;
  [CART_MODAL_FIELD_NAME.LENGTH]: number;
  [CART_MODAL_FIELD_NAME.OPTION]: number;
  [CART_MODAL_FIELD_NAME.SIZE]: number;
  [CART_MODAL_FIELD_NAME.COLOR]: number;
};
export interface CartModalContainerProps {
  id: string;
  type: 0 | 1 | 2 | 3;
  optionType?: 0 | 1 | 2 | 3;
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
  isCount?: boolean;
  isLength?: boolean;
  options?: OptionType[];
  colors?: OptionType[];
  sizes?: OptionType[];
  thisIsCart?: boolean;
}
export interface CartModalComponentProps {
  optionType: 0 | 1 | 2 | 3;
  isCount: boolean;
  isLength: boolean;
  isCart: boolean;
  isPending: boolean;
  isDisabled: boolean;
  values: CartModalValues;
  count: number;
  length: number;
  price: number;
  discount: number;
  options: OptionType[];
  colors: OptionType[];
  sizes: OptionType[];
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleCount: (val: number) => void;
  handleLenght: (val: number) => void;
  handleBlur: FocusEventHandler<HTMLSelectElement>;
  addToCart: Function;
  activeAdding: boolean;
}
type getBasicProps = {
  options: OptionType[];
  colors: OptionType[];
  sizes: OptionType[];
  option: number;
  size: number;
  color: number;
  optionType: 0 | 1 | 2 | 3;
};
export interface getCountProps extends getBasicProps {
  count: number;
}
export interface getDiscountProps extends getBasicProps {
  discount: number;
}
export interface getLengthProps extends getBasicProps {
  length: number;
}
export interface getPriceProps extends getBasicProps {
  count: number;
  length: number;
  price: number;
  isCount: boolean;
  isLength: boolean;
}
export interface getInfoProps extends getBasicProps {
  id: string;
  type: 0 | 1 | 2 | 3;
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
