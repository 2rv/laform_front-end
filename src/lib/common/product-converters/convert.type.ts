export interface BasicOptionType {
  id: string;
  price: number;
  discount?: number;
  size: string;
  vendorCode: string;
  colorRu?: string;
  colorEn?: string;
}
interface BasicImageType {
  id: string;
  fileUrl: string;
}
interface BasicLikeType {
  id: string;
  userId: string;
  postId: string;
  masterClassId: string;
  sewingProductId: string;
  patternProductId: string;
}
export interface BasicMasterClassType {
  id: string;
  type: 0;
  createdDate: string;
  vendorCode: string;
  images: BasicImageType[];
  like?: BasicLikeType[];
  titleRu?: string;
  titleEn?: string;
  modifierRu?: string;
  modifierEn?: string;
  discount?: number;
  price: number;
  pinned?: boolean;
}
export interface BasicArticleType {
  id: string;
  type: 4;
  createdDate: string;
  image: BasicImageType;
  like?: BasicLikeType[];
  titleRu?: string;
  titleEn?: string;
  modifierRu?: string;
  modifierEn?: string;
  pinned?: boolean;
}
export interface BasicPatternType {
  id: string;
  type: 1 | 2;
  images: BasicImageType[];
  options: BasicOptionType[];
  like?: BasicLikeType[];
  titleRu?: string;
  titleEn?: string;
  modifierRu?: string;
  modifierEn?: string;
  complexity: number;
  pinned?: boolean;
}
export interface BasicSewingGoodType {
  id: string;
  type: 3;
  options: BasicOptionType[];
  images: BasicImageType[];
  like?: BasicLikeType[];
  titleRu?: string;
  titleEn?: string;
  modifierRu?: string;
  modifierEn?: string;
  pinned?: boolean;
}
