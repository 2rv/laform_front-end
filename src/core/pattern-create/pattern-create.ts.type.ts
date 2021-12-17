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
  optionVisibility: boolean;
}
export interface dataValueType {
  type: 1 | 2;
  titleRu: string;
  descriptionRu: string;
  descriptionOld?: string;
  modifierRu: string;
  materialRu: any;
  materialOld?: string;
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
  deleted?: boolean;
  inEnglish: boolean;
  vendorCode?: string;
}
export interface formValueType {
  type: 1 | 2;
  titleRu: string;
  descriptionRu: string;
  descriptionOld?: string;
  modifierRu: string;
  materialRu: any;
  materialOld?: string;
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
  deleted?: boolean;
  vendorCode?: string;
  inEnglish: boolean;
}
