export interface OptionType {
  id: number;
  optionId: string;
  tid: string;
  tvalue: {
    color?: string;
    size?: string;
    price?: number;
  };
  size?: string;
  color?: string;
  price?: number;
  discount?: number;
  vendorCode: string;
  count?: number;
  length?: number;
}
export enum CART_MODAL_FIELD_NAME {
  OPTION = 'option',
  COLOR = 'color',
  SIZE = 'size',
  COUNT = 'count',
  LENGTH = 'length',
}

export interface CartModalContainerProps {
  id: string;
  type: number;
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
  options?: OptionType[];
  colors?: OptionType[];
  sizes?: OptionType[];
  onCart?: Function;
}
export interface CartModalComponentProps {
  isOptions: boolean;
  isSizes: boolean;
  isColors: boolean;
  isCount: boolean;
  isLength: boolean;
  isCart: boolean;
  isPending: boolean;
  isDisabled: boolean;
  values: any;
  count: number;
  length: number;
  price: number;
  discount: number;
  options: OptionType[];
  colors: OptionType[];
  sizes: OptionType[];
  handleChange: Function;
  handleCount: Function;
  handleLenght: Function;
  handleBlur: Function;
  addToCart: Function;
}

interface getBasicProps {
  options: OptionType[];
  colors: OptionType[];
  sizes: OptionType[];
  option?: number | string;
  size?: number | string;
  color?: number | string;
}
export interface getCountProps extends getBasicProps {
  count?: number;
}
export interface getDiscountProps extends getBasicProps {
  discount?: number;
}
export interface getLengthProps extends getBasicProps {
  length?: number;
}
export interface getPriceProps extends getBasicProps {
  count?: number;
  length?: number;
  price?: number;
  isCount?: boolean;
  isLength?: boolean;
}
export interface getInfoProps extends getBasicProps {
  id: string;
  type: number;
  count?: number;
  length?: number;
  isCount?: boolean;
  isLength?: boolean;
}

export interface isCartProps extends getBasicProps {
  optionId?: string;
  id?: string;
  productId?: string;
}
