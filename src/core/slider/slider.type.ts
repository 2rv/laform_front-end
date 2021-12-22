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
  titleText: string;
  titleTextColor: string;
  buttonText?: string;
  buttonTextColor?: string;
  buttonColor?: string;
  isButton: boolean;
  buttonPath?: string;
  image: string;
};

export type SliderComponentProps = {
  state: SliderStateType;
};
export type SliderItemComponentProps = {
  data: SlideType;
};
