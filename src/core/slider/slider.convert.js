import { SLIDER_DATA_NAME, SLIDER_DATA_KEY } from './slider.type';

export const performSliderData = (data) => ({
  id: data.id,
  titleText: data.headingTextRu,
  titleTextColor: data.titleTextColor,
  buttonText: data.buttonTextRu,
  buttonTextColor: data.buttonTextColor,
  buttonColor: data.buttonColor,
  isButton: JSON.parse(data.isHaveButton),
  buttonPath: data.buttonUrl,
  image: data.imageUrl?.fileUrl,
});
