import styled from 'styled-components';
import { useState } from 'react';
import { FieldArray } from 'formik';
import { ReactComponent as ImageIcon } from '../../asset/svg/image.svg';
import { ReactComponent as RemoveIcon } from '../../asset/svg/remove.svg';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { IconButton } from '../../lib/element/button';
import { ErrorField } from '../../lib/element/error';

export function ProductImages(props) {
  const {
    errors,
    setFieldValue,
    imagesArrayName,
    imageFieldName,
    maxImages = 6,
    title,
  } = props;

  const [priviewImages, setPreviewImage] = useState([]);

  const setPreview = (push) => (event) => {
    const file = event.currentTarget?.files?.[0];
    if (file?.type.split('/')[0] !== 'image' || !file) {
      alert('PRODUCT_IMAGES.SELECT_ONLY_IMAGE');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader?.result) {
        const copy = [...priviewImages];
        copy.push(reader.result);
        setPreviewImage(copy);
        push({ [imageFieldName]: file });
      }
    };
    reader.readAsDataURL(file);
  };

  const removePreview = (remove, index) => {
    const copy = [...priviewImages];
    copy.splice(index, 1);
    setPreviewImage(copy);
    remove(index);
  };

  const changePreview = (index) => (event) => {
    const file = event.currentTarget?.files?.[0];

    if (file?.type.split('/')[0] !== 'image' || !file) {
      alert('PRODUCT_IMAGES.SELECT_ONLY_IMAGE');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader?.result) {
        const copy = [...priviewImages];
        copy.splice(index, 1, reader.result);
        setPreviewImage(copy);
        setFieldValue(`${imagesArrayName}.${index}.${imageFieldName}`, file);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <SectionLayout type="SMALL">
      <Title tid={title} />
      <FieldArray name={imagesArrayName}>
        {({ remove, push }) => (
          <Container type="SMALL">
            {priviewImages.map((item, index) => {
              return (
                <ImageContainer key={index}>
                  <Image src={item} />
                  <PositionContainer>
                    <Button>
                      <Icon />
                      <File type="file" onChange={changePreview(index)} />
                    </Button>
                    <IconButton onClick={() => removePreview(remove, index)}>
                      <RemoveIcon />
                    </IconButton>
                  </PositionContainer>
                </ImageContainer>
              );
            })}
            {priviewImages.length !== maxImages && (
              <ImageContainer>
                <AddImage>
                  <Icon />
                  <File type="file" onChange={setPreview(push)} />
                  <Text tid="PRODUCT_IMAGES.ADD_PHOTO" />
                </AddImage>
              </ImageContainer>
            )}
          </Container>
        )}
      </FieldArray>
      {errors[imagesArrayName] && (
        <ErrorField errorTid={errors[imagesArrayName]} />
      )}
    </SectionLayout>
  );
}
const Icon = styled(ImageIcon)`
width: 20px;
height: 20px;
`
const Button = styled.label`
  display: flex;
  width: 46px;
  min-width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  cursor: pointer;
`;
const Text = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const AddImage = styled.label`
  display: flex;
  width: 100%;
  height: 100%;
  gap: ${spacing(2)};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const File = styled.input`
  display: none;
`;
const Container = styled(SectionLayout)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1070px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const ImageContainer = styled.div`
  background-color: ${THEME_COLOR.GRAY};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 274px;
`;
const PositionContainer = styled.div`
  display: flex;
  position: absolute;
  gap: ${spacing(2)};
  left: ${spacing(2)};
  top: ${spacing(2)};
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
