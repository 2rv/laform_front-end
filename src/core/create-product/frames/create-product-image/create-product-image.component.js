import { createRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ChangeIcon } from '../../../../asset/svg/change-icon.svg';
import { ReactComponent as RemoveIcon } from '../../../../asset/svg/remove.svg';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { IconButton } from '../../../../lib/element/button';

export function CreateProductImageComponent(props) {
  const { setImage, removeImage, changeImage } = props;

  //--------------------------------------------------------------------------

  const [previewData, setPriviewData] = useState([]);

  //--------------------------------------------------------------------------

  const setPreview = (event) => {
    const file = event.target?.files?.[0];
    setImage(file);
    if (file.type.split('/')[0] !== 'image') {
      alert('Необходим тип - изображение');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const copy = [...previewData];
      copy.push(reader?.result);
      setPriviewData(copy);
    };
    reader.readAsDataURL(file);
  };

  const removePreview = (index) => {
    removeImage(index);
    const copy = [...previewData];
    copy.splice(index, 1);
    setPriviewData(copy);
  };

  const changePreview = (index) => (event) => {
    const file = event.target?.files?.[0];
    changeImage(file, index);
    if (file.type.split('/')[0] !== 'image') {
      alert('Необходим тип - изображение');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const copy = [...previewData];
      copy.splice(index, 1, reader?.result);
      setPriviewData(copy);
    };
    reader.readAsDataURL(file);
  };

  return (
    <SectionLayout type="SMALL">
      <Title tid="Фотографии товара" />
      <Container type="SMALL">
        {previewData.map((image, index) => {
          return (
            <ImageContainer key={index}>
              <Image src={image} />
              <PositionContainer>
                <Button>
                  <ChangeIcon />
                  <File type="file" onChange={changePreview(index)} />
                </Button>
                <IconButton onClick={() => removePreview(index)}>
                  <RemoveIcon />
                </IconButton>
              </PositionContainer>
            </ImageContainer>
          );
        })}
        {previewData.length !== 6 && (
          <ImageContainer>
            <AddImage>
              <ChangeIcon />
              <File type="file" onChange={setPreview} />
              <Text tid="Добавить фото" />
            </AddImage>
          </ImageContainer>
        )}
      </Container>
    </SectionLayout>
  );
}
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
