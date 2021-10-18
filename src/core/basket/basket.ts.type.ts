import { TableParamsProps } from 'src/lib/common/block-table';
import { BasicOptionType } from 'src/lib/common/product-converters/convert.type';
import { OptionType } from 'src/lib/element/card';

export interface basketStateType {
  id: string;
  indexId: string;
  type: number;
  optionId: string;
  count: number;
  length: number;
  isCount: boolean;
  isLength: boolean;
  masterProduct: masterProductType;
  patternProduct: patternProductType;
  sewingProduct: sewingProductType;
}
export interface masterProductType {
  id: string;
  type: number;
  vendorCode: string;
  titleRu?: string;
  titleEn?: string;
  price: number;
  discount?: number;
  categories?: any;
  images: any;
}
export interface sewingProductType {
  id: string;
  type: number;
  optionType: number;
  titleRu?: string;
  titleEn?: string;
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
  vendorCode?: string;
  categories: any;
  images: any;
  options: BasicOptionType[];
}
export interface patternProductType {
  id: string;
  type: number;
  optionType: number;
  titleRu?: string;
  titleEn?: string;
  complexity: number;
  vendorCode?: string;
  price?: number;
  discount?: number;
  count?: number;
  categories: any;
  images: any;
  options: BasicOptionType[];
}
export interface masterItemType {
  id: string;
  type: number;
  indexId: string;
  path: Function;
  pathConfig: any;
  image: any;
  name?: string;
  vendorCode: string;
  totalPrice: number;
  params: TableParamsProps;
}
export interface patternItemType {
  id: string;
  type: number;
  optionId?: number;
  indexId: string;
  path: Function;
  pathConfig: any;
  image: any;
  name?: string;
  vendorCode?: string;
  totalPrice: number;
  params: TableParamsProps;
  sizes?: OptionType[];
  count: number;
  maxCount?: number;
  isCount: boolean;
}
export interface sewingItemType {
  id: string;
  type: number;
  optionId?: number;
  indexId: string;
  path: Function;
  pathConfig: any;
  image: any;
  name?: string;
  vendorCode?: string;
  totalPrice: number;
  params: TableParamsProps;
  count?: number;
  length?: number;
  isCount?: boolean;
  isLength?: boolean;
  maxCount?: number;
  maxLength?: number;
  options?: OptionType[];
  sizes?: OptionType[];
  colors?: OptionType[];
}
