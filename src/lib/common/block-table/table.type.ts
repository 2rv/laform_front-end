import { DELIVERY_TYPE, PURCHASE_STATUS } from 'src/lib/basic-types';
import { OptionType } from 'src/lib/element/card';

export type TableHeaderProps = {
  children: string;
};
export type TableListProps = {
  items: TableItemData[];
  headers?: string[];
  changeItem?: ChangeItemFnType;
  deleteItem?: DeleteItemFnType;
};

export type TableItemProps = {
  data: TableItemData;
  changeItem?: ChangeItemFnType;
  deleteItem?: DeleteItemFnType;
};

//----------

export type TableItemData = TableCommentProps &
  Omit<TableEnumeratorCountProps, 'changeItem'> &
  Omit<TableEnumeratorLengthProps, 'changeItem'> &
  TableNameProps &
  TablePriceProps &
  TableStatusProps &
  Omit<TableActionsProps, 'changeItem' | 'deleteItem'> &
  TableActionsProps &
  TableParamsProps;

//----------

export type TableCommentProps = {
  comment?: string;
};
export type TableEnumeratorCountProps = {
  id: string;
  type?: number;
  indexId?: string;
  count?: number;
  maxCount?: number;
  changeItem?: ChangeItemFnType;
  isCount?: boolean;
  isLength?: boolean;
};
export type TableEnumeratorLengthProps = {
  id: string;
  type?: number;
  indexId?: string;
  length?: number;
  maxLength?: number;
  changeItem?: ChangeItemFnType;
  isLength?: boolean;
};
export type TableNameProps = {
  image?: string;
  name?: string;
  vendorCode?: string;
  isOrder?: string;
  path?: string | ((params: any) => string);
  pathConfig?: any;
};
export type TablePriceProps = {
  isLast?: boolean;
  totalPrice?: number;
};
export type TableStatusProps = {
  status?: PURCHASE_STATUS;
};

//----------

export type TableParamsProps = {
  params?: ParamsProps;
  otherParams?: ParamsProps;
};
export type ParamsProps = {
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
  deliveryType?: DELIVERY_TYPE;
};

//----------

export interface TableActionsProps
  extends ActionChangeProps,
    ActionDeleteProps,
    ActionDownloadProps {}

export type ActionChangeProps = {
  id: string;
  indexId?: string;
  changeItem?: ChangeItemFnType;
  optionIndex?: number;
  sizes?: OptionType[];
  colors?: OptionType[];
  options?: OptionType[];
  maxCount?: number;
  maxLength?: number;
  isCount?: boolean;
  isLength?: boolean;
};
export type ActionDeleteProps = {
  id: string;
  indexId?: string;
  deleteItem?: DeleteItemFnType;
};
export type ActionDownloadProps = {
  filePDF?: string;
};

export type DeleteItemFnType = (values: DeleteItemFnValues) => void;
export type DeleteItemFnValues = {
  id: string;
  indexId?: string;
};
export type ChangeItemFnType = (values: ChangeItemFnValues) => void;
export type ChangeItemFnValues = {
  id: string;
  indexId?: string;
  optionId?: string;
  count?: number;
  length?: number;
};
