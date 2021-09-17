import styled from 'styled-components';
import { ReactComponent as UploadIcon } from '../../../../asset/svg/upload.svg';
import {
  THEME_SIZE,
  spacing,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';
import { TitlePrimary } from '../../../../lib/element/title';
import { LinkPrimary } from '../../../../lib/element/link';
import { ButtonBasic } from '../../../../lib/element/button';
import { SectionLayout } from '../../../../lib/element/layout';
import { SLIDER_EDIT_FIELD_NAME } from '../../slider-edit.type';

export function SliderEditPreviewComponent(props) {
  const {
    pickImage,
    sliderImage,
    values,
    titleTextColorOptions,
    buttonColorOptions,
    buttonTextColorOptions,
  } = props;
  const textColor =
    titleTextColorOptions[values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]]
      ?.color;
  const buttonTextColor =
    buttonTextColorOptions[values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]]
      ?.color;
  const buttonColor =
    buttonColorOptions[values[SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]]?.color;
  const isButton = values[SLIDER_EDIT_FIELD_NAME.IS_BUTTON];
  return (
    <SectionLayout type="SMALL">
      <PreviewTitle tid="SLIDER.EDIT_SLIDER.PHOTO.PREVIEW" />
      <PreviewContainer>
        <Blur />
        <SlideImage src={sliderImage} />
        <Field>
          <File type="file" onChange={pickImage} />
          <Placeholder tid="SLIDER.EDIT_SLIDER.PHOTO.SELECT_PHOTO" />
          <UploadIcon />
        </Field>
        <Content>
          <SlideText>
            <Text
              color={textColor}
              tid={values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT]}
            />
          </SlideText>
          {isButton && (
            <Button
              color={buttonTextColor}
              bgcolor={buttonColor}
              tid={values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT]}
            />
          )}
        </Content>
      </PreviewContainer>
    </SectionLayout>
  );
}
const PreviewTitle = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const SlideText = styled.div`
  text-align: center;
`;
const Text = styled(TitlePrimary)`
  color: ${(p) => p.color};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  line-height: 1.5;
`;
const Content = styled.div`
  position: absolute;
  width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing(6)};
`;
const Button = styled(ButtonBasic)`
  color: ${(p) => p.color};
  background-color: ${(p) => p.bgcolor}; ;
`;
const Placeholder = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const Field = styled.label`
  position: absolute;
  left: 30px;
  top: 30px;
  padding: ${spacing(3)};
  gap: ${spacing(2)};
  display: flex;
  background-color: ${THEME_COLOR.WHITE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  :hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
const File = styled.input`
  display: none;
`;
const SlideImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  object-fit: cover;
`;
const Blur = styled.div`
  background: rgba(47, 42, 44, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
`;
const PreviewContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
`;
