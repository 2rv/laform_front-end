import { BasicReactEditorType, BasicFileType } from './index';

export type BasicRecommendationProducsDto = {
  id?: string;
  masterClassId?: { id: string };
  postId?: { id: string };
  patternProductId?: { id: string };
  sewingProductId?: { id: string };
};
export type BasicRecommendationDto = {
  id?: string;
  recommendationProducts: BasicRecommendationProducsDto[];
};

type CategoryDto = {
  id: string;
};

export type PostDto = {
  type?: 4;
  image: BasicFileType;
  categories?: CategoryDto[];
  recommendation: BasicRecommendationDto;
  titleRu: string;
  modifierRu?: string;
  articleRu: BasicReactEditorType;
  vendorCode?: string;
  deleted: boolean;
  inEnglish: boolean;
};

export type MasterClassDto = {
  type?: 0;
  images: BasicFileType[];
  categories?: CategoryDto[];
  recommendation: BasicRecommendationDto;
  titleRu: string;
  modifierRu?: string;
  articleRu: BasicReactEditorType;
  vendorCode?: string;
  descriptionRu: string;
  materialRu: BasicReactEditorType;
  price?: number;
  discount?: number;
  deleted: boolean;
  inEnglish: boolean;
};

export type SliderDto = {
  imageUrl: BasicFileType;

  headingTextRu: string;
  buttonTextRu?: string;
  headingTextEn: string;
  buttonTextEn?: string;

  buttonUrl?: string;
  titleTextColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  isHaveButton: boolean;
};

export type PatternProductsOptionDto = {
  id?: string;
  size: string;
  price: number;
  discount?: number;
  filesPdf: BasicFileType[];
  count?: number | null;
  optionVisibility: boolean;
};

export type PatternProductDto = {
  type: 1 | 2;
  vendorCode?: string;

  titleRu: string;
  modifierRu?: string;

  descriptionRu: string | undefined;
  descriptionOld: string | undefined;

  materialRu: BasicReactEditorType | null;
  materialOld: string | undefined;

  images: BasicFileType[];
  categories?: CategoryDto[];
  recommendation?: BasicRecommendationDto;

  complexity: 0 | 1 | 2 | 3 | 4 | 5;

  filesPdf: BasicFileType[];
  price: number | null;
  count: number | null | undefined;
  discount: number | null;
  options: PatternProductsOptionDto[];

  optionType: 0 | 2;
  deleted: boolean;
  isCount: boolean;
  inEnglish: boolean;
};

export type SewingProductOptionDto = {
  id?: string;
  size: string | undefined | null;
  colorRu: string | undefined | null;
  price: number | undefined | null;
  discount: number | undefined | null;
  count: number | undefined | null;
  length: number | undefined | null;
  optionVisibility: boolean;
};

export type SewingProductDto = {
  vendorCode?: string;

  titleRu: string;
  descriptionRu: string;
  modifierRu: string;

  images: BasicFileType[];
  categories?: CategoryDto[];
  recommendation?: BasicRecommendationDto;

  price: number | null;
  count: number | null | undefined;
  length: number | null | undefined;
  discount: number | null;
  options: SewingProductOptionDto[];

  optionType: 0 | 1 | 2 | 3;
  deleted: boolean;
  isCount: boolean;
  isLength: boolean;
  inEnglish: boolean;
};

export type CompilationDto = {
  id?: string;
  title: string;
  path?: string;
  inEnglish: boolean;
  compilationProducts: BasicRecommendationProducsDto[];
};

export type CommentDto = {
  text: string;
  userId?: string;
  postId?: string;
  sewingProductId?: string;
  patternProductId?: string;
  masterClassId?: string;
};
