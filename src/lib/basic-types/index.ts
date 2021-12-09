import { USER_ROLE } from '../common/auth';

export interface BasicReactEditorType {
  blocks: [];
  time: number;
  version: string;
}
export interface BasicCategoryType {
  id: string;
  categoryNameRu: string;
  categoryNameEn: string;
  type: string;
}
export interface BasicRecommendationProducsType {
  id: string;
  masterClassId: BasicMasterClassType;
  postId: BasicArticleType;
  patternProductId: BasicPatternType;
  sewingProductId: BasicSewingGoodType;
}
export interface BasicRecommendationType {
  id: string;
  recommendationProducts: BasicRecommendationProducsType[];
}
export interface BasicFileType {
  id: string;
  fileUrl: string;
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
  postId: BasicArticleType;
  patternProductId: BasicPatternType;
  sewingProductId: BasicSewingGoodType;
}
export interface BasicArticleType {
  id: string;
  vendorCode: string;
  type: 4;
  createdDate: Date;
  image: BasicFileType;
  categories: BasicCategoryType[];
  recommendation: BasicRecommendationType;
  like: BasicLikeType[];
  titleRu: string;
  titleEn: string;
  modifierRu: string;
  modifierEn: string;
  modifierColor: string;
  articleRu: BasicReactEditorType;
  articleEn: BasicReactEditorType;
  pinned: false | true;
  deleted: false | true;
}
export interface BasicMasterClassType {
  id: string;
  type: 0;
  vendorCode: string;
  createdDate: Date;
  categories: BasicCategoryType[];
  images: BasicFileType[];
  recommendation: BasicRecommendationType;
  like: BasicLikeType[];
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
  pinned: false | true;
  deleted: false | true;
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
  like: BasicLikeType[];
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
  isCount: false | true;
  pinned: false | true;
  deleted: false | true;
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
  like: BasicLikeType[];
  descriptionRu?: string;
  descriptionEn?: string;
  price: string;
  discount: number;
  count: number;
  isCount: false | true;
  length: string;
  isLength: false | true;
  titleRu: string;
  titleEn: string;
  modifierRu: string;
  modifierEn: string;
  pinned: false | true;
  deleted: false | true;
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
  shippingPrice: number;
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
  emailConfirmed: true | false;
  notificationEmail: true | false;
  purchase: BasicPurchaseType[];
  userSettingId: BasicUserSettingType;
  comment: BasicCommentProps[];
  like: BasicRecommendationProducsType[];
}

export enum PURCHASE_STATUS {
  CREATED = 0, //'Сформирован',
  AWAITING_PAYMENT = 1, //'Ожидает оплаты',
  PAID = 2, //'Оплачено',
  AWAITING_SEND = 3, //'Ожидает отправки',
  SENT = 4, //'Отправлено',
  RECEIVED = 5, //'Получено',
  CANCELLED = 6, //'Отменено',
  RETURNED = 7, // 'Вовращен отправителю',
  REFUSED_TO_BUY = 8, //'Возвращен по гарантии',
}
export enum PURCHASE_STATUS_INFO {
  'Сформирован',
  'Ожидает оплаты',
  'Оплачено',
  'Ожидает отправки',
  'Отправлено',
  'Получено',
  'Отменено',
  'Вовращен отправителю',
  'Возвращен по гарантии',
}
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
