export interface BasicProgram {
  id: string;
  price: number;
  programNameRu?: string;
  programNameEn?: string;
  vendorCode: string;
}
export interface BasicSize {
  id: string;
  price: number;
  size?: string;
  vendorCode: string;
}
export interface BasicColor {
  id: string;
  color?: string;
}
export interface BasicBasketType {
  id: string;
  color?: string;
  size?: string;
  count?: number;
  program?: string;
}

interface BasicImage {
  id: string;
  fileUrl: string;
}
interface BasicLike {
  id: string;
  userId: string;
  postId: string;
  masterClassId: string;
  sewingProductId: string;
  patternProductId: string;
}
export interface BasicMasterClassType {
  id: string;
  images: BasicImage[];
  programs: BasicProgram[];
  like?: BasicLike[];
  titleRu?: string;
  titleEn?: string;
  modifier?: string;
  discount?: number;
  type: 0;
  pinned?: boolean;
}
export interface BasicPatternType {
  id: string;
  images: BasicImage[];
  sizes: BasicSize[];
  like?: BasicLike[];
  titleRu?: string;
  titleEn?: string;
  discount?: number;
  modifier?: string;
  type: 1 | 2;
  complexity: number;
  pinned?: boolean;
}
export interface BasicSewingGoodType {
  id: string;
  sizes: BasicSize[];
  colors: BasicColor[];
  images: BasicImage[];
  like?: BasicLike[];
  titleRu?: string;
  titleEn?: string;
  modifier?: string;
  type: 3;
  discount?: number;
  pinned?: boolean;
}
export interface BasicArticleType {
  id: string;
  createdDate: string;
  image: BasicImage;
  like?: BasicLike[];
  titleRu?: string;
  modifier?: string;
  titleEn?: string;
  type: 4;
  pinned?: boolean;
}
