import { OutputData } from '@editorjs/editorjs';
import { USER_ROLE } from '../common/auth';

export type BasicReactEditorType = OutputData;

export interface BasicCategoryType {
  id: string;
  categoryNameRu: string;
  categoryNameEn: string;
  type: string;
}
export interface BasicLikeType {
  id: string;
  userId: string;
  postId: string;
  masterClassId: string;
  sewingProductId: string;
  patternProductId: string;
}
export interface BasicOptionType {
  id: string;
  vendorCode: string;
  colorRu: string;
  colorEn: string;
  size: string;
  price: string;
  discount: number;
  count: number;
  length: string;
  filesPdf: BasicFileType[];
  optionVisibility: boolean;
}
export interface BasicAddressType {
  country: string;
  city: string;
  settlement: string;
  street: string;
  house: string;
  postal_code: string;
  kladr_id: string;
}
export interface BasicUserSettingType {
  address: BasicAddressType;
  fullName: string;
  phone: string;
}
export interface BasicCommentProps {
  createDate: Date;
  id: string;
  text: string;
  masterClassId: BasicMasterClassType;
  postId: BasicPostType;
  patternProductId: BasicPatternType;
  sewingProductId: BasicSewingGoodType;
}
export interface BasicPostType {
  id: string;
  vendorCode: string;
  type: 4;
  createdDate: Date;
  image: BasicFileType;
  categories: BasicCategoryType[];
  recommendation: BasicRecommendationType;
  like: BasicLikeType[] | undefined;
  titleRu: string;
  titleEn: string;
  modifierRu: string;
  modifierEn: string;
  articleRu: BasicReactEditorType;
  articleEn: BasicReactEditorType;
  deleted: boolean;
  inEnglish: boolean;
}
export interface BasicMasterClassType {
  id: string;
  type: 0;
  vendorCode: string;
  createdDate: Date;
  categories: BasicCategoryType[];
  images: BasicFileType[];
  recommendation: BasicRecommendationType;
  like: BasicLikeType[] | undefined;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  materialRu: BasicReactEditorType;
  materialEn: BasicReactEditorType;
  modifierRu: string;
  modifierEn: string;
  articleRu: BasicReactEditorType;
  articleEn: BasicReactEditorType;
  price: string;
  discount: number;
  deleted: boolean;
  inEnglish: boolean;
}
export interface BasicPatternType {
  id: string;
  wpIdNew?: string;
  type: 1 | 2;
  optionType: 0 | 2;
  vendorCode: string;
  createdDate: Date;
  categories: BasicCategoryType[];
  images: BasicFileType[];
  filesPdf: BasicFileType[];
  options: BasicOptionType[];
  recommendation: BasicRecommendationType;
  like: BasicLikeType[] | undefined;
  titleRu: string;
  titleEn: string;
  materialRu: BasicReactEditorType;
  materialEn: BasicReactEditorType;
  descriptionRu?: string;
  descriptionEn?: string;
  modifierRu: string;
  modifierEn: string;
  materialOld?: string;
  descriptionOld?: string;
  complexity: 1 | 2 | 3 | 4 | 5;
  price: string;
  discount: number;
  count: number;
  isCount: boolean;
  deleted: boolean;
  inEnglish: boolean;
}
export interface BasicSewingGoodType {
  id: string;
  type: 3;
  optionType: 0 | 1 | 2 | 3;
  vendorCode: string;
  createdDate: Date;
  categories: BasicCategoryType[];
  images: BasicFileType[];
  options: BasicOptionType[];
  recommendation: BasicRecommendationType;
  like: BasicLikeType[] | undefined;
  descriptionRu?: string;
  descriptionEn?: string;
  price: string;
  discount: number;
  count: number;
  isCount: boolean;
  length: string;
  isLength: boolean;
  titleRu: string;
  titleEn: string;
  modifierRu: string;
  modifierEn: string;
  deleted: boolean;
  inEnglish: boolean;
}
export interface BasicPurchaseType {
  id: string;
  orderNumber: string;
  createdDate: Date;
  orderStatus: PURCHASE_STATUS;
  userId: any;
  email: string;
  fullName: string;
  phone: string;
  comment: string;
  purchaseProducts: BasicPurchaseProductType[];
  sdek?: boolean;
  sdekTariffCode?: number;
  sdekCityCode?: number;
  address: string;
  shippingPrice: string;
  price: string;
  promoCode: string;
  promoCodeDiscount: number;
  purchaseProductsCount: number;
}
export interface BasicPurchaseProductType {
  id: string;
  createdDate: Date;
  purchase: BasicPurchaseType;
  masterClassId: BasicMasterClassType;
  patternProductId: BasicPatternType;
  sewingProductId: BasicSewingGoodType;
  optionId?: BasicOptionType;
  type: 0 | 1 | 2 | 3;
  totalCount: number;
  totalLength: string;
  totalDiscount: number;
  totalPrice: string;
}
export interface BasicUserInfoType {
  id: number;
  createDate: Date;
  login: string;
  role: USER_ROLE;
  email: string;
  emailConfirmed: boolean;
  notificationEmail: boolean;
  purchase: BasicPurchaseType[];
  userSettingId: BasicUserSettingType;
  comment: BasicCommentProps[];
  like: BasicProductLinkType[];
}
export type BasicSlideType = {
  id: string;
  headingTextRu: string;
  buttonTextRu?: string;

  headingTextEn: string;
  buttonTextEn?: string;

  buttonUrl?: string;
  titleTextColor: string;
  buttonColor?: string;
  buttonTextColor?: string;
  isHaveButton: boolean;
  imageUrl: BasicFileType;
};
export enum PURCHASE_STATUS {
  'Сформирован' = 0, //'Сформирован',
  'Ожидает оплаты' = 1, //'Ожидает оплаты',
  'Оплачено' = 2, //'Оплачено',
  'Ожидает отправки' = 3, //'Ожидает отправки',
  'Отправлено' = 4, //'Отправлено',
  'Получено' = 5, //'Получено',
  'Отменено' = 6, //'Отменено',
  'Вовращен отправителю' = 7, // 'Вовращен отправителю',
  'Возвращен по гарантии' = 8, //'Возвращен по гарантии',
}
export const PURCHASE_STATUS_INFO = {
  0: 'Сформирован',
  1: 'Ожидает оплаты',
  2: 'Оплачено',
  3: 'Ожидает отправки',
  4: 'Отправлено',
  5: 'Получено',
  6: 'Отменено',
  7: 'Вовращен отправителю',
  8: 'Возвращен по гарантии',
};
export const PURCHASE_STATUS_SELECT = [
  { id: 0, tid: 'Сформирован' },
  { id: 1, tid: 'Ожидает оплаты' },
  { id: 2, tid: 'Оплачено' },
  { id: 3, tid: 'Ожидает отправки' },
  { id: 4, tid: 'Отправлено' },
  { id: 5, tid: 'Получено' },
  { id: 6, tid: 'Отменено' },
  { id: 7, tid: 'Вовращен отправителю' },
  { id: 8, tid: 'Возвращен по гарантии' },
];
export type BasicFileType = {
  id: string;
  fileUrl: string;
};
export type FileType = {
  id?: string;
  fileUrl: string;
  file?: File;
};

export type BasicProductLinkType = {
  id: string;
  masterClassId: BasicMasterClassType;
  postId: BasicPostType;
  patternProductId: BasicPatternType;
  sewingProductId: BasicSewingGoodType;
};
export type BasicRecommendationType = {
  id: string;
  recommendationProducts: BasicProductLinkType[];
};
export type BasicCompilationType = {
  id: string;
  createdDate: Date;
  title: string;
  path?: string;
  inEnglish: boolean;
  compilationProducts: BasicProductLinkType[];
};
