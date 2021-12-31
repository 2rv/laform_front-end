export enum SLIDER_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type SliderStateType = {
  error?: string;
  pending: boolean;
  slidersData: SlideType[];
};
export type SliderActionType = {
  type: SLIDER_ACTION_TYPE;
  error?: string;
  data?: SlideType[];
};
export type SlideType = {
  id: string;
  titleTextRu: string;
  titleTextEn: string;
  buttonTextRu?: string;
  buttonTextEn?: string;
  titleTextColor: string;
  buttonTextColor?: string;
  buttonColor?: string;
  isButton: boolean;
  buttonPath?: string;
  image: string;
};

export type SliderComponentProps = {
  state: SliderStateType;
  lang: 'ru' | 'en';
};
export type SliderItemComponentProps = {
  data: SlideType;
  lang: 'ru' | 'en';
};
