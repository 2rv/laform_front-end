export enum SLIDER_LIST_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  ADD_SLIDE = 'ADD_SLIDE',
}
export type SliderListStateType = {
  pending: boolean;
  data?: SlideType[];
  error?: string;
};
export type SliderListActionType = {
  type: SLIDER_LIST_ACTION_TYPE;
  error?: string;
  data?: SlideType[];
};
export type SlideType = {
  id: string;
  nameRu: string;
  nameEn: string;
  buttonTextRu?: string;
  buttonTextEn?: string;
  image: string;
};
export type SliderListComponentProps = {
  addSlide: () => void;
  removeSlide: (id: string, index: number) => void;
  editSlide: (id: string) => void;
  state: SliderListStateType;
  lang: 'ru' | 'en';
};
export type SliderItemProps = {
  index: number;
  data: SlideType;
  removeSlide: (id: string, index: number) => void;
  editSlide: (id: string) => void;
  lang: 'ru' | 'en';
};
