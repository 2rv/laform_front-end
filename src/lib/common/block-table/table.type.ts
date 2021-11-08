import { OptionType } from 'src/lib/element/card';

export interface TableItemType {
  id: string;
  type: number;
  indexId?: string;
  path?: any;
  pathConfig?: any;
  image?: any;
  name?: string;
  vendorCode?: string;
  totalPrice?: number;
  params?: TableParamsProps;
  status?: string;
  otherParams?: TableParamsProps;
  count?: number;
  length?: number;
  options?: OptionType[];
  sizes?: OptionType[];
  colors?: OptionType[];
  maxCount?: number;
  maxLength?: number;
  comment?: string;
  filePDF?: string;
  optionIndex?: number;
  isCount?: true | false;
  isLength?: true | false;
}

export interface TableItemProps {
  data: TableItemType;
  changeItem?: Function;
  deleteItem?: Function;
}
export interface TableParamsProps {
  option?: string;
  color?: string;
  size?: string;
  program?: string;
  format?: string;
  category?: string;
  count?: number;
  length?: number;
  complexity?: number;
  fullName?: string;
  userId?: string;
  diliveryInfo?: string;
  city?: string;
  deliveryMethod?: string;
  paymentMethod?: string;
  phoneNumber?: string;
  email?: string;
  createdDate?: Date;
}
