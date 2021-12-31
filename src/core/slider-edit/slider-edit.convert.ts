import { BasicFileType, BasicSlideType } from 'src/lib/basic-types';
import { SliderDto } from 'src/lib/basic-types/create';
import { SLIDER_EDIT_FIELD_NAME, SliderEditValue } from './slider-edit.type';

export const convertForSave = (
  image: BasicFileType,
  values: SliderEditValue,
): SliderDto => ({
  imageUrl: image,

  headingTextRu: values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_RU],
  buttonTextRu: values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_RU],

  headingTextEn: values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_EN],
  buttonTextEn: values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_EN],

  buttonUrl: values[SLIDER_EDIT_FIELD_NAME.BUTTON_PATH],
  titleTextColor: values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR],
  buttonColor: values[SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR],
  buttonTextColor: values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR],
  isHaveButton: values[SLIDER_EDIT_FIELD_NAME.IS_BUTTON],
});

export const convertForChange = (data: BasicSlideType): SliderEditValue => ({
  [SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE]: data.imageUrl,
  [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_RU]: data.headingTextRu,
  [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_EN]: data.headingTextEn,
  [SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]: data.titleTextColor || '',
  [SLIDER_EDIT_FIELD_NAME.IS_BUTTON]: data.isHaveButton,
  [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_RU]: data.buttonTextRu || '',
  [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_EN]: data.buttonTextEn || '',
  [SLIDER_EDIT_FIELD_NAME.BUTTON_PATH]: data.buttonUrl || '',
  [SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]: data.buttonColor || '',
  [SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]: data.buttonTextColor || '',
});
