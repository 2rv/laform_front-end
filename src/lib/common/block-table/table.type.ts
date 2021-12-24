import { OptionType } from 'src/lib/element/card';
export interface TableProps {
  headers?: string[];
  items: TableItemType[];
  changeItem?: Function;
  deleteItem?: Function;
}
export interface TableItemType {
  id: string;
  type?: 0 | 1 | 2 | 3 | 4;
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
  isCount?: boolean;
  isLength?: boolean;
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
  type?: 0 | 1 | 2 | 3;
  category?: string;
  count?: number;
  length?: number;
  complexity?: number;
  fullName?: string;
  userId?: string;
  address?: string;
  phone?: string;
  email?: string;
  createdDate?: Date;
}
