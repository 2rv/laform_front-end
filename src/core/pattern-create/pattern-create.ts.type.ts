export interface categoryType {
  id: string;
  categoryNameRu?: string;
  categoryNameEn?: string;
}
export interface categoryValueType {
  basicId: string;
}
export interface FileType {
  id?: string;
  fileUrl?: string;
  productFilePdf?: string;
  optionFilePdf?: string;
}
export interface optionType {
  size?: string;
  price?: number;
  filesPdf?: FileType[];
  discount?: number;
  count?: number;
}
export interface dataValueType {
  type: 1 | 2;
  titleRu: string;
  descriptionRu: string;
  modifierRu: string;
  materialRu: any;
  images: FileType[];
  recommendation: any;
  categories: categoryType[];
  complexity: number;
  price?: number;
  discount?: number;
  filesPdf: FileType[] | null;
  count?: number;
  isCount: boolean;
  optionType: 0 | 2;
  options: optionType[];
}
export interface formValueType {
  type: 1 | 2;
  titleRu: string;
  descriptionRu: string;
  modifierRu: string;
  materialRu: any;
  recommendation: any;
  categories: categoryValueType[];
  complexity: number;
  price?: number;
  filesPdf?: FileType[] | null;
  discount?: number;
  count?: number;
  isCount: boolean;
  optionType: 0 | 2;
  options: optionType[];
  images?: any;
}
