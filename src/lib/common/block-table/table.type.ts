import { OptionType } from 'src/lib/element/card';

export interface dataType {
  id: string;
  type: number;
  indexId?: string;
  path?: any;
  pathConfig?: any;
  image?: any;
  name?: string;
  vendorCode?: string;
  totalPrice?: number;
  params?: any;
  status?: string;
  otherParams?: any;
  count?: number;
  length?: number;
  options?: OptionType[];
  sizes?: OptionType[];
  colors?: OptionType[];
  maxCount?: number;
  maxLength?: number;
  comment?: string;
  filePDF?: string;
  optionId?: string;
  isCount?: boolean;
  isLength?: boolean;
}

export interface TableItemProps {
  data: dataType;
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
  count?: string;
  length?: string;
  complexity?: number;

  fullName?: string;
  userId?: string;
  diliveryInfo?: string;
  city?: string;
  diliveryMethod?: string;
  paymentMethod?: string;
  phoneNumber?: string;
  email?: string;
  createdDate?: string;
}
