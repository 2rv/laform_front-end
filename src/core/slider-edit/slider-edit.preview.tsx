import styled from 'styled-components';
import { ReactComponent as UploadIcon } from 'src/asset/svg/upload.svg';
import { THEME_SIZE, spacing, THEME_COLOR, THEME_VALUE } from 'src/lib/theme';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonBasic } from 'src/lib/element/button';
import { SectionLayout } from 'src/lib/element/layout';
import { SlidePreviewProps, SLIDER_EDIT_FIELD_NAME } from './slider-edit.type';
import { ErrorField } from 'src/lib/element/error';

export function SlidePreview(props: SlidePreviewProps) {
  const {
    lang,
    formik: { values, errors, touched },
    onChangeImage,
  } = props;

  const isButton = values[SLIDER_EDIT_FIELD_NAME.IS_BUTTON];
  const imageError: any =
    errors[SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE] &&
    touched[SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE] &&
    errors[SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE];
  return (
    <SectionLayout type="SMALL">
      <PreviewTitle tid="SLIDER.EDIT_SLIDER.PHOTO.PREVIEW" />
      <PreviewContainer>
        <Blur />
        <SlideImage src={values[SLIDER_EDIT_FIELD_NAME.SLIDE_IMAGE]?.fileUrl} />
        <Field>
          <File type="file" onChange={onChangeImage} />
          <Placeholder tid="SLIDER.EDIT_SLIDER.PHOTO.SELECT_PHOTO" />
          <UploadIcon />
        </Field>
        <Content>
          <SlideText>
            {lang === 'ru' ? (
              <Text
                color={values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]}
                tid={values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_RU]}
              />
            ) : (
              <Text
                color={values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_COLOR]}
                tid={values[SLIDER_EDIT_FIELD_NAME.TITLE_TEXT_EN]}
              />
            )}
          </SlideText>
          {isButton &&
            (lang === 'ru' ? (
              <Button
                color={values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]}
                bgcolor={values[SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]}
                tid={values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_RU]}
              />
            ) : (
              <Button
                color={values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_COLOR]}
                bgcolor={values[SLIDER_EDIT_FIELD_NAME.BUTTON_COLOR]}
                tid={values[SLIDER_EDIT_FIELD_NAME.BUTTON_TEXT_EN]}
              />
            ))}
        </Content>
      </PreviewContainer>
      {imageError && <ErrorField errorTid={imageError} />}
    </SectionLayout>
  );
}
const PreviewTitle = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const SlideText = styled.div`
  text-align: center;
`;
const Text = styled(TitlePrimary)<any>`
  color: ${(p) => p.color};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  line-height: 1.5;
`;
const Content = styled.div`
  position: absolute;
  max-width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing(6)};
`;
const Button = styled(ButtonBasic)<any>`
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
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  filter: drop-shadow(0px 15px 75px rgba(0, 0, 0, 0.1));
`;
const PreviewContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
