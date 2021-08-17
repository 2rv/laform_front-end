import { createRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as UploadIcon } from 'src/asset/svg/upload.svg';
import { THEME_COLOR, THEME_SIZE, spacing } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { TitlePrimary } from 'src/lib/element/title';
import { LinkPrimary } from 'src/lib/element/link';
import { ButtonPrimary } from 'src/lib/element/button';

export function SliderEditPreviewComponent({ sliderData, pickImage, sliderImage }) {
  const fileRef = createRef();

  return (
    <IndentLayout type="small">
      <PreviewTitle tid="Превью" />
      <PreviewContainer>
        <Blur />
        <SlideImage src={sliderImage || sliderData.imageUrl?.fileUrl} />
        <Field>
          <File type="file" ref={fileRef} onChange={pickImage} />
          <Placeholder tid="Выбрать фото" />
          <UploadIcon />
        </Field>
        <Content>
          <SlideText>
            <Text tid={sliderData.headingTextRu} />&nbsp;
            <BrandText tid="HEADER_LOGO.BRAND_TEXT" />
          </SlideText>
          <LinkPrimary>
            <Button tid={sliderData.buttonTextRu} />
          </LinkPrimary>
        </Content>
      </PreviewContainer>
    </IndentLayout>
  );
}
const PreviewTitle = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const SlideText = styled.div`
  text-align: center;
`;
const BrandText = styled(TextSecondary)`
  color: ${THEME_COLOR.PRIMARY};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const Text = styled(TitlePrimary)`
  color: white;
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  line-height: 44px;
`;
const Content = styled.div`
  position: absolute;
  width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing(6)};
`;
const Button = styled(ButtonPrimary)`
  padding: ${spacing(3)} ${spacing(11)};
`;
const Placeholder = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const Field = styled.label`
  position: absolute;
  left: 30px;
  top: 30px;
  padding: 15px;
  gap: 10px;
  display: flex;
  background-color: #fff;
  border-radius: 5px;
`;
const File = styled.input`
  display: none;
`;
const SlideImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
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
